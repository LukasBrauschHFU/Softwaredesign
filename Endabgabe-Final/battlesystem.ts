import {enemyArray, Enemy} from "./Enemies.js";
import {mapArray} from "./Maps.js";
import{enemyIsFriend} from "./EnemyInteraction.js";
import {interactWithEnemy1, interactWithEnemy2, interactWithEnemy3} from "./EnemyInteraction.js";
import {playerPosX, playerPosY,runToRoom} from "./CharacterMovement.js";
import {choice, level} from "./test.js";
import {itemArrayPlayer} from "./Items.js";
import {player} from "./Player.js";
export {battleStart, burning, talking, fight, usePlayerInventory as useItem, pickupItem, dropItem, look, };
//Creates new Array for all currently active enemies
export var activeEnemyArray: Enemy[] = [];
//Creates new Array for all currently active enemies
// Looks for the room the player and enemy are currently in
export var currentRoom = mapArray.find(i => i.posX === playerPosX && i.posY === playerPosY);
// Finds what enemy is currently in the room(unsure Type)
export var enemyCurrent: Enemy = enemyArray.find(i => i.id === currentRoom.roomEnemy);
var myAudio: HTMLAudioElement = new Audio(enemyCurrent.playedMusic);

var audioIsPlaying: boolean;
var user: string = "";
//Starts the fight


function battleStart(): void {
  if (player.currentHealth <= 0){
     location.reload();
  }
 //Searches for enemy currently in the room to check if he is active
  document.getElementById("GameText").textContent = "In the room you see " + "\n" + "\n" + enemyCurrent.name + "\n" + itemsInRoomName + "\n" + "What do you want to do ?" + "\n" + "attack (a), talk (t), run (r), inventory (i), pickup item (p), drop Item (d)";
  currentRoom = mapArray.find(i => i.posX === playerPosX && i.posY === playerPosY);
  var itemsInRoomName = currentRoom.items.map(a => a.name);
  enemyCurrent = enemyArray.find(i => i.id === currentRoom.roomEnemy);
  if (enemyIsFriend == true) {
currentRoom.hasEnemy = false;
 }
  if (audioIsPlaying != true) {

  //Plays Enemy music
 myAudio.play();
 audioIsPlaying = true; }
 
  var selection: string =  choice;
  if (selection != "r") {
 if (enemyCurrent.isActive == false) {
 // Makes enemy active
  enemyCurrent.isActive = true; 
 //Creates new entry in current Array
  activeEnemyArray.push(enemyCurrent);
}
 else {
  }
 //Reacts depending on choice
 switch (selection) {
  case("l"): {
    look();
    break;
  }
case("a"): {
  fight();
  break;
}
case("i"): {
  usePlayerInventory();
  break;
}

case("p"): {
  pickupItem();
  break;
}

case("d"): {
  dropItem();
  break;
}

case("q"): {
  location.reload();;
  break;
}
default: { 
  if (currentRoom.hasEnemy == false ) {document.getElementById("GameText").textContent = currentRoom.description +  "\n" +  "In the room you see " + "\n" + "\n" + "\n" + itemsInRoomName + "\n" + "What do you want to do ?"; }
  else {document.getElementById("GameText").textContent = currentRoom.description +  "\n" + "In the room you see " + "\n" + "\n" + enemyCurrent.name + "\n" + itemsInRoomName + "\n" + "What do you want to do ?";
}
  

} 

 }
 
 }
 else if (selection == "r") { 
  document.getElementById("GameText").textContent = "You ran back to the previous room";
  runToRoom();
  // hier aus Battle bilschirm raus
  myAudio.pause();

}
}


