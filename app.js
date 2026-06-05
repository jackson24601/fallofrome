const territories = [
  {
    id: "britanniae",
    name: "Britanniae",
    region: "west",
    regionLabel: "Western Roman Diocese",
    label: [198, 166],
    points: "120,146 165,91 247,103 282,153 254,215 170,224 116,190",
    summary:
      "The British diocese sits across the Channel from the Saxon coast and northern Gaul.",
    neighbors: ["saxons", "galliae"],
  },
  {
    id: "galliae",
    name: "Galliae",
    region: "west",
    regionLabel: "Western Roman Diocese",
    label: [306, 308],
    points: "178,228 314,198 421,277 426,352 365,413 249,396 181,326",
    summary:
      "Northern Gaul guards the Channel coast and the lower Rhine frontier.",
    neighbors: ["britanniae", "saxons", "franks", "alemanni", "septem", "hispaniae", "italia_annonaria"],
  },
  {
    id: "septem",
    name: "Septem Provinciae",
    labelName: "Septem Prov.",
    region: "west",
    regionLabel: "Western Roman Diocese",
    label: [309, 458],
    points: "249,396 365,413 438,454 374,512 256,493 205,433",
    summary:
      "Southern Gaul links Hispania, northern Italy, and the western Mediterranean coast.",
    neighbors: ["galliae", "hispaniae", "italia_annonaria", "alemanni"],
  },
  {
    id: "hispaniae",
    name: "Hispaniae",
    region: "west",
    regionLabel: "Western Roman Diocese",
    label: [190, 518],
    points: "76,377 249,396 256,493 374,512 341,616 184,637 54,560 38,450",
    summary:
      "The Iberian diocese is a large western base with Atlantic and Mediterranean access.",
    neighbors: ["galliae", "septem", "africa"],
  },
  {
    id: "italia_annonaria",
    name: "Italia Annonaria",
    labelName: "Italia Ann.",
    region: "west",
    regionLabel: "Western Roman Diocese",
    label: [524, 422],
    points: "423,354 558,346 631,424 583,489 460,469 410,421",
    summary:
      "Northern Italy is the gateway from the Alpine frontier into the imperial heartland.",
    neighbors: ["galliae", "septem", "alemanni", "italia_suburbicaria", "illyricum"],
  },
  {
    id: "italia_suburbicaria",
    name: "Italia Suburbicaria",
    labelName: "Italia Sub.",
    region: "west",
    regionLabel: "Western Roman Diocese",
    label: [543, 552],
    points: "460,469 583,489 654,575 591,635 500,591 448,519",
    summary:
      "Rome and the central Mediterranean remain the symbolic center of the western empire.",
    neighbors: ["italia_annonaria", "africa", "illyricum", "macedonia"],
  },
  {
    id: "africa",
    name: "Africa",
    region: "west",
    regionLabel: "Western Roman Diocese",
    label: [566, 657],
    points: "308,593 496,575 650,620 820,616 892,656 790,712 545,706 356,676",
    summary:
      "The African grain provinces are critical to Roman supply across the Mediterranean.",
    neighbors: ["hispaniae", "italia_suburbicaria", "macedonia", "aegyptus"],
  },
  {
    id: "illyricum",
    name: "Illyricum",
    region: "east",
    regionLabel: "Eastern Roman Diocese",
    label: [662, 458],
    points: "594,354 736,372 781,462 722,545 620,506 582,432",
    summary:
      "Illyricum holds the western Balkans and the upper Danube approaches.",
    neighbors: ["italia_annonaria", "italia_suburbicaria", "alemanni", "vandals", "goths", "dacia", "macedonia"],
  },
  {
    id: "dacia",
    name: "Dacia",
    region: "east",
    regionLabel: "Eastern Roman Diocese",
    label: [816, 456],
    points: "736,372 858,398 897,480 807,523 781,462",
    summary:
      "The Dacian diocese forms a heavily pressured Balkan frontier south of the Danube.",
    neighbors: ["illyricum", "goths", "thracia", "macedonia"],
  },
  {
    id: "macedonia",
    name: "Macedonia",
    region: "east",
    regionLabel: "Eastern Roman Diocese",
    label: [793, 586],
    points: "722,545 807,523 900,548 878,616 762,639 690,586",
    summary:
      "Macedonia controls Greece and the Aegean crossings toward Asia.",
    neighbors: ["italia_suburbicaria", "africa", "illyricum", "dacia", "thracia", "asiana", "aegyptus"],
  },
  {
    id: "thracia",
    name: "Thracia",
    region: "east",
    regionLabel: "Eastern Roman Diocese",
    label: [924, 457],
    points: "858,398 952,415 996,489 932,545 897,480",
    summary:
      "Thrace protects Constantinople and the straits between Europe and Asia.",
    neighbors: ["dacia", "goths", "macedonia", "pontica", "asiana"],
  },
  {
    id: "pontica",
    name: "Pontica",
    region: "east",
    regionLabel: "Eastern Roman Diocese",
    label: [1066, 423],
    points: "952,355 1121,339 1180,421 1110,506 996,489 952,415",
    summary:
      "Pontica spans the Black Sea and eastern Anatolian approaches.",
    neighbors: ["thracia", "asiana", "oriens"],
  },
  {
    id: "asiana",
    name: "Asiana",
    region: "east",
    regionLabel: "Eastern Roman Diocese",
    label: [940, 558],
    points: "897,480 996,489 1005,571 914,611 878,616 900,548",
    summary:
      "The Asiana diocese covers western Asia Minor and the Aegean coast.",
    neighbors: ["thracia", "pontica", "macedonia", "oriens", "aegyptus"],
  },
  {
    id: "oriens",
    name: "Oriens",
    region: "east",
    regionLabel: "Eastern Roman Diocese",
    label: [1080, 628],
    points: "1005,571 1142,546 1171,650 1086,711 1000,661",
    summary:
      "Oriens anchors Syria and the eastern marches of the empire.",
    neighbors: ["pontica", "asiana", "aegyptus"],
  },
  {
    id: "aegyptus",
    name: "Aegyptus",
    region: "east",
    regionLabel: "Eastern Roman Diocese",
    label: [907, 666],
    points: "820,616 1005,571 1000,661 970,721 850,706 790,656",
    summary:
      "Egypt and the Nile remain a high-value supply center for the eastern Mediterranean.",
    neighbors: ["africa", "macedonia", "asiana", "oriens"],
  },
  {
    id: "saxons",
    name: "Saxons",
    region: "frontier",
    regionLabel: "Germanic Tribal Army",
    label: [371, 153],
    points: "278,72 423,72 515,146 456,213 328,190 284,139",
    summary:
      "Saxon warbands mass beyond the North Sea and Channel frontiers.",
    neighbors: ["britanniae", "galliae", "franks"],
  },
  {
    id: "franks",
    name: "Franks",
    region: "frontier",
    regionLabel: "Germanic Tribal Army",
    label: [407, 256],
    points: "328,190 456,213 503,276 428,344 332,308 300,244",
    summary:
      "Frankish armies gather along the lower Rhine opposite northern Gaul.",
    neighbors: ["saxons", "galliae", "alemanni", "vandals"],
  },
  {
    id: "alemanni",
    name: "Alemanni",
    region: "frontier",
    regionLabel: "Germanic Tribal Army",
    label: [507, 332],
    points: "428,344 503,276 598,311 588,386 506,416 455,381",
    summary:
      "Alemannic forces threaten the upper Rhine and Alpine passes into Italy.",
    neighbors: ["franks", "galliae", "septem", "italia_annonaria", "vandals", "illyricum"],
  },
  {
    id: "vandals",
    name: "Vandals",
    region: "frontier",
    regionLabel: "Germanic Tribal Army",
    label: [616, 242],
    points: "510,154 687,184 708,286 598,311 503,276 456,213",
    summary:
      "Vandal groups mass north of the Danube, poised to cross into the Roman Balkans.",
    neighbors: ["franks", "alemanni", "goths", "illyricum"],
  },
  {
    id: "goths",
    name: "Goths",
    region: "frontier",
    regionLabel: "Germanic Tribal Army",
    label: [770, 314],
    points: "687,184 844,222 909,319 858,398 736,372 708,286",
    summary:
      "Gothic armies concentrate beyond the Danube near Dacia and Thrace.",
    neighbors: ["vandals", "illyricum", "dacia", "thracia"],
  },
];

