export var enemyArray = [];
export class Enemy {
    constructor() {
        this.name = "";
        this.health = 0;
        this.damage = 0;
        this.description = "";
        //inventory of enemy
        this.items = 0;
        //ID of enemy
        this.id = 0;
        // how the enemy acts
        this.behavior = 0;
        //to check if the enemy was activated
        this.isActive = false;
    }
}
export class BossEnemy extends Enemy {
    constructor() {
        super(...arguments);
        this.itemDropped = 0;
        this.musicPlayed = 0;
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
enemy2.description = "You are now in enemy 2";
// Bossenemy
let enemyBossroom = new BossEnemy;
enemyBossroom.health = 177013;
enemyBossroom.damage = 2010;
enemyBossroom.name = "Hououin Kyouma";
enemyBossroom.id = 2;
enemyBossroom.description = "Tuturu";
pushenemys();
function pushenemys() {
    enemyArray.push(enemy1);
    enemyArray.push(enemy2);
    enemyArray.push(enemyBossroom);
}
//# sourceMappingURL=Enemies.js.map