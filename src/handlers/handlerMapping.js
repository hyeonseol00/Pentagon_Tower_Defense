import { gameStart, gameEnd } from "./game.handler.js"
import { addInitialTowerHandler, purchaseTowerHandler  } from "./tower.handler.js";
import { monsterKilledHandler } from "./monster.handler.js"
import { monsterAttackedBaseHandler } from "./base.handler.js"

const handlerMappings = {
  2: gameStart,
  3: gameEnd,
  21: addInitialTowerHandler,
  22: purchaseTowerHandler,
  23: monsterKilledHandler,
  24: monsterAttackedBaseHandler,
};

export default handlerMappings;
