import {Item, item1, item2, itemBossroom} from "./Items.js";
export var enemyArray: Enemy[] = [];

export class Enemy {
    public name: string = "";
    public maximumHealth: number = 0;
    public currentHealth: number = 0;
    public damage: number = 0;
    public hiddenWeakness: string = "";
    public description: String = "";
    //inventory of enemie
    public items: Item[] = [];
    //ID of enemy
    public id: number = 0;
    // How the enemy acts and if he is an inteligent NPC
    public behavior: number = 0;
    //t check if the enemy was activated
    public isActive: boolean = false;
    //Item the enemy could drop
    public droppedItem: string = "";
    //Add Path to the song you want to play while fighting this enemy
    public playedMusic: string = ""; 
    }

  //enemy1
let enemy1: Enemy = new Enemy;
enemy1.maximumHealth = 1;
enemy1.currentHealth = 1;
enemy1.damage = 1;
enemy1.name = "Creeper";
enemy1.id = 0;
enemy1.items = [item1];
enemy1.description = "Aw man";

    //enemy2
let enemy2: Enemy = new Enemy;
enemy2.maximumHealth = 10;
enemy2.currentHealth = 10;
enemy2.damage = 1;
enemy2.name = "TestenemyNumeroDos";
enemy2.id = 1;
enemy2.items = [item1];
enemy2.description = "Fear his buggyness";
//enemy2.playedMusic = "https://webuser.hs-furtwangen.de/~brauschl/music/gameMusic/Ed/ve.mp3";

 //enemy3
let enemy3: Enemy = new Enemy;
enemy3.currentHealth = 1;
enemy3.damage = 1;
enemy3.name = "Steve";
enemy3.id = 2;
enemy3.items = [item1];
enemy3.hiddenWeakness = "";
enemy3.description = "Best Tech Support";

 //enemy3
let enemy4: Enemy = new Enemy;
enemy4.currentHealth = 20;
enemy4.damage = 2;
enemy4.name = "Wooden Golem";
enemy4.id = 3;
enemy4.items = [item1];
enemy4.hiddenWeakness = "torch";
enemy4.description = "His body looks kind of dry";

// Bossenemy
let enemyBoss: Enemy = new Enemy;
enemyBoss.currentHealth = 20;
enemyBoss.damage = 3;
enemyBoss.name = "Master of the darkest edge";
enemyBoss.id = 4;
enemyBoss.items = [item1];
enemyBoss.description = "Prepare for battle";
enemyBoss.playedMusic = "https://webuser.hs-furtwangen.de/~brauschl/music/gameMusic/Ed/ve.mp3";


pushenemys();
function pushenemys(): void {
  
    enemyArray.push(enemy1);
    enemyArray.push(enemy2);
    enemyArray.push(enemy3);
    enemyArray.push(enemy4);
    enemyArray.push(enemyBoss);    
    }