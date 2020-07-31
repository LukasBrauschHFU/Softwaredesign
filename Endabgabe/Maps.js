import { item1, item2, itemBossroom } from "./Items.js";
export var mapArray = [];
class Map {
    constructor() {
        this.name = "";
        this.posX = 0;
        this.posY = 0;
        this.description = "";
        this.items = [];
        this.locked = false;
        this.unlockItem = 0;
        //See which enemy is in the room, sorted by ID
        this.roomEnemy = null;
        //Checks if there still is enemie in the room
        //public enemyDefeated: boolean = false;
        this.songAudio = "";
    }
}
//Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south
//Map1
let map1 = new Map;
map1.posX = 0;
map1.posY = 1;
map1.name = "TestMap";
map1.roomEnemy = 1;
map1.locked = true;
map1.unlockItem = 2;
map1.items = [item2];
map1.description = "You are now in Map 1";
//Map2
let map2 = new Map;
map2.posX = 1;
map2.posY = 1;
map2.name = "TestMapNumeroDos";
map2.roomEnemy = 1;
map2.items = [item1];
map2.description = "You are now in Map 2";
//Map3
let map3 = new Map;
map3.posX = 2;
map3.posY = 1;
map3.name = "TestMapNumeroDos";
map3.roomEnemy = 1;
map3.description = "You are now in Map 3";
//Map4
let map4 = new Map;
map4.posX = 2;
map4.posY = 1;
map4.name = "TestMapNumeroDos";
map4.roomEnemy = 1;
map4.description = "You are now in Map 4";
//Map5
let map5 = new Map;
map5.posX = 2;
map5.posY = 0;
map5.name = "TestMapNumeroDos";
map5.roomEnemy = 1;
map5.description = "You are now in Map 5";
//Map6
let map6 = new Map;
map6.posX = 1;
map6.posY = -1;
map6.name = "TestMapNumeroDos";
map6.roomEnemy = 1;
map6.description = "You are now in Map 6";
// Bossroom
let mapBossroom = new Map;
mapBossroom.posX = 1;
mapBossroom.posY = 0;
mapBossroom.name = "TestMapBoss";
mapBossroom.roomEnemy = 4;
mapBossroom.items = [itemBossroom];
mapBossroom.description = "Nyotices Boss Woom: OwO oh nyo, I´m in pegging dangew";
mapBossroom.songAudio = "";
pushMaps();
function pushMaps() {
    mapArray.push(map1);
    mapArray.push(map2);
    mapArray.push(mapBossroom);
}
//# sourceMappingURL=Maps.js.map