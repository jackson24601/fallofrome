import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const host = process.env.HOST ?? "0.0.0.0";
const port = Number.parseInt(process.env.PORT ?? "8000", 10);
const root = resolve(fileURLToPath(new URL(".", import.meta.url)));

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
};

const server = createServer(async (request, response) => {
  if (!request.url) {
    sendNotFound(response);
    return;
  }

  const requestedPath = getSafePath(request.url);
  if (!requestedPath) {
    sendNotFound(response);
    return;
  }

  try {
    const stats = await stat(requestedPath);
    const filePath = stats.isDirectory() ? join(requestedPath, "index.html") : requestedPath;

    if (!existsSync(filePath)) {
      sendNotFound(response);
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
      "Cache-Control": "no-store",
    });
    createReadStream(filePath).pipe(response);
  } catch {
    sendNotFound(response);
  }
});

server.listen(port, host, () => {
  console.log(`Fall of Rome is playable at http://localhost:${port}`);
});

function getSafePath(url) {
  const pathname = new URL(url, `http://${host}:${port}`).pathname;
  const normalizedPath = normalize(decodeURIComponent(pathname)).replace(/^(\.\.(\/|\\|$))+/, "");
  const filePath = join(root, normalizedPath === sep ? "index.html" : normalizedPath);

  return filePath.startsWith(root) ? filePath : null;
}

function sendNotFound(response) {
  response.writeHead(404, {
    "Content-Type": "text/plain; charset=utf-8",
  });
  response.end("Not found");
}
