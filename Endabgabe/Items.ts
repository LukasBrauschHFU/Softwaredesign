export var itemArray: Item[] = [];
export var itemArrayPlayer: Item[] = [];
import {player} from "./Player.js";

export class Item {
    public name: string = "";
    public effect: string = "";
    public description: String = "";
    public id: number = 0;
    }

    
  //item1
let item1: Item = new Item;
item1.effect = "burning";
item1.name = "Garlic Bread";
item1.description = "\n" + "Garlic Bread: A loaf of burning garlic bread. Lights dark paths. May also be used on enemies ";
item1.id = 0;

    //item2
let item2: Item = new Item;
item2.effect = "healing";
item2.name = "Ultrapotion";
item2.description = "\n" + "Ultrapotion: Restores your health to maximum";
item2.id = 1;

    //item3
let item3: Item = new Item;
item3.effect = "unlock";
item3.name = "Key";
item3.description = "\n" + "Key: Seems to be able to open some room";
item3.id = 2;

// Legendary Item
let itemBossroom: Item = new Item;
itemBossroom.effect = "ThirdImpact";
itemBossroom.name = "Fruits of Life and Wishdom";
itemBossroom.description = "This combination, if consumed will grant the user godlike powers";
itemBossroom.id = 3;

export{item1, item2, item3, itemBossroom};    
pushitems();
pushPlayerItems();
console.log(itemArrayPlayer);


function pushitems(): void {
    itemArray.push(item1);
    itemArray.push(item2);
    itemArray.push(item3);
    itemArray.push(itemBossroom);
    }

function pushPlayerItems(): void {
  if (player.startItem != "") {
    var startItem: Item = itemArray.find(i => i.name === player.startItem);
    itemArrayPlayer.push(startItem);
    console.log(itemArrayPlayer);
  }
  
      }
  