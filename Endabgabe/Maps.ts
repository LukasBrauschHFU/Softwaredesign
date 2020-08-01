import {Item, item1, item2, item3, itemBossroom} from "./Items.js";
export var mapArray: Map[] = [];

class Map {
    public name: string = "";
    public posX: number = 0;
    public posY: number = 0;
    public description: String = "";
    public items: Item[] = [];
    public locked: boolean = false;
    public unlockItem: number = 0;
    //See which enemy is in the room, sorted by ID
    public roomEnemy: number = null;
    //Checks if there still is enemie in the room
    public hasEnemy: boolean = false;
    public songAudio: string = "";
    }
//Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south
  //Map1
let map1: Map = new Map;
map1.posX = 0;
map1.posY = 1;
map1.name = "EnemyRoom1";
map1.roomEnemy = 0;
map1.hasEnemy = true;
map1.description = "You are now in Map 1";

    //Map2
let map2: Map = new Map;
map2.posX = 1;
map2.posY = 1;
map2.name = "Startroom";
map2.roomEnemy = 0;
map2.items = [item1];
map2.description = "You find yourself in a quiet dark room";

    //Map3
let map3: Map = new Map;
map3.posX = 2;
map3.posY = 1;
map3.name = "Potionroom";
map3.roomEnemy = 1;
map3.hasEnemy = true;
map3.items = [item2];
map3.description = "You are now in Map 3";

    //Map4
let map4: Map = new Map;
map4.posX = 2;
map4.posY = 0;
map4.name = "Keyroom";
map4.roomEnemy = 0;
map4.items = [item3];
map4.description = "You are now in Map 54";

        //Map5
let map5: Map = new Map;
map5.posX = 1;
map5.posY = 0;
map5.name = "Enemyroom3";
map5.roomEnemy = 3;
map5.hasEnemy = true;
map5.description = "You are now in Map 6";

// Bossroom
let mapBossroom: Map = new Map;
mapBossroom.posX = 1;
mapBossroom.posY = -1;
mapBossroom.name = "Bossroom";
mapBossroom.roomEnemy = 4;
mapBossroom.items = [itemBossroom];
mapBossroom.hasEnemy = true;
mapBossroom.locked = true;
mapBossroom.unlockItem = 2;
mapBossroom.description = "You feel a strong presense in this room";


pushMaps();

function pushMaps(): void {
    mapArray.push(map1);
    mapArray.push(map2);
    mapArray.push(map3);
    mapArray.push(map4);
    mapArray.push(map5);
    mapArray.push(mapBossroom);
    }