const startingTroops = {
  britanniae: 5,
  galliae: 7,
  septem: 5,
  hispaniae: 6,
  italia_annonaria: 7,
  italia_suburbicaria: 8,
  africa: 6,
  illyricum: 7,
  dacia: 6,
  macedonia: 6,
  thracia: 7,
  pontica: 6,
  asiana: 6,
  oriens: 7,
  aegyptus: 6,
  saxons: 20,
  franks: 21,
  alemanni: 20,
  vandals: 22,
  goths: 24,
};

const startingOwners = {
  britanniae: "roman",
  galliae: "roman",
  septem: "roman",
  hispaniae: "roman",
  italia_annonaria: "roman",
  italia_suburbicaria: "roman",
  africa: "roman",
  illyricum: "roman",
  dacia: "roman",
  macedonia: "roman",
  thracia: "roman",
  pontica: "roman",
  asiana: "roman",
  oriens: "roman",
  aegyptus: "roman",
  saxons: "saxon",
  franks: "frankish",
  alemanni: "alemannic",
  vandals: "vandal",
  goths: "gothic",
};

const players = {
  roman: {
    name: "Roman",
  },
  saxon: {
    name: "Saxon Confederation",
  },
  frankish: {
    name: "Frankish Confederation",
  },
  alemannic: {
    name: "Alemannic Confederation",
  },
  gothic: {
    name: "Gothic Confederation",
  },
  vandal: {
    name: "Vandal Confederation",
  },
};

