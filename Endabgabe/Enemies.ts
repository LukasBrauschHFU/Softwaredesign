export var enemyArray: Enemy[] = [];

export class Enemy {
    public name: string = "";
    public health: number = 0;
    public damage: number = 0;
    public description: String = "";
    //inventory of enemy
    public items: number = 0;
    //ID of enemy
    public id: number = 0;
    // how the enemy acts
    public behavior: number = 0;
    //to check if the enemy was activated
    public isActive: boolean = false;
    }

export class BossEnemy extends Enemy {
    public itemDropped: number = 0; 
    public musicPlayed: number = 0;
        }

  //enemy1
let enemy1: Enemy = new Enemy;
enemy1.health = 0;
enemy1.damage = 1;
enemy1.name = "Creeper";
enemy1.id = 0;
enemy1.description = "Aw man";

    //enemy2
let enemy2: Enemy = new Enemy;
enemy2.health = 1;
enemy2.damage = 1;
enemy2.name = "TestenemyNumeroDos";
enemy2.id = 1;
enemy2.description = "You are now in enemy 2";

// Bossenemy
let enemyBossroom: BossEnemy = new BossEnemy;
enemyBossroom.health = 177013;
enemyBossroom.damage = 2010;
enemyBossroom.name = "Hououin Kyouma";
enemyBossroom.id = 2;
enemyBossroom.description = "Tuturu";


pushenemys();

function pushenemys(): void {
    enemyArray.push(enemy1);
    enemyArray.push(enemy2);
    enemyArray.push(enemyBossroom);
    }