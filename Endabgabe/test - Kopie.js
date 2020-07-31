import { changePosition, successfullChangeCharaMovement } from "./CharacterMovement.js";
import { battleStart, successfullBattleMove, extraOption, talking, fight, useItem, pickupItem, dropItem } from "./Battlesystem.js";
export var choice = document.getElementById("vorname").value;
export var btn = document.getElementById("button2");
export var selectedOption = 0;
var btnstart = document.getElementById("coolbutton");
btnstart.addEventListener("click", () => showNewButton());
btn.addEventListener("click", () => choiceSelector());
//Variable for pushing new text to the function that creates it
var pushableText = "";
function showNewButton() {
    document.getElementById("coolbutton").style.display = "none";
    document.getElementById("button2").style.display = "";
    document.getElementById("GameText").textContent = "Welcome";
}
//Alternativ: Alle Funktionen von überall aus aufrufen
function choiceSelector() {
    choice = document.getElementById("vorname").value;
    console.log("extraoption" + extraOption);
    if (selectedOption == 0) {
        console.log("Select 1 or 2");
        console.log(choice);
        switch (choice) {
            case ("start"): {
                selectedOption = 0;
                console.log("Why");
                break;
            }
            case ("1"): {
                selectedOption = 1;
                charaMover();
                break;
            }
            //change();
            case ("2"): {
                selectedOption = 2;
                fightingStart();
                break;
            }
            default: {
                break;
            }
        }
    }
    else {
        switch (selectedOption) {
            case (1): {
                charaMover();
                break;
            }
            //change();
            case (2): {
                if (extraOption == 0) {
                    fightingStart();
                }
                else {
                    battleSim();
                }
                break;
            }
            default: {
                break;
            }
        }
    }
}
function charaMover() {
    choice = document.getElementById("vorname").value;
    console.log("Where do you want to go ?");
    console.log(choice);
    changePosition();
    if (successfullChangeCharaMovement == true) {
        selectedOption = 0;
    }
}
function fightingStart() {
    choice = document.getElementById("vorname").value;
    pushableText = "What do you want to do ?";
    addNewText();
    console.log("What do you want to do ?");
    console.log(choice);
    battleStart();
    if (successfullBattleMove == true) {
        selectedOption = 2;
        console.log(selectedOption);
    }
}
function battleSim() {
    switch (extraOption) {
        case (1): {
            talking();
            break;
        }
        case (2): {
            console.log("OwO");
            fight();
            break;
        }
        case (3): {
            useItem();
            break;
        }
        case (4): {
            pickupItem();
            break;
        }
        case (5): {
            dropItem();
            break;
        }
        default: {
            break;
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
//# sourceMappingURL=test - Kopie.js.map