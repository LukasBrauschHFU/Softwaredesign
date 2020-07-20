export var enemyArray = [];
class Enemy {
    constructor() {
        this.name = "";
        this.health = 0;
        this.damage = 0;
        this.description = "";
        //inventory of enemie
        this.items = 0;
        //ID of enemy
        this.id = 0;
    }
}
//enemy1
let enemy1 = new Enemy;
enemy1.health = 0;
enemy1.damage = 1;
enemy1.name = "Testenemy";
enemy1.description = "You are now in enemy 1";
//enemy2
let enemy2 = new Enemy;
enemy2.health = 1;
enemy2.damage = 1;
enemy2.name = "TestenemyNumeroDos";
enemy2.description = "You are now in enemy 2";
// Bossenemy
let enemyBossroom = new Enemy;
enemyBossroom.health = 1;
enemyBossroom.damage = 0;
enemyBossroom.name = "TestenemyBoss";
enemyBossroom.description = "Big Boss";
pushenemys();
function pushenemys() {
    enemyArray.push(enemy1);
    enemyArray.push(enemy2);
    enemyArray.push(enemyBossroom);
}
//# sourceMappingURL=Enemies.js.map