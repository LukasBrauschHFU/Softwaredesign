export var enemyArray: Enemy[] = [];

export class Enemy {
    public name: string = "";
    public health: number = 0;
    public damage: number = 0;
    public description: String = "";
    //inventory of enemie
    public items: number = 0;
    //ID of enemy
    public id: number = 0;
    // How ther enemy acts and if he is an inteligent NPC
    public behavior: number = 0;
    //t check if the enemy was activated
    public isActive: boolean = false;
    //Item the enemy could drop
    public droppedItem: number = 0;
    //Add Path to the song you want to play while fighting this enemy
    public playedMusic: string = ""; 
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
enemy2.description = "Fear his buggyness";

 //enemy3
let enemy3: Enemy = new Enemy;
enemy3.health = 1;
enemy3.damage = 1;
enemy3.name = "Steve";
enemy3.id = 3;
enemy3.description = "Best Tech Support";

// Bossenemy
let enemyBossroom: Enemy = new Enemy;
enemyBossroom.health = 1;
enemyBossroom.damage = 0;
enemyBossroom.name = "Ruby";
enemyBossroom.id = 2;
enemyBossroom.description = "Ganbanruby";
enemyBossroom.playedMusic = "./JirkMixV1.mp3";


pushenemys();

function pushenemys(): void {
    enemyArray.push(enemy1);
    enemyArray.push(enemy2);
    enemyArray.push(enemyBossroom);    
    }