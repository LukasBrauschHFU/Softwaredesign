import { playerposX, playerposY } from "./CharacterMovement.js";
import { mapArray } from "./Maps.js";
export var roomNotThere = true;
export function CreateMap() {
    //Finding fitting Map
    console.log(playerposX, playerposY);
    let foundRoom = mapArray.find(i => i.posX === playerposX && i.posY === playerposY);
    if (foundRoom == undefined) {
        console.log("No room in that direction");
        document.getElementById("GameText").textContent = "There is no room in that direction";
        roomNotThere = true;
    }
    else {
        console.log(foundRoom.description);
        roomNotThere = false;
    }
}
//# sourceMappingURL=CreateWorld.js.map