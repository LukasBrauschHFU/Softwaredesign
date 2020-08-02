import {Item, item1, item2, item3, itemBossroom} from "./Items.js";
export var mapArray: Map[] = [];

export class Map {
    public name: string = "";
    public posX: number = 0;
    public posY: number = 0;
    public description: string = "";
    public items: Item[] = [];
    public locked: boolean = false;
    public unlockItem: number = 0;
    //See which enemy is in the room, sorted by ID
    public roomEnemy: number = null;
    //Checks if there still is enemie in the room
    public hasEnemy: boolean = false;
    }
//Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south
  //Map1
let map1: Map = new Map;
map1.posX = 0;
map1.posY = 1;
map1.name = "EnemyRoom1";
map1.roomEnemy = 0;
map1.hasEnemy = true;
map1.description = "This rooms seems to have been a bathroom. The old bathtub seems to be fileld with some kind of green goo";

    //Map2
let map2: Map = new Map;
map2.posX = 1;
map2.posY = 1;
map2.name = "Startroom";
map2.roomEnemy = 0;
map2.items = [item1];
map2.description = "You find yourself in a quiet dark room. It smells like burnt garlic bread";

    //Map3
let map3: Map = new Map;
map3.posX = 2;
map3.posY = 1;
map3.name = "Potionroom";
map3.roomEnemy = 1;
map3.hasEnemy = true;
map3.items = [item2];
map3.description = "This rooms seems to have been a kitchen some time ago. Bottles are laying around everywhere";

    //Map4
let map4: Map = new Map;
map4.posX = 2;
map4.posY = 0;
map4.name = "Keyroom";
map4.roomEnemy = 0;
map4.items = [item3];
map4.description = "This room looks strangely clean and intact. 4 chairs are standing around a table";

        //Map5
let map5: Map = new Map;
map5.posX = 1;
map5.posY = 0;
map5.name = "Enemyroom3";
map5.roomEnemy = 3;
map5.hasEnemy = true;
map5.description = "The roof of this room is caved in. You see plants that seem to have take over the room a long time ago";

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
mapBossroom.description = "This room looks gigantic and has painted windows all over it. You feel a strong presense creeping upo to you";


pushMaps();

function pushMaps(): void {
    mapArray.push(map1);
    mapArray.push(map2);
    mapArray.push(map3);
    mapArray.push(map4);
    mapArray.push(map5);
    mapArray.push(mapBossroom);
    }

