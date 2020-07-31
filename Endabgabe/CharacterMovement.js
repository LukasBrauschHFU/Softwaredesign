import { CreateMap, roomNotThere } from "./CreateWorld.js";
//import {battleStart} from "./Battlesystem.js";
import { choice } from "./test.js";
export var playerposX = 1;
export var playerposY = 1;
export var successfullChangeCharaMovement = false;
export { changePosition };
function changePosition(direction) {
    var userInput = choice;
    // Backups the current position in case there is no room where the player is moving to
    var playerposXBackup = playerposX;
    var playerposYBackup = playerposY;
    successfullChangeCharaMovement = false;
    //Debug Step
    //userInput = prompt();
    console.log(userInput);
    //Debug End
    switch (direction) {
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
}
//# sourceMappingURL=CharacterMovement.js.map