import {changePosition} from "./CharacterMovement.js";
import {battleStart, burning} from "./Battlesystem.js";
var btn: HTMLElement = document.getElementById("coolbutton");
btn.addEventListener("click", () => startGame());


function startGame(): void {
var select: string = "0";
console.log("What do you want to do ?");
document.getElementById("GameText").textContent = "What do you want to do ? (1 = Move; 2 = Battle; 3 = Use Item on Enemy)";
select = prompt();
switch (select) {
    case("1"): {
        changePosition();
        break; }
    case("2"): {
        battleStart();
        break; }
    case("3"): {
        burning(); 
        break; }
    default: {
        startGame(); 
        break; }
         
}}




//changePosition();
//battleStart();
//burning();
//battleStart();
//burning();
//changePosition();
//battleStart();
//burning();
//burning();
//changePosition();






