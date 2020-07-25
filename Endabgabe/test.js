import { changePosition, successfullChangeCharaMovement } from "./CharacterMovement.js";
import { battleStart, successfullBattleMove } from "./Battlesystem.js";
export var choice = document.getElementById("vorname").value;
export var btn = document.getElementById("button2");
export var selectedOption = 0;
var btnstart = document.getElementById("coolbutton");
btnstart.addEventListener("click", () => showNewButton());
//choice = (<HTMLInputElement>document.getElementById("vorname")).value;
btn.addEventListener("click", () => letsGo());
var flag = false;
/*function start(): void {
 choice = (<HTMLInputElement>document.getElementById("vorname")).value;
 console.log(choice);
 if (choice == "start") {
     choice = "";
     flag = true;
     //letsGo();
     
     console.log("Oh hello there");
    //Reset textbox
     (document.getElementById("vorname") as HTMLFormElement).value = "";
     (document.getElementById("coolbutton") as HTMLFormElement).value = "Submit";
   
}
}*/
function showNewButton() {
    document.getElementById("button2").style.display = "";
    document.getElementById("GameText").textContent = "Welcome";
}
//*function letsGo(): void {
//  if (selectedOption == 0) {
//       console.log(selectedOption);
///console.log("Do you want to 1. Move or 2. Fight"); }
//   choice = (<HTMLInputElement>document.getElementById("vorname")).value;
//   switch (choice) {
//   
//   case("1"): {
//       selectedOption = 1;
//       change();
//       break; }
//  //change();
//  case("2"): {battleStart();
//              break; }
//  default: {break; }
//  }
//  } 
//burning();
function letsGo() {
    choice = document.getElementById("vorname").value;
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
                fightingStart();
                break;
            }
            default: {
                break;
            }
        }
    }
}
//burning();
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
    console.log("What do you want to do ?");
    console.log(choice);
    battleStart();
    if (successfullBattleMove == true) {
        selectedOption = 0;
        console.log(selectedOption);
    }
}
//# sourceMappingURL=test.js.map