//fighting option
function fight(): void {
  //check if there is an enemy in the room
  if (currentRoom.hasEnemy == false) {
    document.getElementById("GameText").textContent = "There is no enemy here";
  }
  else {
  //Player attacks enemy
  enemyCurrent.currentHealth = enemyCurrent.currentHealth - player.damage;
  //If the enemy has less hp than max it uses item
  if (enemyCurrent.items.length != 0 && enemyCurrent.currentHealth < enemyCurrent.maximumHealth) { 
      useEnemyInventory();
  }
  else {
  player.currentHealth = player.currentHealth - enemyCurrent.damage;
  if (enemyCurrent.currentHealth >= 0) {
  document.getElementById("GameText").textContent = "You attacked the " + enemyCurrent.name + ". " + "Its health dropped to " + enemyCurrent.currentHealth;
  if (player.currentHealth >= 0) {
      document.getElementById("GameText2").textContent = "The enemy attacked you." + "Your health dropped to " + player.currentHealth;
      // = 0;
        }
      else {
          document.getElementById("GameText2").textContent = "Your health hit zero. You died";
        }
      // = 0;
  }
  else {
    document.getElementById("GameText").textContent = "The " + enemyCurrent.name + " " + "has been defeated";
    myAudio.pause();
    activeEnemyArray.splice(activeEnemyArray.findIndex(i => i.currentHealth === 0), 1);
    //Tells the room that its enemy was defeated
    currentRoom.hasEnemy = false;
  
  }
  }}}

//Item useage

function usePlayerInventory(): void {
  var itemDescription: String[] = itemArrayPlayer.map(a => a.description);
  document.getElementById("GameText").textContent = "In your inventory you see " + "\n"  + itemDescription;
  if (level == 1) {
  //Select Item from Inventory
  var itemselected: string =  choice;
  //system for Item use(add check if item is in player inventory)
  var requestedItem = itemArrayPlayer.find(i => i.name === itemselected);
  if (requestedItem != undefined) {
    user = "player";
    //Selects an effect based on the effect of the item
    switch (requestedItem.effect) {
    case("burning"): {
      if (currentRoom.hasEnemy == true){
        burning();
         itemArrayPlayer.splice(itemArrayPlayer.findIndex(item => item.name === requestedItem.name), 1);
      }
        else {
        document.getElementById("GameText").textContent = "There is no enemy here to use this on";
        }
         break;
    }
    case("healing"): {
     
      healing();
      itemArrayPlayer.splice(itemArrayPlayer.findIndex(item => item.name === requestedItem.name), 1);
      break;
 }
 case("unlock"): {
  unlockDoor(requestedItem.id);
  //Don´t delete key because it should be reusable
  break;
}
    
}
  }
  else {
    document.getElementById("GameText").textContent = "You don´t have " + itemselected + " in your inventory";
    }
  } }   



function useEnemyInventory(): void {
      var enemyConsumedItem = enemyCurrent.items[0];
      //system for Item use)
      switch (enemyConsumedItem.effect) {
        case("burning"): {
          user = "enemy";
          burning();
          break;
        } 
        case("healing"): {
          user = "enemy";
          healing();
          break;
      }}
      enemyCurrent.items.shift();
    }


//pickup item in room
function pickupItem(): void {
  var itemNames: string[] = currentRoom.items.map(a => a.name);
  document.getElementById("GameText").textContent = "Which of these items do you want to pick up: "+ "\n" + itemNames;
  if (level == 1) {
  //Select Item from Room
  var itemselected: string =  choice;
  //system for Item use
  var requestedItem = currentRoom.items.find(i => i.name === itemselected);
  if (requestedItem !== undefined) {
         //remove Item from room and push to player
         currentRoom.items.splice(currentRoom.items.findIndex(item => item.name === requestedItem.name), 1);
         itemArrayPlayer.push(requestedItem);
         document.getElementById("GameText").textContent = "You picked up " + itemNames; 
} else if (itemselected == "none") {
  document.getElementById("GameText").textContent = "You didn´t pickup an item";
  } 
else {
  document.getElementById("GameText").textContent = "There is no Item of this name here";
}
}}

