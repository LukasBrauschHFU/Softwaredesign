import { item1 } from "./Items.js";
export var enemyArray = [];
export class Enemy {
    constructor() {
        this.name = "";
        this.maximumHealth = 0;
        this.currentHealth = 0;
        this.damage = 0;
        this.hiddenWeakness = "";
        this.description = "";
        //inventory of enemy
        this.items = [];
        //ID of enemy
        this.id = 0;
        // How the enemy acts and if he is an inteligent NPC
        this.behavior = 0;
        //t check if the enemy was activated
        this.isActive = false;
        //Add Path to the song you want to play while fighting this enemy
        this.playedMusic = "https://sftp.hs-furtwangen.de/~brauschl/music/gameMusic/enemy/gsl.mp3";
    }
}
//enemy1
let enemy1 = new Enemy;
enemy1.maximumHealth = 4;
enemy1.currentHealth = 4;
enemy1.damage = 1;
enemy1.name = "Slime";
enemy1.id = 0;
enemy1.behavior = 0;
enemy1.description = "A week looking Slime";
//enemy2
let enemy2 = new Enemy;
enemy2.maximumHealth = 7;
enemy2.currentHealth = 7;
enemy2.damage = 2;
enemy2.name = "Dark Knight";
enemy2.id = 1;
enemy2.behavior = 1;
enemy2.items = [item1];
enemy2.description = "A dark looking knight";
//enemy2.playedMusic = "https://webuser.hs-furtwangen.de/~brauschl/music/gameMusic/Ed/ve.mp3";
//enemy3
let enemy3 = new Enemy;
enemy3.currentHealth = 1;
enemy3.damage = 1;
enemy3.name = "Filler";
enemy3.id = 2;
enemy3.items = [item1];
enemy3.hiddenWeakness = "";
enemy3.description = "Filler";
//enemy3
let enemy4 = new Enemy;
enemy4.currentHealth = 30;
enemy4.maximumHealth = 30;
enemy4.damage = 2;
enemy4.name = "Wooden Golem";
enemy4.id = 3;
enemy4.items = [];
enemy4.hiddenWeakness = "garlic bread";
enemy4.behavior = 2;
enemy4.description = "His body looks kinda dry";
enemy4.playedMusic = "https://sftp.hs-furtwangen.de/~brauschl/music/gameMusic/enemy/flyme.mp3";
// Bossenemy
let enemyBoss = new Enemy;
enemyBoss.currentHealth = 20;
enemyBoss.maximumHealth = 20;
enemyBoss.damage = 3;
enemyBoss.name = "Momonga";
enemyBoss.id = 4;
enemyBoss.behavior = 3;
enemyBoss.items = [item1];
enemyBoss.description = "A big menancing skeleton wearing a dark robe ";
enemyBoss.playedMusic = "https://sftp.hs-furtwangen.de/~brauschl/music/gameMusic/enemy/mlbis.mp3";
pushEnemies();
function pushEnemies() {
    enemyArray.push(enemy1);
    enemyArray.push(enemy2);
    enemyArray.push(enemy3);
    enemyArray.push(enemy4);
    enemyArray.push(enemyBoss);
}
//# sourceMappingURL=Enemies.js.map