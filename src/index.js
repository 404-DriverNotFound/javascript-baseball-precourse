import PlayGame from './game/playGame.js';
import GetGameResult from './game/getGameResult.js';
import GetComputerInput from './input/getComputerInput.js';

export default function BaseballGame() {
  const computerInputNumbers = GetComputerInput();
  this.play = function (computerInput, userInput) {
    return GetGameResult(computerInput, userInput);
  };
  PlayGame(computerInputNumbers, this.play);
}

new BaseballGame();