const currentPlayerId = "roman";
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
const attackForm = document.querySelector("#attack-form");
const attackSourceName = document.querySelector("#attack-source-name");
const attackDestinationName = document.querySelector("#attack-destination-name");
const attackAmount = document.querySelector("#attack-amount");
const attackMax = document.querySelector("#attack-max");
const cancelAttack = document.querySelector("#cancel-attack");
const battleLog = document.querySelector("#battle-log");
const battleSummary = document.querySelector("#battle-summary");
const battleRolls = document.querySelector("#battle-rolls");
const endTurn = document.querySelector("#end-turn");

const gameState = {
  turn: 1,
  selectedTerritoryId: "italia_suburbicaria",
  operationSourceId: null,
  moveDestinationId: null,
  attackDestinationId: null,
  troops: { ...startingTroops },
  movable: { ...startingTroops },
  owners: { ...startingOwners },
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
    label.textContent = territory.labelName ?? territory.name;

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

  if (hasPendingOrder()) {
    setMoveStatus("Confirm or cancel the current order before choosing another territory.");
    return;
  }

  if (!gameState.operationSourceId) {
    selectOperationSource(territoryId);
    return;
  }

  if (territoryId === gameState.operationSourceId) {
    setMoveStatus(`${territory.name} is already the source. Choose an adjacent friendly move or enemy attack target.`);
    return;
  }

  selectOperationDestination(territoryId);
}

function selectOperationSource(territoryId) {
  const territory = getTerritory(territoryId);

  if (!isCurrentPlayerTerritory(territoryId)) {
    setMoveStatus(`${territory.name} is controlled by ${getOwnerName(territoryId)}. Select a Roman territory to act from.`);
    clearOperationOrder({ preserveStatus: true });
    updateOperationPanel();
    updateTerritoryVisuals();
    return;
  }

  if (gameState.troops[territoryId] <= 0) {
    setMoveStatus(`${territory.name} has no troops available for orders.`);
    clearOperationOrder({ preserveStatus: true });
    updateOperationPanel();
    updateTerritoryVisuals();
    return;
  }

  gameState.operationSourceId = territoryId;
  const movableTroops = getMovableTroops(territoryId);
  const movementText = movableTroops > 0
    ? `${formatTroopUnits(movableTroops)} can still move`
    : "no troops can move again this turn";
  setMoveStatus(
    `${territory.name} selected. Choose an adjacent friendly territory to move (${movementText}) or an enemy territory to attack.`,
  );
  hideBattleLog();
  updateOperationPanel();
  updateTerritoryVisuals();
}

function selectOperationDestination(territoryId) {
  const source = getTerritory(gameState.operationSourceId);
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

  if (areFriendly(source.id, destination.id)) {
    selectMoveDestination(territoryId);
    return;
  }

  selectAttackDestination(territoryId);
}

