export var enemyArray = [];
export class Enemy {
    constructor() {
        this.name = "";
        this.health = 0;
        this.damage = 0;
        this.description = "";
        //inventory of enemie
        this.items = 0;
        //ID of enemy
        this.id = 0;
        // How ther enemy acts and if he is an inteligent NPC
        this.behavior = 0;
        //t check if the enemy was activated
        this.isActive = false;
        //Item the enemy could drop
        this.droppedItem = 0;
        //Add Path to the song you want to play while fighting this enemy
        this.playedMusic = "";
    }
}
//enemy1
let enemy1 = new Enemy;
enemy1.health = 0;
enemy1.damage = 1;
enemy1.name = "Creeper";
enemy1.id = 0;
enemy1.description = "Aw man";
//enemy2
let enemy2 = new Enemy;
enemy2.health = 1;
enemy2.damage = 1;
enemy2.name = "TestenemyNumeroDos";
enemy2.id = 1;
enemy2.description = "Fear his buggyness";
//enemy3
let enemy3 = new Enemy;
enemy3.health = 1;
enemy3.damage = 1;
enemy3.name = "Steve";
enemy3.id = 3;
enemy3.description = "Best Tech Support";
// Bossenemy
let enemyBossroom = new Enemy;
enemyBossroom.health = 1;
enemyBossroom.damage = 0;
enemyBossroom.name = "Ruby";
enemyBossroom.id = 2;
enemyBossroom.description = "Ganbanruby";
enemyBossroom.playedMusic = "https://sftp.hs-furtwangen.de/~brauschl/music/Snow.mp3";
pushenemys();
function pushenemys() {
    enemyArray.push(enemy1);
    enemyArray.push(enemy2);
    enemyArray.push(enemyBossroom);
}
//# sourceMappingURL=Enemies.js.map