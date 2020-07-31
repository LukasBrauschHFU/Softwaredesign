import { changePosition } from "./CharacterMovement.js";
import { battleStart, talking, fight, useItem, pickupItem, dropItem } from "./Battlesystem.js";
export var choice = document.getElementById("vorname").value;
export var btn = document.getElementById("button2");
export var selectedOption = 0;
export var level = 0;
var selectedOption2 = "";
var btnstart = document.getElementById("coolbutton");
btnstart.addEventListener("click", () => showNewButton());
btn.addEventListener("click", () => fightingStart());
//Variable for pushing new text to the function that creates it
var pushableText = "";
function showNewButton() {
    document.getElementById("coolbutton").style.display = "none";
    document.getElementById("button2").style.display = "";
    document.getElementById("GameText").textContent = "Welcome";
}
function fightingStart() {
    choice = document.getElementById("vorname").value;
    pushableText = "What do you want to do ?";
    addNewText();
    console.log(choice);
    battleStart();
    switch (level) {
        case (1): {
            switch (selectedOption2) {
                case ("t"): {
                    talking();
                    break;
                }
                /*case("a"): {
                    fight();
                    break; }
*/ case ("i"): {
                    useItem();
                    level = 0;
                    break;
                }
                case ("p"): {
                    pickupItem();
                    level = 0;
                    break;
                }
                case ("d"): {
                    dropItem();
                    level = 0;
                    break;
                }
                case ("6"): {
                    selectedOption = 0;
                    break;
                }
                default: {
                    break;
                }
            }
        }
        case (0): {
            switch (choice) {
                case ("t"): {
                    talking();
                    break;
                }
                case ("a"): {
                    fight();
                    //selectedOption2 = ("a");
                    //level = 1;
                    break;
                }
                case ("i"): {
                    useItem();
                    selectedOption2 = ("i");
                    level = 1;
                    break;
                }
                case ("p"): {
                    pickupItem();
                    selectedOption2 = ("p");
                    level = 1;
                    break;
                }
                case ("move north"): {
                    changePosition("n");
                    break;
                }
                case ("move south"): {
                    changePosition("s");
                    break;
                }
                case ("move east"): {
                    changePosition("e");
                    break;
                }
                case ("move west"): {
                    changePosition("w");
                    break;
                }
                case ("d"): {
                    dropItem();
                    selectedOption2 = ("d");
                    level = 1;
                    break;
                }
                case ("6"): {
                    selectedOption = 0;
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
}
function addNewText() {
    var newDiv = document.createElement("div");
    // and give it some content 
    var newContent = document.createTextNode(pushableText);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}
//# sourceMappingURL=test.js.map