function selectMoveDestination(territoryId) {
  const source = getTerritory(gameState.operationSourceId);
  const destination = getTerritory(territoryId);
  const maxMovable = getMovableTroops(source.id);

  if (maxMovable <= 0) {
    setMoveStatus(`${source.name} has no troops left that can move this turn, but it can still attack adjacent enemies.`);
    updateTerritoryVisuals();
    return;
  }

  gameState.moveDestinationId = territoryId;
  gameState.attackDestinationId = null;
  setMoveStatus(`Movement order ready: ${source.name} to ${destination.name}. Enter how many units to move.`);
  hideBattleLog();
  updateOperationPanel();
  updateTerritoryVisuals();
  moveAmount.focus();
  moveAmount.select();
}

function selectAttackDestination(territoryId) {
  const source = getTerritory(gameState.operationSourceId);
  const destination = getTerritory(territoryId);
  const defenderTroops = gameState.troops[destination.id];

  if (defenderTroops <= 0) {
    setMoveStatus(`${destination.name} has no defending troops. Choose another enemy target.`);
    updateTerritoryVisuals();
    return;
  }

  gameState.attackDestinationId = territoryId;
  gameState.moveDestinationId = null;
  setMoveStatus(
    `Attack order ready: ${source.name} attacks ${destination.name}. Choose how many units will roll as attackers.`,
  );
  hideBattleLog();
  updateOperationPanel();
  updateTerritoryVisuals();
  attackAmount.focus();
  attackAmount.select();
}

function handleMoveSubmit(event) {
  event.preventDefault();

  const sourceId = gameState.operationSourceId;
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

  clearOperationOrder();
  previewTerritory(destinationId);
  setMoveStatus(movementSummary);
  updateOperationPanel();
  updateTerritoryVisuals();
}

function handleAttackSubmit(event) {
  event.preventDefault();

  const sourceId = gameState.operationSourceId;
  const destinationId = gameState.attackDestinationId;
  if (!sourceId || !destinationId) {
    setMoveStatus("Choose an attacking territory and adjacent enemy target before rolling battle dice.");
    return;
  }

  const source = getTerritory(sourceId);
  const destination = getTerritory(destinationId);
  const attackingUnits = Number.parseInt(attackAmount.value, 10);
  const maxAttackers = gameState.troops[sourceId];

  if (!Number.isInteger(attackingUnits) || attackingUnits < 1) {
    setMoveStatus("Enter at least 1 troop unit to attack with.");
    return;
  }

  if (attackingUnits > maxAttackers) {
    setMoveStatus(`${source.name} only has ${formatTroopUnits(maxAttackers)} available to attack.`);
    attackAmount.value = String(maxAttackers);
    return;
  }

  if (gameState.troops[destinationId] <= 0 || areFriendly(sourceId, destinationId)) {
    setMoveStatus(`${destination.name} is no longer a valid enemy target.`);
    clearOperationOrder({ preserveStatus: true });
    updateOperationPanel();
    updateTerritoryVisuals();
    return;
  }

  const result = resolveBattle(attackingUnits, gameState.troops[destinationId]);
  applyBattleResult(sourceId, destinationId, attackingUnits, result);
  showBattleResult(source, destination, attackingUnits, result);

  const captured = gameState.owners[destinationId] === currentPlayerId;
  clearOperationOrder({ preserveStatus: true });
  previewTerritory(captured ? destinationId : sourceId);
  updateOperationPanel();
  updateTerritoryVisuals();
}

function resolveBattle(attackerDiceCount, defenderDiceCount) {
  const attackerRolls = rollDice(attackerDiceCount);
  const defenderRolls = rollDice(defenderDiceCount);
  let attackerLosses = 0;
  let defenderLosses = 0;
  const comparisons = [];

  for (let index = 0; index < Math.min(attackerRolls.length, defenderRolls.length); index += 1) {
    const attackerRoll = attackerRolls[index];
    const defenderRoll = defenderRolls[index];
    const defenderLoses = attackerRoll > defenderRoll;
    if (defenderLoses) {
      defenderLosses += 1;
    } else {
      attackerLosses += 1;
    }
    comparisons.push({ attackerRoll, defenderRoll, defenderLoses });
  }

  return {
    attackerRolls,
    defenderRolls,
    comparisons,
    attackerLosses,
    defenderLosses,
  };
}

