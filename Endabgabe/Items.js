export var itemArray = [];
class Item {
    constructor() {
        this.name = "";
        this.damage = 0;
        this.effect = "";
        this.description = "";
        this.items = 0;
    }
}
//item1
let item1 = new Item;
item1.damage = 0;
item1.effect = "burning";
item1.name = "Testitem";
item1.description = "You are now in item 1";
//item2
let item2 = new Item;
item2.damage = 1;
item2.effect = "poisoning";
item2.name = "TestitemNumeroDos";
item2.description = "You are now in item 2";
// Legendary Item
let itemBossroom = new Item;
itemBossroom.damage = 1;
itemBossroom.effect = "stunn";
itemBossroom.name = "TestitemBoss";
itemBossroom.description = "Master Sword";
pushitems();
function pushitems() {
    itemArray.push(item1);
    itemArray.push(item2);
    itemArray.push(itemBossroom);
}
//# sourceMappingURL=Items.js.map