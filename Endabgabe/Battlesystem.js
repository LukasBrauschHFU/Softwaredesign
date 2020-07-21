import { enemyArray, BossEnemy } from "./Enemies.js";
import { myArray } from "./Maps.js";
import { playerposX, playerposY } from "./CharacterMovement.js";
export { battleStart, burning };
//Creates new Array for all currently active enemies
var activeEnemyArray = [];
// Looks for the room the player and enemy are currently in
let enemyRoom = myArray.find(i => i.posX === playerposX && i.posY === playerposY);
// Finds what enemy is currently in the room
let enemyCurrent = enemyArray.find(i => i.id === enemyRoom.roomEnemy);
//Starts the fight
function battleStart() {
    //Searches for enemy currently in the room to check if he is active
    enemyRoom = myArray.find(i => i.posX === playerposX && i.posY === playerposY);
    enemyCurrent = enemyArray.find(i => i.id === enemyRoom.roomEnemy);
    // Check if enemy is a boss
    if (enemyCurrent instanceof BossEnemy) {
        //Plays selected song
        var myAudio = new Audio("Pop.wav");
        myAudio.play();
        //Debug
        console.log("Is a boss");
        //Debug
    }
    if (enemyCurrent.isActive == false) {
        // Makes enemy active
        enemyCurrent.isActive = true;
        //Creates new entry in current Array
        activeEnemyArray.push(enemyCurrent);
    }
    else {
        console.log("already active");
    }
    console.log(activeEnemyArray);
}
//status changes
function burning() {
    // Search for enemy currently in the same room as player
    enemyCurrent.damage = enemyCurrent.damage - 1;
    //activeEnemyArray.push(enemyCurrent);
    //Debug
    console.log(activeEnemyArray);
    //Debug
}
//# sourceMappingURL=battlesystem.js.map