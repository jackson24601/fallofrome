const territories = [
  {
    id: "britannia",
    name: "Britannia",
    region: "frontier",
    regionLabel: "Frontier Kingdoms",
    label: [205, 163],
    points: "128,145 199,97 279,109 288,174 225,219 153,202",
    summary:
      "A remote imperial province exposed to Saxon raids and ambitious generals.",
    neighbors: ["gallia", "germania"],
  },
  {
    id: "gallia",
    name: "Gallia",
    region: "west",
    regionLabel: "Western Empire",
    label: [310, 278],
    points: "187,223 304,190 429,224 408,332 320,385 211,345",
    summary:
      "The rich western heartland that ties Britannia, Germania, Hispania, and Italia together.",
    neighbors: ["britannia", "germania", "hispania", "italia", "pannonia"],
  },
  {
    id: "germania",
    name: "Germania",
    region: "frontier",
    regionLabel: "Frontier Kingdoms",
    label: [397, 156],
    points: "293,90 440,109 506,197 428,218 310,182",
    summary:
      "A northern pressure zone for migrating confederations and imperial counterattacks.",
    neighbors: ["britannia", "gallia", "pannonia"],
  },
  {
    id: "hispania",
    name: "Hispania",
    region: "west",
    regionLabel: "Western Empire",
    label: [250, 438],
    points: "143,371 309,354 380,430 330,524 176,510 84,444",
    summary:
      "A defensible western province with sea access toward Italia and North Africa.",
    neighbors: ["gallia", "italia", "africa", "mauretania"],
  },
  {
    id: "mauretania",
    name: "Mauretania",
    region: "frontier",
    regionLabel: "Frontier Kingdoms",
    label: [161, 584],
    points: "64,514 214,526 302,590 210,651 69,623 36,559",
    summary:
      "The western African edge of Roman influence, valuable for flanking the Mediterranean.",
    neighbors: ["hispania", "africa"],
  },
  {
    id: "italia",
    name: "Italia",
    region: "west",
    regionLabel: "Western Empire",
    label: [526, 420],
    points: "449,337 548,344 622,428 581,520 488,475 425,402",
    summary:
      "Roma and the peninsula form the symbolic center of the Western Empire.",
    neighbors: ["gallia", "hispania", "africa", "pannonia", "graecia"],
  },
  {
    id: "africa",
    name: "Africa",
    region: "west",
    regionLabel: "Western Empire",
    label: [439, 602],
    points: "252,562 439,520 618,555 608,648 402,665 227,626",
    summary:
      "The grain coast is a strategic prize that can sustain armies across the west.",
    neighbors: ["mauretania", "hispania", "italia", "graecia", "aegyptus"],
  },
  {
    id: "pannonia",
    name: "Pannonia",
    region: "west",
    regionLabel: "Western Empire",
    label: [537, 286],
    points: "435,234 577,219 657,292 605,360 488,340 410,301",
    summary:
      "The Danube shield links the western court to Balkan and northern frontier wars.",
    neighbors: ["gallia", "germania", "italia", "dacia", "graecia"],
  },
  {
    id: "dacia",
    name: "Dacia",
    region: "frontier",
    regionLabel: "Frontier Kingdoms",
    label: [719, 247],
    points: "618,181 753,177 821,255 746,326 648,291",
    summary:
      "A contested frontier beyond the Danube where invaders can gather momentum.",
    neighbors: ["pannonia", "thracia", "armenia"],
  },
  {
    id: "graecia",
    name: "Graecia",
    region: "east",
    regionLabel: "Eastern Empire",
    label: [727, 426],
    points: "637,360 768,332 840,431 791,526 668,494 604,425",
    summary:
      "The Aegean crossroads controls movement between Roma, Africa, and Constantinople.",
    neighbors: ["italia", "africa", "pannonia", "thracia", "asia"],
  },
  {
    id: "thracia",
    name: "Thracia",
    region: "east",
    regionLabel: "Eastern Empire",
    label: [847, 356],
    points: "765,280 889,288 929,374 846,425 773,342",
    summary:
      "Constantinople guards the passage between the Balkans, Black Sea, and Anatolia.",
    neighbors: ["dacia", "graecia", "asia", "armenia"],
  },
  {
    id: "asia",
    name: "Asia",
    region: "east",
    regionLabel: "Eastern Empire",
    label: [992, 407],
    points: "906,331 1056,326 1124,414 1044,492 922,457 856,390",
    summary:
      "Anatolia is a wealthy eastern bastion with routes toward Syria and the Balkans.",
    neighbors: ["graecia", "thracia", "syria", "armenia"],
  },
  {
    id: "armenia",
    name: "Armenia",
    region: "frontier",
    regionLabel: "Frontier Kingdoms",
    label: [1031, 278],
    points: "902,212 1061,219 1166,305 1094,368 984,322 891,281",
    summary:
      "A mountainous buffer between Rome's eastern provinces and rival empires.",
    neighbors: ["dacia", "thracia", "asia", "syria"],
  },
  {
    id: "syria",
    name: "Syria",
    region: "east",
    regionLabel: "Eastern Empire",
    label: [1047, 544],
    points: "974,491 1114,471 1160,552 1084,620 951,590 916,522",
    summary:
      "A fortified eastern province that anchors campaigns into Egypt and Armenia.",
    neighbors: ["asia", "armenia", "aegyptus"],
  },
  {
    id: "aegyptus",
    name: "Aegyptus",
    region: "east",
    regionLabel: "Eastern Empire",
    label: [861, 631],
    points: "787,555 935,544 992,641 927,714 771,694",
    summary:
      "The Nile province is a high-value supply center at the edge of the eastern sea lanes.",
    neighbors: ["africa", "graecia", "syria"],
  },
];

