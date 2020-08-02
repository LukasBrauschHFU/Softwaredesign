import {mapArray, Map} from "./Maps.js"; 
import {choice} from "./test.js";
export var playerPosX: number = 1;
export var playerPosY: number = 1;
export {changePosition, runToRoom};
  // Backups the current position in case there is no room where the player is moving to
var playerPosXBackup: number = playerPosX;
var playerposYBackup: number = playerPosY;

var nextMap: Map = mapArray.find(i => i.posX === playerPosX && i.posY === playerPosY);
function changePosition(direction: string): void {
    var userInput: String = choice;
    switch (direction) {
      
    // Changes Player position based on input
        case "n": { 
           //Check if Map needs a key to be accessed
        nextMap = mapArray.find(i => i.posX === playerPosX && i.posY === playerPosY + 1);
        if (nextMap != undefined && nextMap.locked == true) {
         document.getElementById("GameText").textContent = "This door seems to need a key to be opened"; 
        }
        else if (nextMap != undefined) {
        document.getElementById("GameText").textContent = "You went north";
        playerPosY = playerPosY + 1 ;
      }
      else {
        document.getElementById("GameText").textContent = "No map in that direction";
      }
        break; 
     } 
     case "e": { 
      nextMap = mapArray.find(i => i.posX === playerPosX + 1 && i.posY === playerPosY);
      if (nextMap != undefined && nextMap.locked == true) {
       document.getElementById("GameText").textContent = "This door seems to need a key to be opened"; 
      }
      else if (nextMap != undefined) {
        document.getElementById("GameText").textContent = "You went east";
        playerPosX = playerPosX + 1;
      }
      else {
        document.getElementById("GameText").textContent = "No map in that direction";
      }
      break; 
     } 
     case "w": { 
      nextMap = mapArray.find(i => i.posX === playerPosX - 1 && i.posY === playerPosY);
      if (nextMap != undefined && nextMap.locked == true) {
       document.getElementById("GameText").textContent = "This door seems to need a key to be opened"; 
      }
      else if (nextMap != undefined) {
        document.getElementById("GameText").textContent = "You went west";
        playerPosX = playerPosX - 1; 
       }
       else {
        document.getElementById("GameText").textContent = "No map in that direction";
      }
      break; 
     } 
     case "s": { 
      nextMap = mapArray.find(i => i.posX === playerPosX && i.posY === playerPosY - 1);
      if (nextMap != undefined && nextMap.locked == true) {
       document.getElementById("GameText").textContent = "This door seems to need a key to be opened"; 
      }
      else if (nextMap != undefined) {
        document.getElementById("GameText").textContent = "You went south";
        playerPosY = playerPosY - 1 ; 
      }
      else {
        document.getElementById("GameText").textContent = "No map in that direction";
      }
      break; 
     } 
    } 
    }
    
function runToRoom(): void {
  playerPosX = playerPosXBackup;
  playerPosY = playerposYBackup;
}    