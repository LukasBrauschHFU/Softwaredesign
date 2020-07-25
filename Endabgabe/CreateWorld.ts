import {playerposX, playerposY} from "./CharacterMovement.js";
import {myArray} from "./Maps.js";
export var roomNotThere: boolean = true;


    

export function CreateMap(): void {
    
    //Finding fitting Map
    console.log(playerposX, playerposY);
    let foundRoom = myArray.find(i => i.posX === playerposX && i.posY === playerposY);
    if (foundRoom == undefined) {
        console.log("No room in that direction");
        document.getElementById("GameText").textContent = "No room in that direction";
        roomNotThere = true;
    }
    else {
    console.log(foundRoom.description);
    roomNotThere = false;
 }
}

