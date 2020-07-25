import { CreateMap, roomNotThere } from "./CreateWorld.js";
//import {battleStart} from "./Battlesystem.js";
import { choice } from "./test.js";
var playerposX = 1;
var playerposY = 1;
export { playerposX, playerposY, changePosition };
export var successfullChangeCharaMovement = false;
//function change(): void {
//choice = "n";
// if (selectedOption == 1) {
//console.log("Please select the direction you want to go ( north(n), east(e), west(w), south(s)");
//isactive = true;
//btn.addEventListener("click", () => changePosition());
// }}
//let meaningOfLife: boolean = false;
//async function waitForMeaningOfLife() {
//  while (true) {
//     if (meaningOfLife) { console.log(42); return; }
//      await null; // prevents app from hanging
//  }
//}
//waitForMeaningOfLife();
//setTimeout(() => meaningOfLife = true, 420);
function changePosition() {
    var userInput = choice;
    // Backups the current position in case there is no room where the player is moving to
    var playerposXBackup = playerposX;
    var playerposYBackup = playerposY;
    successfullChangeCharaMovement = false;
    //Debug Step
    //userInput = prompt();
    console.log(userInput);
    //Debug End
    switch (userInput) {
        // Changes Player position based on input
        case "n": {
            document.getElementById("GameText").textContent = "You went north";
            playerposY = playerposY + 1;
            successfullChangeCharaMovement = true;
            break;
        }
        case "e": {
            document.getElementById("GameText").textContent = "You went east";
            playerposX = playerposX - 1;
            successfullChangeCharaMovement = true;
            break;
        }
        case "w": {
            document.getElementById("GameText").textContent = "You went west";
            playerposX = playerposX + 1;
            successfullChangeCharaMovement = true;
            break;
        }
        case "s": {
            document.getElementById("GameText").textContent = "You went south";
            playerposY = playerposY - 1;
            successfullChangeCharaMovement = true;
            break;
        }
        default: {
            document.getElementById("GameText").textContent = "Please select the direction you want to go ( north(n), east(e), west(w), south(s)";
            console.log("Please select the direction you want to go ( north(n), east(e), west(w), south(s))");
            return;
        }
    }
    CreateMap();
    //Reset Position if there is no room
    if (roomNotThere == true) {
        playerposX = playerposXBackup;
        playerposY = playerposYBackup;
        console.log("Position reset to " + playerposX + " " + playerposY);
    }
    else {
        playerposX = playerposX;
        playerposY = playerposY;
        console.log("New position: " + playerposX + " " + playerposY);
    }
    return;
    //battleStart();
}
//# sourceMappingURL=CharacterMovement.js.map