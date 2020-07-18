export var myArray = [];
class Map {
    constructor() {
        this.name = "";
        this.posX = 0;
        this.posY = 0;
        this.description = "";
        this.items = 0;
    }
}
//Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south
//Map1
let map1 = new Map;
map1.posX = 0;
map1.posY = 1;
map1.name = "TestMap";
map1.description = "You are now in Map 1";
//Map2
let map2 = new Map;
map2.posX = 1;
map2.posY = 1;
map2.name = "TestMapNumeroDos";
map2.description = "You are now in Map 2";
// Bossroom
let mapBossroom = new Map;
mapBossroom.posX = 1;
mapBossroom.posY = 0;
mapBossroom.name = "TestMapBoss";
mapBossroom.description = "Nyotices Boss Woom: OwO oh nyo, I´m in pegging dangew";
pushMaps();
function pushMaps() {
    myArray.push(map1);
    myArray.push(map2);
    myArray.push(mapBossroom);
}
//# sourceMappingURL=Maps.js.map