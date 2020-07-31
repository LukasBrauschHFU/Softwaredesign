import {enemyArray, Enemy} from "./Enemies.js";
import {mapArray} from "./Maps.js";
import {interactWithEnemy1, interactWithEnemy2, interactWithEnemy3} from "./EnemyInteraction.js";
import {playerposX, playerposY} from "./CharacterMovement.js";
import {choice,level} from "./test.js";
import {itemArray, itemArrayPlayer, Item, item2} from "./Items.js";
import {player} from "./Player.js";
export {battleStart, burning, talking, fight, usePlayerInventory as useItem, pickupItem, dropItem, extraOption};
export var battleIsActive: boolean = false;
//Creates new Array for all currently active enemies
export var activeEnemyArray: Enemy[] = [];
//Creates new Array for all currently active enemies
// Looks for the room the player and enemy are currently in
let enemyRoom = mapArray.find(i => i.posX === playerposX && i.posY === playerposY);
// Finds what enemy is currently in the room(unsure Type)
export var enemyCurrent: Enemy = enemyArray.find(i => i.id === enemyRoom.roomEnemy);
var myAudio: HTMLAudioElement = new Audio(enemyCurrent.playedMusic)
var extraOption: number;
var audioIsPlaying: boolean
var user: string = "";
//Starts the fight


function battleStart(): void {
 //Searches for enemy currently in the room to check if he is active
 document.getElementById("GameText").textContent = "In the room you see " + "\n" + "\n" + enemyCurrent.name + "\n" + itemsInRoomName + "\n" + "What do you want to do ?" + "\n" + "attack (a), talk (t), run (r), inventory (i), pickup item (p), drop Item (d)";
 enemyRoom = mapArray.find(i => i.posX === playerposX && i.posY === playerposY);
 var itemsInRoomName = enemyRoom.items.map(a => a.name)
 //Debug
 console.log(enemyRoom);
 enemyCurrent = enemyArray.find(i => i.id === enemyRoom.roomEnemy);
 if (enemyCurrent == null){
   console.log("No enemy here");
 }
 if(audioIsPlaying != true){
  //Plays Enemy music
 myAudio.play();
 audioIsPlaying = true;}
 
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
case("t"): {
  extraOption = 1;
  battleIsActive = true;
break;
}
case("a"): {
  fight();
  console.log("fight started")
  extraOption = 2;
  battleIsActive = true;
  break;
}
case("i"): {
  usePlayerInventory();
  extraOption = 3;
  battleIsActive = true;
  break;
}

case("p"): {
  pickupItem();
  extraOption = 4;
  battleIsActive = true;
  break;
}

case("d"): {
  dropItem();
  extraOption = 5;
  battleIsActive = true;
  break;
}
default: { 
  
  document.getElementById("GameText").textContent = "In the room you see " + "\n" + "\n" + enemyCurrent.name + "\n" + itemsInRoomName + "\n" + "What do you want to do ?" + "\n" + "attack (a), talk (t), run (r), inventory (i), pickup item (p), drop Item (d)";
  console.log("You´ve encountered a " + enemyCurrent.name + itemsInRoomName);
  extraOption = 0;
  battleIsActive = true;
  return;
} 

 }
 
 console.log(activeEnemyArray);
 }
 else if(selection == "r") { 
  console.log("You ran away from " + enemyCurrent.name);
  // hier aus Battle bilschirm raus
  myAudio.pause();
  extraOption = 6;
  battleIsActive = false;
}
}


//fighting option
function fight(): void {
  //Player attacks enemy
  enemyCurrent.currentHealth = enemyCurrent.currentHealth - player.damage;
  //If the enemy has item: decide on random factor if he uses it or attacks 
  if(enemyCurrent.items.length != 0){
   var randomNumber: number = Math.floor(Math.random() * 3);
   console.log(randomNumber)
    if (randomNumber == 1){
      player.currentHealth = player.currentHealth - enemyCurrent.damage
      //useEnemyInventory();
    }
    if (randomNumber == 2){
      useEnemyInventory();
    }
  }
  else{
  player.currentHealth = player.currentHealth - enemyCurrent.damage;
  if (enemyCurrent.currentHealth >= 0){
  document.getElementById("GameText").textContent = "You attacked the " + enemyCurrent.name + ". " + "Its health dropped to " + enemyCurrent.currentHealth;
    if (player.currentHealth >= 0){
      document.getElementById("GameText2").textContent = "The enemy attacked you." + "Your health dropped to " + player.currentHealth;
      extraOption = 0;
        }
      else{
          document.getElementById("GameText2").textContent = "Your health hit zero. You died";
      //funktion zum laden /resetten hier
        }
      //extraOption = 0;
  }
  else{
    document.getElementById("GameText").textContent = "The " + enemyCurrent.name + " " + "has been defeated";
    activeEnemyArray.splice(activeEnemyArray.findIndex(i => i.currentHealth === 0), 1);
    battleIsActive = false;
    console.log("Deleted enemy array" + activeEnemyArray)
    //delete enemy from Array
    //activeEnemyArray.delete(enemyCurrent);#
    //Now disable enemyisDefeated on map
  }
  if (player.currentHealth >= 0){
  document.getElementById("GameText2").textContent = "The enemy attacked you." + "Your health dropped to " + player.currentHealth;
    }
  else{
      document.getElementById("GameText2").textContent = "Your health hit 0. You died";
  //funktion zum laden /resetten hier
    }
  }}

