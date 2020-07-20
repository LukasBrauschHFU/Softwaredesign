export var enemyArray: Enemy[] = [];


class Enemy {
    public name: string = "";
    public health: number = 0;
    public damage: number = 0;
    public description: String = "";
    //inventory of enemie
    public items: number = 0;
    //ID of enemy
    public id: number = 0;
    }

    
  //enemy1
let enemy1: Enemy = new Enemy;
enemy1.health = 0;
enemy1.damage = 1;
enemy1.name = "Testenemy";
enemy1.description = "You are now in enemy 1";

    //enemy2
let enemy2: Enemy = new Enemy;
enemy2.health = 1;
enemy2.damage = 1;
enemy2.name = "TestenemyNumeroDos";
enemy2.description = "You are now in enemy 2";

// Bossenemy
let enemyBossroom: Enemy = new Enemy;
enemyBossroom.health = 1;
enemyBossroom.damage = 0;
enemyBossroom.name = "TestenemyBoss";
enemyBossroom.description = "Big Boss";


pushenemys();

function pushenemys(): void {
    enemyArray.push(enemy1);
    enemyArray.push(enemy2);
    enemyArray.push(enemyBossroom);
    }