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

const startingTroops = {
  britannia: 3,
  gallia: 5,
  germania: 3,
  hispania: 4,
  mauretania: 2,
  italia: 6,
  africa: 4,
  pannonia: 4,
  dacia: 3,
  graecia: 5,
  thracia: 4,
  asia: 5,
  armenia: 3,
  syria: 4,
  aegyptus: 4,
};

const players = {
  roman: {
    name: "Roman",
  },
};

const board = document.querySelector("#territories");
const selectedName = document.querySelector("#territory-name");
const selectedSummary = document.querySelector("#territory-summary");
const selectedRegion = document.querySelector("#territory-region");
const selectedOwner = document.querySelector("#territory-owner");
const selectedTroops = document.querySelector("#territory-troops");
const selectedNeighbors = document.querySelector("#territory-neighbors");
const turnNumber = document.querySelector("#turn-number");
const moveStep = document.querySelector("#move-step");
const moveStatus = document.querySelector("#move-status");
const moveForm = document.querySelector("#move-form");
const moveSourceName = document.querySelector("#move-source-name");
const moveDestinationName = document.querySelector("#move-destination-name");
const moveAmount = document.querySelector("#move-amount");
const moveMax = document.querySelector("#move-max");
const cancelMove = document.querySelector("#cancel-move");
const endTurn = document.querySelector("#end-turn");

const gameState = {
  turn: 1,
  selectedTerritoryId: "italia",
  moveSourceId: null,
  moveDestinationId: null,
  troops: { ...startingTroops },
  movable: { ...startingTroops },
  owners: Object.fromEntries(territories.map((territory) => [territory.id, "roman"])),
};

function renderTerritories() {
  const fragment = document.createDocumentFragment();

  territories.forEach((territory) => {
    const group = createSvgElement("g", {
      class: "territory",
      tabindex: "0",
      role: "button",
    });
    group.dataset.id = territory.id;
    group.dataset.region = territory.region;

    const polygon = createSvgElement("polygon", {
      points: territory.points,
    });

    const label = createSvgElement("text", {
      class: "territory-label",
      x: territory.label[0],
      y: territory.label[1],
    });
    label.textContent = territory.name;

    const badgeY = territory.label[1] + 32;
    const troopBadge = createSvgElement("g", {
      class: "troop-badge",
    });
    const badgeRing = createSvgElement("circle", {
      class: "troop-badge-ring",
      cx: territory.label[0],
      cy: badgeY,
      r: 18,
    });
    const troopCount = createSvgElement("text", {
      class: "troop-count",
      x: territory.label[0],
      y: badgeY + 7,
    });
    const movableCount = createSvgElement("text", {
      class: "movable-count",
      x: territory.label[0],
      y: badgeY + 33,
    });

    troopBadge.append(badgeRing, troopCount, movableCount);
    group.append(polygon, label, troopBadge);
    group.addEventListener("mouseenter", () => previewTerritory(territory.id));
    group.addEventListener("focus", () => previewTerritory(territory.id));
    group.addEventListener("click", () => handleTerritoryClick(territory.id));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleTerritoryClick(territory.id);
      }
    });

    fragment.append(group);
  });

  board.append(fragment);
}

