import {enemyArray, Enemy} from "./Enemies.js";
import {myArray} from "./Maps.js";
import {interactWithEnemy1, interactWithEnemy2, interactWithEnemy3} from "./EnemyInteraction.js";
import {playerposX, playerposY} from "./CharacterMovement.js";
import {choice,} from "./test.js";
export {battleStart, burning, talking};
export var successfullBattleMove: boolean = false;
//Creates new Array for all currently active enemies
export var activeEnemyArray: Enemy[] = [];
//Creates new Array for all currently active enemies
// Looks for the room the player and enemy are currently in
let enemyRoom = myArray.find(i => i.posX === playerposX && i.posY === playerposY);
// Finds what enemy is currently in the room(unsure Type)
export var enemyCurrent: Enemy = enemyArray.find(i => i.id === enemyRoom.roomEnemy);

//Starts the fight


function battleStart(): void {
 //Searches for enemy currently in the room to check if he is active
 enemyRoom = myArray.find(i => i.posX === playerposX && i.posY === playerposY);
 enemyCurrent = enemyArray.find(i => i.id === enemyRoom.roomEnemy);
 var myAudio: HTMLAudioElement = new Audio(enemyCurrent.playedMusic);
 //Plays Enemy music
 //myAudio.play();
 var selection: string =  choice;
 if (selection != "r") {
 if (enemyCurrent.isActive == false) {
 // Makes enemy active
  enemyCurrent.isActive = true; 
 //Creates new entry in current Array
  activeEnemyArray.push(enemyCurrent);
}
 else {
   console.log("already active");
  }
 //Reacts depending on choice
 switch (selection) {
case("r"): {
  console.log("OwO")
successfullBattleMove = true;
break;
}
case("a"): {
  successfullBattleMove = true;
  break;
}
case("i"): {
  successfullBattleMove = true;
  break;
}
default: { 
  document.getElementById("GameText").textContent = "You´ve encountered a " + enemyCurrent.name + " What do you want to do ? " + "Run = r, Attack = a, romance = r, Item = i";
  console.log("You´ve encountered a " + enemyCurrent.name + " What do you want to do ? " + "Run = r, Attack = a, romance = r, Item = i");
  return;
} 

 }
 
 console.log(activeEnemyArray);
 }
 else { 
  console.log("You ran away from " + enemyCurrent.name);
  myAudio.pause();
  successfullBattleMove = true;
}
}


//status changes



function burning(): void {
    // Search for enemy currently in the same room as player
    enemyCurrent.damage = enemyCurrent.damage - 1;
    //activeEnemyArray.push(enemyCurrent);
    //Debug
    console.log(activeEnemyArray);
    //Debug
      }

function talking(): void {
        //Check for enemy behavior
        let reaction: number = enemyCurrent.behavior; 
        
        switch (reaction) {
        case(0): {
        interactWithEnemy1();
        }
        case(1): {
        interactWithEnemy2();
        }
        case(2): {
        interactWithEnemy3();
        }
        
        }
        
         
        }
           