function rollDice(count) {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 6) + 1).sort((a, b) => b - a);
}

function applyBattleResult(sourceId, destinationId, attackingUnits, result) {
  const attackingSurvivors = attackingUnits - result.attackerLosses;

  gameState.troops[sourceId] -= result.attackerLosses;
  gameState.troops[destinationId] -= result.defenderLosses;
  clampMovableTroops(sourceId);
  clampMovableTroops(destinationId);

  if (gameState.troops[destinationId] > 0) {
    return;
  }

  gameState.owners[destinationId] = currentPlayerId;
  gameState.troops[sourceId] -= attackingSurvivors;
  gameState.troops[destinationId] = attackingSurvivors;
  gameState.movable[destinationId] = 0;
  clampMovableTroops(sourceId);
}

function showBattleResult(source, destination, attackingUnits, result) {
  const captured = gameState.owners[destination.id] === currentPlayerId;
  const defenderName = getOwnerName(destination.id);
  const attackerCasualties = formatTroopUnits(result.attackerLosses);
  const defenderCasualties = formatTroopUnits(result.defenderLosses);
  const captureText = captured
    ? `${destination.name} has fallen and is now Roman-controlled.`
    : `${destination.name} remains held by ${defenderName} with ${formatTroopUnits(gameState.troops[destination.id])}.`;

  battleLog.hidden = false;
  battleSummary.textContent = `${source.name} attacked ${destination.name} with ${formatTroopUnits(
    attackingUnits,
  )}. The attacker lost ${attackerCasualties}; the defender lost ${defenderCasualties}. ${captureText}`;
  battleRolls.innerHTML = "";
  battleRolls.append(
    createRollGroup("Attacker", result.attackerRolls),
    createRollGroup("Defender", result.defenderRolls),
    createComparisonList(result.comparisons),
  );
  setMoveStatus(captureText);
}

function createRollGroup(label, rolls) {
  const group = document.createElement("div");
  group.className = "roll-group";
  const title = document.createElement("strong");
  title.textContent = label;
  const dice = document.createElement("span");
  dice.textContent = rolls.join(", ");
  group.append(title, dice);
  return group;
}

function createComparisonList(comparisons) {
  const list = document.createElement("ol");
  list.className = "comparison-list";
  comparisons.forEach((comparison) => {
    const item = document.createElement("li");
    item.textContent = comparison.defenderLoses
      ? `${comparison.attackerRoll} beats ${comparison.defenderRoll}: defender loses 1`
      : `${comparison.defenderRoll} holds against ${comparison.attackerRoll}: attacker loses 1`;
    list.append(item);
  });
  return list;
}

function endCurrentTurn() {
  gameState.turn += 1;
  gameState.movable = { ...gameState.troops };
  clearOperationOrder();
  hideBattleLog();
  setMoveStatus(`Turn ${gameState.turn} has begun. All surviving troops may move once this turn.`);
  updateOperationPanel();
  updateInspector();
  updateTerritoryVisuals();
}

function clearOperationOrder(options = {}) {
  gameState.operationSourceId = null;
  gameState.moveDestinationId = null;
  gameState.attackDestinationId = null;
  if (!options.preserveStatus) {
    setMoveStatus("Pick an owned territory to start a movement or attack order.");
  }
}

function hideBattleLog() {
  battleLog.hidden = true;
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

  const source = getTerritory(gameState.operationSourceId);
  const moveDestination = getTerritory(gameState.moveDestinationId);
  const attackDestination = getTerritory(gameState.attackDestinationId);
  moveForm.hidden = !(source && moveDestination);
  attackForm.hidden = !(source && attackDestination);

  if (!source) {
    moveStep.textContent = "Select an owned territory to begin a friendly move or enemy attack.";
    return;
  }

  if (moveDestination) {
    const maxMovable = getMovableTroops(source.id);
    moveStep.textContent = `${source.name} -> ${moveDestination.name}: choose how many troop units to move.`;
    moveSourceName.textContent = source.name;
    moveDestinationName.textContent = moveDestination.name;
    moveAmount.max = String(maxMovable);
    moveAmount.value = String(Math.min(Number.parseInt(moveAmount.value, 10) || 1, maxMovable));
    moveMax.textContent = `Up to ${formatTroopUnits(maxMovable)} can move from ${source.name} this turn.`;
    return;
  }

  if (attackDestination) {
    const maxAttackers = gameState.troops[source.id];
    moveStep.textContent = `${source.name} attacks ${attackDestination.name}: choose how many troop units roll attack dice.`;
    attackSourceName.textContent = source.name;
    attackDestinationName.textContent = attackDestination.name;
    attackAmount.max = String(maxAttackers);
    attackAmount.value = String(Math.min(Number.parseInt(attackAmount.value, 10) || 1, maxAttackers));
    attackMax.textContent = `Up to ${formatTroopUnits(maxAttackers)} can attack from ${source.name}. ${attackDestination.name} will defend with ${formatTroopUnits(
      gameState.troops[attackDestination.id],
    )}.`;
    return;
  }

  moveStep.textContent = `${source.name} is the source. Select an adjacent friendly territory to move or an adjacent enemy territory to attack.`;
}

