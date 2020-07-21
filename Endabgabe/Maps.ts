export var myArray: Map[] = [];


class Map {
    public name: string = "";
    public posX: number = 0;
    public posY: number = 0;
    public description: String = "";
    public items: number = 0;
    //See which enemy is in the room, sorted by ID
    public roomEnemy: number = 0;
    //Checks if there still is an enemie in the room
    public enemyDefeated: number = 0;
    }
//Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south
  //Map1
let map1: Map = new Map;
map1.posX = 0;
map1.posY = 1;
map1.name = "TestMap";
map1.roomEnemy = 1;
map1.description = "You are now in Map 1";

    //Map2
let map2: Map = new Map;
map2.posX = 1;
map2.posY = 1;
map2.name = "TestMapNumeroDos";
map2.roomEnemy = 1;
map2.description = "You are now in Map 2";

// Bossroom
let mapBossroom: Map = new Map;
mapBossroom.posX = 1;
mapBossroom.posY = 0;
mapBossroom.name = "TestMapBoss";
mapBossroom.roomEnemy = 2;
mapBossroom.description = "Nyotices Boss Woom: OwO oh nyo, I´m in pegging dangew";


pushMaps();

function pushMaps(): void {
    myArray.push(map1);
    myArray.push(map2);
    myArray.push(mapBossroom);
    }