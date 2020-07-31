import {CreateMap, roomNotThere} from "./CreateWorld.js";
import {mapArray} from "./Maps.js"; ;
//import {battleStart} from "./Battlesystem.js";
import {choice} from "./test.js";
export var playerposX: number = 1;
export var playerposY: number = 1;
export var successfullChangeCharaMovement: boolean = false;
export {changePosition};

var nextMap = mapArray.find(i => i.posX === playerposX && i.posY === playerposY);
function changePosition(direction: string): void {
    var userInput: String = choice;
    // Backups the current position in case there is no room where the player is moving to
    var playerposXBackup: number = playerposX;
    var playerposYBackup: number = playerposY;
    successfullChangeCharaMovement = false;
    //Debug Step
    //userInput = prompt();
    console.log(userInput);
    //Debug End
    
    switch (direction) {
    // Changes Player position based on input
        case "n": { 
           //Check if Map needs a key to be accessed
        nextMap = mapArray.find(i => i.posX === playerposX && i.posY === playerposY + 1);
        if (nextMap != undefined && nextMap.locked == true) {
         document.getElementById("GameText").textContent = "This door seems to need a key to be opened"; 
        }
        else {
        document.getElementById("GameText").textContent = "You went north";
        playerposY = playerposY + 1 ;
        successfullChangeCharaMovement = true; }
        break; 
     } 
     case "e": { 
      nextMap = mapArray.find(i => i.posX === playerposX - 1 && i.posY === playerposY);
      if (nextMap != undefined && nextMap.locked == true) {
       document.getElementById("GameText").textContent = "This door seems to need a key to be opened"; 
      }
      else {
        document.getElementById("GameText").textContent = "You went east";
        playerposX = playerposX - 1;
        successfullChangeCharaMovement = true; }
      break; 
     } 
     case "w": { 
      nextMap = mapArray.find(i => i.posX === playerposX + 1 && i.posY === playerposY);
      if (nextMap != undefined && nextMap.locked == true) {
       document.getElementById("GameText").textContent = "This door seems to need a key to be opened"; 
      }
      else {
        document.getElementById("GameText").textContent = "You went west";
        playerposX = playerposX + 1; 
        successfullChangeCharaMovement = true; }
      break; 
     } 
     case "s": { 
      nextMap = mapArray.find(i => i.posX === playerposX && i.posY === playerposY - 1);
      if (nextMap != undefined && nextMap.locked == true) {
       document.getElementById("GameText").textContent = "This door seems to need a key to be opened"; 
      }
      else {
        document.getElementById("GameText").textContent = "You went south";
        playerposY = playerposY - 1 ; 
        successfullChangeCharaMovement = true; }
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
        console.log("Position reset to " +  playerposX + " " + playerposY );
    }
    else {
        playerposX = playerposX;
        playerposY = playerposY;
        console.log("New position: " +  playerposX + " " + playerposY );
    }
    

    return;
    }
    