function createSvgElement(name, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

function getTerritory(territoryId) {
  return territories.find((candidate) => candidate.id === territoryId);
}

function getNeighborNames(territory) {
  return territory.neighbors
    .map((neighborId) => getTerritory(neighborId)?.name)
    .filter(Boolean);
}

function previewTerritory(territoryId) {
  if (!getTerritory(territoryId)) {
    return;
  }

  gameState.selectedTerritoryId = territoryId;
  updateInspector();
  updateTerritoryVisuals();
}

function handleTerritoryClick(territoryId) {
  const territory = getTerritory(territoryId);
  if (!territory) {
    return;
  }

  previewTerritory(territoryId);

  if (gameState.moveSourceId && gameState.moveDestinationId) {
    setMoveStatus("Confirm or cancel the current movement order before choosing another territory.");
    return;
  }

  if (!gameState.moveSourceId) {
    selectMoveSource(territoryId);
    return;
  }

  if (territoryId === gameState.moveSourceId) {
    setMoveStatus(`${territory.name} is already the source. Choose an adjacent friendly destination.`);
    return;
  }

  selectMoveDestination(territoryId);
}

function selectMoveSource(territoryId) {
  const territory = getTerritory(territoryId);
  const movableTroops = getMovableTroops(territoryId);

  if (movableTroops <= 0) {
    setMoveStatus(`${territory.name} has no troops left that can move this turn.`);
    clearMoveOrder({ preserveStatus: true });
    updateOperationPanel();
    updateTerritoryVisuals();
    return;
  }

  gameState.moveSourceId = territoryId;
  gameState.moveDestinationId = null;
  setMoveStatus(
    `${territory.name} selected. Choose an adjacent friendly territory to receive up to ${formatTroopUnits(
      movableTroops,
    )}.`,
  );
  updateOperationPanel();
  updateTerritoryVisuals();
}

function selectMoveDestination(territoryId) {
  const source = getTerritory(gameState.moveSourceId);
  const destination = getTerritory(territoryId);

  if (!isAdjacent(source.id, destination.id)) {
    setMoveStatus(
      `${destination.name} is not adjacent to ${source.name}. Choose one of: ${getNeighborNames(
        source,
      ).join(", ")}.`,
    );
    updateTerritoryVisuals();
    return;
  }

  if (!areFriendly(source.id, destination.id)) {
    setMoveStatus(`${destination.name} is not friendly. Attacks will be handled in a later phase.`);
    updateTerritoryVisuals();
    return;
  }

  const maxMovable = getMovableTroops(source.id);
  if (maxMovable <= 0) {
    setMoveStatus(`${source.name} has no troops left that can move this turn.`);
    clearMoveOrder({ preserveStatus: true });
    updateOperationPanel();
    updateTerritoryVisuals();
    return;
  }

  gameState.moveDestinationId = territoryId;
  setMoveStatus(`Movement order ready: ${source.name} to ${destination.name}. Enter how many units to move.`);
  updateOperationPanel();
  updateTerritoryVisuals();
  moveAmount.focus();
  moveAmount.select();
}

function handleMoveSubmit(event) {
  event.preventDefault();

  const sourceId = gameState.moveSourceId;
  const destinationId = gameState.moveDestinationId;
  if (!sourceId || !destinationId) {
    setMoveStatus("Choose a source and destination before moving troops.");
    return;
  }

  const source = getTerritory(sourceId);
  const destination = getTerritory(destinationId);
  const amount = Number.parseInt(moveAmount.value, 10);
  const maxMovable = getMovableTroops(sourceId);

  if (!Number.isInteger(amount) || amount < 1) {
    setMoveStatus("Enter at least 1 troop unit to move.");
    return;
  }

  if (amount > maxMovable) {
    setMoveStatus(`${source.name} only has ${formatTroopUnits(maxMovable)} that can move this turn.`);
    moveAmount.value = String(maxMovable);
    return;
  }

  gameState.troops[sourceId] -= amount;
  gameState.troops[destinationId] += amount;
  gameState.movable[sourceId] -= amount;

  const destinationMovable = getMovableTroops(destinationId);
  const movementSummary = `${formatTroopUnits(amount)} moved from ${source.name} to ${destination.name}. ${destination.name} now has ${formatTroopUnits(
    gameState.troops[destinationId],
  )}, but only ${formatTroopUnits(destinationMovable)} can move again this turn.`;

  clearMoveOrder();
  previewTerritory(destinationId);
  setMoveStatus(movementSummary);
  updateOperationPanel();
  updateTerritoryVisuals();
}

function endCurrentTurn() {
  gameState.turn += 1;
  gameState.movable = { ...gameState.troops };
  clearMoveOrder();
  setMoveStatus(`Turn ${gameState.turn} has begun. All surviving troops may move once this turn.`);
  updateOperationPanel();
  updateInspector();
  updateTerritoryVisuals();
}

function clearMoveOrder(options = {}) {
  gameState.moveSourceId = null;
  gameState.moveDestinationId = null;
  if (!options.preserveStatus) {
    setMoveStatus("Pick a territory with movable troops to start a movement order.");
  }
}

function updateInspector() {
  const territory = getTerritory(gameState.selectedTerritoryId);
  if (!territory) {
    return;
  }

  const neighborNames = getNeighborNames(territory);
  selectedName.textContent = territory.name;
  selectedSummary.textContent = territory.summary;
  selectedRegion.textContent = territory.regionLabel;
  selectedOwner.textContent = getOwnerName(territory.id);
  selectedTroops.textContent = `${formatTroopUnits(gameState.troops[territory.id])} total, ${formatTroopUnits(
    getMovableTroops(territory.id),
  )} movable this turn`;
  selectedNeighbors.textContent = neighborNames.join(", ");
}

function updateOperationPanel() {
  turnNumber.textContent = String(gameState.turn);

  const source = getTerritory(gameState.moveSourceId);
  const destination = getTerritory(gameState.moveDestinationId);
  moveForm.hidden = !(source && destination);

  if (!source) {
    moveStep.textContent = "Select a territory with available troops to begin a friendly move.";
    return;
  }

  if (!destination) {
    moveStep.textContent = `${source.name} is the source. Select an adjacent friendly territory as the destination.`;
    return;
  }

  const maxMovable = getMovableTroops(source.id);
  moveStep.textContent = `${source.name} -> ${destination.name}: choose how many troop units to move.`;
  moveSourceName.textContent = source.name;
  moveDestinationName.textContent = destination.name;
  moveAmount.max = String(maxMovable);
  moveAmount.value = String(Math.min(Number.parseInt(moveAmount.value, 10) || 1, maxMovable));
  moveMax.textContent = `Up to ${formatTroopUnits(maxMovable)} can move from ${source.name} this turn.`;
}

function updateTerritoryVisuals() {
  const selectedTerritory = getTerritory(gameState.selectedTerritoryId);

  document.querySelectorAll(".territory").forEach((territoryNode) => {
    const territoryId = territoryNode.dataset.id;
    const territory = getTerritory(territoryId);
    const isSelected = territoryId === gameState.selectedTerritoryId;
    const isNeighbor = selectedTerritory?.neighbors.includes(territoryId) ?? false;
    const isMoveSource = territoryId === gameState.moveSourceId;
    const isMoveDestination = territoryId === gameState.moveDestinationId;
    const isLegalDestination = gameState.moveSourceId
      ? isLegalMoveDestination(gameState.moveSourceId, territoryId)
      : false;
    const movableTroops = getMovableTroops(territoryId);

    territoryNode.classList.toggle("is-selected", isSelected);
    territoryNode.classList.toggle("is-neighbor", isNeighbor);
    territoryNode.classList.toggle("is-move-source", isMoveSource);
    territoryNode.classList.toggle("is-move-destination", isMoveDestination);
    territoryNode.classList.toggle("is-legal-destination", isLegalDestination);
    territoryNode.classList.toggle("is-exhausted", movableTroops === 0);
    territoryNode.dataset.owner = gameState.owners[territoryId];
    territoryNode.querySelector(".troop-count").textContent = String(gameState.troops[territoryId]);
    territoryNode.querySelector(".movable-count").textContent = `${movableTroops} move`;
    territoryNode.setAttribute(
      "aria-label",
      `${territory.name}, ${territory.regionLabel}, controlled by ${getOwnerName(
        territoryId,
      )}. ${formatTroopUnits(gameState.troops[territoryId])} total, ${formatTroopUnits(
        movableTroops,
      )} movable this turn. Neighbors: ${getNeighborNames(territory).join(", ")}.`,
    );
  });
}

function isAdjacent(sourceId, destinationId) {
  return getTerritory(sourceId)?.neighbors.includes(destinationId) ?? false;
}

function areFriendly(sourceId, destinationId) {
  return gameState.owners[sourceId] === gameState.owners[destinationId];
}

function isLegalMoveDestination(sourceId, destinationId) {
  return (
    sourceId !== destinationId &&
    isAdjacent(sourceId, destinationId) &&
    areFriendly(sourceId, destinationId)
  );
}

function getMovableTroops(territoryId) {
  return gameState.movable[territoryId] ?? 0;
}

function getOwnerName(territoryId) {
  return players[gameState.owners[territoryId]]?.name ?? "Unclaimed";
}

function formatTroopUnits(count) {
  return `${count} troop unit${count === 1 ? "" : "s"}`;
}

function setMoveStatus(message) {
  moveStatus.textContent = message;
}

moveForm.addEventListener("submit", handleMoveSubmit);
cancelMove.addEventListener("click", () => {
  clearMoveOrder();
  updateOperationPanel();
  updateTerritoryVisuals();
});
endTurn.addEventListener("click", endCurrentTurn);

renderTerritories();
previewTerritory("italia");
updateOperationPanel();
updateTerritoryVisuals();