const board = document.querySelector("#territories");
const selectedName = document.querySelector("#territory-name");
const selectedSummary = document.querySelector("#territory-summary");
const selectedRegion = document.querySelector("#territory-region");
const selectedNeighbors = document.querySelector("#territory-neighbors");

function renderTerritories() {
  const fragment = document.createDocumentFragment();

  territories.forEach((territory) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.classList.add("territory");
    group.dataset.id = territory.id;
    group.dataset.region = territory.region;
    group.setAttribute("tabindex", "0");
    group.setAttribute("role", "button");
    group.setAttribute(
      "aria-label",
      `${territory.name}, ${territory.regionLabel}. Neighbors: ${getNeighborNames(
        territory,
      ).join(", ")}.`,
    );

    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", territory.points);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", territory.label[0]);
    label.setAttribute("y", territory.label[1]);
    label.textContent = territory.name;

    group.append(polygon, label);
    group.addEventListener("mouseenter", () => selectTerritory(territory.id));
    group.addEventListener("focus", () => selectTerritory(territory.id));
    group.addEventListener("click", () => selectTerritory(territory.id));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectTerritory(territory.id);
      }
    });

    fragment.append(group);
  });

  board.append(fragment);
}

function getNeighborNames(territory) {
  return territory.neighbors.map((neighborId) => {
    return territories.find((candidate) => candidate.id === neighborId)?.name;
  });
}

function selectTerritory(territoryId) {
  const territory = territories.find((candidate) => candidate.id === territoryId);
  if (!territory) {
    return;
  }

  const neighborNames = getNeighborNames(territory);
  selectedName.textContent = territory.name;
  selectedSummary.textContent = territory.summary;
  selectedRegion.textContent = territory.regionLabel;
  selectedNeighbors.textContent = neighborNames.join(", ");

  document.querySelectorAll(".territory").forEach((territoryNode) => {
    territoryNode.classList.toggle(
      "is-selected",
      territoryNode.dataset.id === territory.id,
    );
    territoryNode.classList.toggle(
      "is-neighbor",
      territory.neighbors.includes(territoryNode.dataset.id),
    );
  });
}

renderTerritories();
selectTerritory("italia");
