export var itemArray = [];
export var itemArrayPlayer = [];
import { player } from "./Player.js";
export class Item {
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
item1.name = "Torch";
item1.description = "Lights dark paths. May also be used on enemies";
//item2
let item2 = new Item;
item2.damage = 1;
item2.effect = "healing";
item2.name = "Ultrapotion";
item2.description = "Restores your health to maximum";
//item2
let item3 = new Item;
item3.damage = 1;
item3.effect = "";
item3.name = "Key";
item3.description = "Seems to be able to open some room";
// Legendary Item
let itemBossroom = new Item;
itemBossroom.damage = 1;
itemBossroom.effect = "stunn";
itemBossroom.name = "TestitemBoss";
itemBossroom.description = "Master Sword";
export { item1, item2, item3, itemBossroom };
pushitems();
pushPlayerItems();
console.log(itemArrayPlayer);
function pushitems() {
    itemArray.push(item1);
    itemArray.push(item2);
    itemArray.push(item3);
    itemArray.push(itemBossroom);
}
function pushPlayerItems() {
    if (player.startItem != "") {
        var startItem = itemArray.find(i => i.name === player.startItem);
        itemArrayPlayer.push(startItem);
        console.log(itemArrayPlayer);
    }
}
//# sourceMappingURL=Items.js.map