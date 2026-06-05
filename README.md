# Fall of Rome

A browser-based prototype for a Risk-style strategy game about the fall of
Rome. The current version is playable in a web browser with an A.D. 400-style
Roman dioceses map, Germanic armies massed beyond the frontiers, troop
movement, and dice-based attacks.

## Run locally

Use the built-in static server:

```sh
npm start
```

Then visit <http://localhost:8000>.

You can also choose a different port:

```sh
PORT=5173 npm start
```

## Quick play test

1. Click a Roman-controlled territory.
2. Click an adjacent friendly territory to move troops, or an adjacent enemy
   territory to attack.
3. Enter the number of units for the order and confirm it.
4. Use **End Turn** to reset which troops can move this turn.