function updateTerritoryVisuals() {
  const selectedTerritory = getTerritory(gameState.selectedTerritoryId);

  document.querySelectorAll(".territory").forEach((territoryNode) => {
    const territoryId = territoryNode.dataset.id;
    const territory = getTerritory(territoryId);
    const isSelected = territoryId === gameState.selectedTerritoryId;
    const isNeighbor = selectedTerritory?.neighbors.includes(territoryId) ?? false;
    const isOperationSource = territoryId === gameState.operationSourceId;
    const isMoveDestination = territoryId === gameState.moveDestinationId;
    const isAttackDestination = territoryId === gameState.attackDestinationId;
    const isLegalMoveDestination = gameState.operationSourceId
      ? canMoveTo(gameState.operationSourceId, territoryId)
      : false;
    const isLegalAttackDestination = gameState.operationSourceId
      ? canAttack(gameState.operationSourceId, territoryId)
      : false;
    const movableTroops = getMovableTroops(territoryId);

    territoryNode.classList.toggle("is-selected", isSelected);
    territoryNode.classList.toggle("is-neighbor", isNeighbor);
    territoryNode.classList.toggle("is-move-source", isOperationSource);
    territoryNode.classList.toggle("is-move-destination", isMoveDestination);
    territoryNode.classList.toggle("is-attack-destination", isAttackDestination);
    territoryNode.classList.toggle("is-legal-destination", isLegalMoveDestination);
    territoryNode.classList.toggle("is-legal-attack", isLegalAttackDestination);
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

function hasPendingOrder() {
  return Boolean(
    gameState.operationSourceId &&
      (gameState.moveDestinationId || gameState.attackDestinationId),
  );
}

function isAdjacent(sourceId, destinationId) {
  return getTerritory(sourceId)?.neighbors.includes(destinationId) ?? false;
}

function areFriendly(sourceId, destinationId) {
  return gameState.owners[sourceId] === gameState.owners[destinationId];
}

function canMoveTo(sourceId, destinationId) {
  return (
    sourceId !== destinationId &&
    isAdjacent(sourceId, destinationId) &&
    areFriendly(sourceId, destinationId) &&
    getMovableTroops(sourceId) > 0
  );
}

function canAttack(sourceId, destinationId) {
  return (
    sourceId !== destinationId &&
    isAdjacent(sourceId, destinationId) &&
    !areFriendly(sourceId, destinationId) &&
    isCurrentPlayerTerritory(sourceId) &&
    gameState.troops[sourceId] > 0 &&
    gameState.troops[destinationId] > 0
  );
}

function isCurrentPlayerTerritory(territoryId) {
  return gameState.owners[territoryId] === currentPlayerId;
}

function getMovableTroops(territoryId) {
  return gameState.movable[territoryId] ?? 0;
}

function clampMovableTroops(territoryId) {
  gameState.movable[territoryId] = Math.min(getMovableTroops(territoryId), gameState.troops[territoryId]);
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
  clearOperationOrder();
  updateOperationPanel();
  updateTerritoryVisuals();
});
attackForm.addEventListener("submit", handleAttackSubmit);
cancelAttack.addEventListener("click", () => {
  clearOperationOrder();
  updateOperationPanel();
  updateTerritoryVisuals();
});
endTurn.addEventListener("click", endCurrentTurn);

renderTerritories();
previewTerritory("italia_suburbicaria");
updateOperationPanel();
updateTerritoryVisuals();
