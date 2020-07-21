import { enemyArray } from "./Enemies.js";
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
burning;
function battleStart() {
    //Damit neue Einträge im Array erzeugt werden
    if (enemyCurrent.isActive == true)
        enemyRoom = myArray.find(i => i.posX === playerposX && i.posY === playerposY);
    enemyCurrent = enemyArray.find(i => i.id === enemyRoom.roomEnemy);
    enemyCurrent.isActive = true;
    activeEnemyArray.push(enemyCurrent);
    console.log(activeEnemyArray);
}
//status changes
function burning() {
    // Search for enemy currently in the same room as player
    enemyCurrent.damage = enemyCurrent.damage - 1;
    //activeEnemyArray.push(enemyCurrent);
    //Debug
    console.log("henlos");
    console.log(activeEnemyArray);
    //Debug
}
//# sourceMappingURL=battlesystem - Kopie.js.map