//Drop item into room
function dropItem(): void {
  var itemNames = itemArrayPlayer.map(a => a.name);
  document.getElementById("GameText").textContent = "Which of these items do you want drop: " + itemNames;
  if (level == 1) {
  //Select Item from Room
  var itemselected: string =  choice;
  //system for Item use(add check if item is in player inventory)
  var requestedItem = itemArrayPlayer.find(i => i.name === itemselected);
  if (requestedItem !== undefined) {
         //Delete selected Item from in ventory and push it into map
         itemArrayPlayer.splice(itemArrayPlayer.findIndex(item => item.name === requestedItem.name), 1);
         currentRoom.items.push(requestedItem);
         document.getElementById("GameText").textContent = "You dropped " + itemNames; 
} 
else if (itemselected == "none") {
document.getElementById("GameText").textContent = "You didn´t drop an item";
}
else {
  document.getElementById("GameText").textContent = "You have no Items to drop";
}
}}

//status changes

function burning(): void {
    //if funktion die schaut, ob es auf den Gegner oder spieler angewandt wird hier
    switch (user) {
    case("player"): {
    if (enemyCurrent.hiddenWeakness == "garlic bread") {
      enemyCurrent.currentHealth = 0;
      document.getElementById("GameText").textContent = "The " + enemyCurrent.name + " burned down to a pile of ash that got carried away by a mysterious wind";
      activeEnemyArray.splice(activeEnemyArray.findIndex(i => i.currentHealth === 0), 1);
    //Tells the room that its enemy was defeated
      currentRoom.hasEnemy = false;
    }
    else{
    enemyCurrent.damage = enemyCurrent.damage - 1;
    document.getElementById("GameText").textContent = "The " + enemyCurrent.name + "s damage was reduced by 1";}
    //activeEnemyArray.push(enemyCurrent);
    //Debug
    break;
    //Debug
      }
    case("enemy"): {
      player.damage = player.damage - 1;
      document.getElementById("GameText").textContent = "The " + enemyCurrent.name + "attacked you with a loaf of burned garlic bread. Your damaged was reduced by 1";
      break;
    }
    }}

function healing(): void {
      //if funktion die schaut, ob es auf den Gegner oder spieler angewandt wird hier
      switch (user) {
      case("player"): {
      player.currentHealth = player.maximumHealth;
      document.getElementById("GameText").textContent = "You drank the potion. Your health was restored to " + player.maximumHealth;
      break;
        }
      case("enemy"): {
        enemyCurrent.currentHealth = enemyCurrent.maximumHealth;
        document.getElementById("GameText").textContent = "The " + enemyCurrent.name + " drank a potion. Its health was restored";
        break;
      }
      }}    
     
function unlockDoor(_sendItem: number): void {
        var checkRoom1 = mapArray.find(i => i.posX === currentRoom.posX + 1);
        var checkRoom2 = mapArray.find(i => i.posX === currentRoom.posX - 1);
        var checkRoom3 = mapArray.find(i => i.posX === currentRoom.posY + 1);
        var checkRoom4 = mapArray.find(i => i.posX === currentRoom.posY - 1);
        //find Array Entry with currentRoom Pos x +1 etc, then check for key
        if (checkRoom1 != undefined && checkRoom1.unlockItem == _sendItem) {
          checkRoom1.locked = false;
          
        }
        if (checkRoom2 != undefined && checkRoom2.unlockItem == _sendItem) {
          checkRoom2.locked = false;
         
        }
        if (checkRoom3 != undefined && checkRoom3.unlockItem == _sendItem) {
          checkRoom3.locked = false;
       
        }
        if (checkRoom4 != undefined && checkRoom4.unlockItem == _sendItem) {
          checkRoom4.locked = false;
        
        }
        }

//interaction option
function talking(): void {
        //Check for enemy behavior
        let reaction: number = enemyCurrent.behavior; 
      
        switch (reaction) {
      case(0): {
         document.getElementById("GameText").textContent = "This enemy can not be interacted with";
         break;
      }
      case(1): {
      interactWithEnemy1();
      break;
      }
      case(2): {
      interactWithEnemy2();
      break;
      }
      case(3): {
      interactWithEnemy3();
      break;
        }
        
        }
        
         
        }

     //Looking at enemy
function look() {
       if (currentRoom.hasEnemy == true) {
      document.getElementById("GameText").textContent =  "You look at the enemy: " + enemyCurrent.description;
    }
       else {
        document.getElementById("GameText").textContent =  "There is no enemy to look at"; 
       }
     }   
           