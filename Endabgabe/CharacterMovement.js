import { CreateMap, roomNotThere } from "./CreateWorld.js";
var playerposX = 1;
var playerposY = 1;
export { playerposX, playerposY, changePosition };
function changePosition() {
    var userInput = "";
    console.log("Please select the direction you want to go ( north(n), east(e), west(w), south(s)");
    // Backups the current position in case there is no room where the player is moving to
    var playerposXBackup = playerposX;
    var playerposYBackup = playerposY;
    //Debug Step
    userInput = "s";
    console.log(userInput);
    //Debug End
    switch (userInput) {
        // Changes Player position based on input
        case "n": {
            playerposY = playerposY + 1;
            break;
        }
        case "e": {
            playerposX = playerposX - 1;
            break;
        }
        case "w": {
            playerposX = playerposX + 1;
            break;
        }
        case "s": {
            playerposY = playerposY - 1;
            break;
        }
        default: {
            console.log("Please select the direction you want to go ( north(n), east(e), west(w), south(s)");
            break;
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
}
//# sourceMappingURL=CharacterMovement.js.map