//Item useage

function usePlayerInventory(): void {
  var itemNames = itemArrayPlayer.map(a => a.name)
  console.log(itemNames);
  document.getElementById("GameText").textContent = "In your inventory you see " + itemNames;
  if (level == 1){
  //Select Item from Inventory
  var itemselected : string =  choice
  //system for Item use(add check if item is in player inventory)
  var requestedItem = itemArrayPlayer.find(i => i.name === itemselected);
  if (requestedItem != undefined){
    user = "player";
  switch(requestedItem.name) {
    case("Torch"): {
         burning();
         break;
         //then remove item from inventory
    }
    case("Ultrapotion"): {
      healing();
      break;
 }
    
}
  }
  else{
    document.getElementById("GameText").textContent = "You don´t have " + itemselected + " in your inventory";
    }
    //extraOption = 0;
  } }   



function useEnemyInventory(): void {
      var enemyConsumedItem = enemyCurrent.items[0]
      //system for Item use(add check if item is in player inventory)
      switch(enemyConsumedItem.name) {
        case("Torch"): {
          console.log("Enemy Uses Burning");
          user = "enemy";
          burning();
          //remove item from array
          break;
        } 
        case("Ultrapotion"): {
          console.log("Enemy Uses Potion");
          user = "enemy";
          healing();
          break;
      }}
      enemyCurrent.items.shift()
      console.log(enemyCurrent.items)
    }


//pickup item in room
function pickupItem(): void {
  console.log(enemyRoom.items)
  var itemNames = enemyRoom.items.map(a => a.name)
  //console.log(itemNames);
  document.getElementById("GameText").textContent = "Which of these items do you want to pick up: " + itemNames;
  if (level == 1){
  //Select Item from Room
  var itemselected : string =  choice
  //system for Item use(add check if item is in player inventory)
  var requestedItem = enemyRoom.items.find(i => i.name === itemselected);
  if (requestedItem !== undefined){
         //remove Item from room and push to player
         enemyRoom.items.splice(enemyRoom.items.findIndex(item => item.name === requestedItem.name), 1)
         console.log(enemyRoom.items)
         itemArrayPlayer.push(requestedItem);
         console.log(itemArrayPlayer);
}else if(itemselected == "none"){
  console.log("You didn´t use an item");
  document.getElementById("GameText").textContent = "You didn´t use an item";
  } 
else {
  document.getElementById("GameText").textContent = "There is no Item of this name here";
}//extraOption = 0;
}}

//Drop item into room
function dropItem(): void {
  console.log(itemArrayPlayer)
  var itemNames = itemArrayPlayer.map(a => a.name)
  //console.log(itemNames);
  document.getElementById("GameText").textContent = "Which of these items do you want drop: " + itemNames;
  //Select Item from Room
  var itemselected : string =  choice
  //system for Item use(add check if item is in player inventory)
  var requestedItem = itemArrayPlayer.find(i => i.name === itemselected);
  if (requestedItem !== undefined){
         //Delete selected Item from in ventory and push it into map
         itemArrayPlayer.splice(itemArrayPlayer.findIndex(item => item.name === requestedItem.name), 1)
         enemyRoom.items.push(requestedItem);
         console.log("Player inventory: " + itemArrayPlayer);
         console.log("Room item:" + enemyRoom.items);
} 
else if(itemselected == "none"){
console.log("You didn´t drop an item");
document.getElementById("GameText").textContent = "You didn´t drop an item";
}
else {
  console.log("No items left in this room");
}extraOption = 0;
}




//status changes



function burning(): void {
    //if funktion die schaut, ob es auf den Gegner oder spieler angewandt wird hier
    switch(user){
    case("player"): {
    if(enemyCurrent.hiddenWeakness == "torch"){
      enemyCurrent.currentHealth = 0;
      document.getElementById("GameText").textContent = "The " + enemyCurrent.name + " burned down to a pile of ash that got carried away by a mysterious wind";
    }
    enemyCurrent.damage = enemyCurrent.damage - 1;
    document.getElementById("GameText").textContent = "The " + enemyCurrent.name + "s damage was reduced by 1";
    //activeEnemyArray.push(enemyCurrent);
    //Debug
    console.log("playerUsedtorch")
    console.log(activeEnemyArray);
    break;
    //Debug
      }
    case("enemy"): {
      player.damage = player.damage - 1;
      console.log(player);
      document.getElementById("GameText").textContent = "The " + enemyCurrent.name + "attacked you with a torch. Your damaged was reduced by 1";
      break;
    }
    }}

    function healing(): void {
      //if funktion die schaut, ob es auf den Gegner oder spieler angewandt wird hier
      switch(user){
      case("player"): {
      player.currentHealth = player.maximumHealth;
      document.getElementById("GameText").textContent = "You drank the potion. Your health was restored";
      //Debug
      console.log(activeEnemyArray);
      //Debug
        }
      case("enemy"): {
        enemyCurrent.currentHealth = enemyCurrent.maximumHealth;
        document.getElementById("GameText").textContent = "The " + enemyCurrent.name + " drank a potion. Its health was restored";
      }
      }}    

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
           