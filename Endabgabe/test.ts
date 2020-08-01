import {changePosition, successfullChangeCharaMovement} from "./CharacterMovement.js";
import {battleStart, battleIsActive, extraOption, talking, fight, useItem, pickupItem, dropItem, look, currentRoom} from "./Battlesystem.js";

export var choice: string = (<HTMLInputElement>document.getElementById("textInput")).value;
export var btn: HTMLElement = document.getElementById("button2");
export var selectedOption: number = 0;
export var level: number = 0;
var selectedOption2: string = "";
var btnstart: HTMLElement = document.getElementById("coolbutton");
btnstart.addEventListener("click", () => showNewButton());
btn.addEventListener("click", () => fightingStart());
//Variable for pushing new text to the function that creates it
var pushableText: string = "";

function showNewButton(): void {
document.getElementById("coolbutton").style.display = "none";
document.getElementById("button2").style.display = "";
document.getElementById("GameText").textContent = "Welcome";
}

function fightingStart(): void {
            choice = (<HTMLInputElement>document.getElementById("textInput")).value;
            document.getElementById("GameText").textContent = ""; 
            document.getElementById("GameText2").textContent = ""; 
            document.getElementById("Help").textContent = ""; 
            console.log(choice); 
            battleStart();
            switch (level) {
                case(2): {
                            talking();
                            level = 0;
                            break;
                           } 
                case(1): {
                    switch (selectedOption2) {
                        case("t"): {
                            talking();
                            level = 2;
                            break; }
                       case("i"): {
                            useItem();
                            level = 0;
                            break; }   
                        case("p"): {
                            pickupItem();
                            level = 0;
                            break; }              
                        case("d"): {
                            dropItem();
                            level = 0;
                            break; } 
                        case("6"): {
                            selectedOption = 0;
                            break; }               
                        default: {
                            break; }
                        }} 
                case(0): {
                    switch (choice) {
                        case("t"): {
                            talking();
                            selectedOption2 = ("t");
                            level = 1;
                            break; } 
                        case("a"): {
                            fight();
                            //selectedOption2 = ("a");
                            //level = 1;
                            break; }
                        case("i"): {
                            useItem();
                            selectedOption2 = ("i");
                            level = 1;
                            break; }   
                        case("l"): {
                            look();
                            break; }       
                        case("p"): {
                            pickupItem();
                            selectedOption2 = ("p");
                            level = 1;
                            break; }
                        case("move north"): {
                            if (currentRoom.hasEnemy == true) {
                                document.getElementById("GameText").textContent = "You cannot change rooms while an enemy is in there"; 
                              }
                              else {
                            changePosition("n"); }
                            break; }  
                        case("move south"): {
                            if (currentRoom.hasEnemy == true) {
                                document.getElementById("GameText").textContent = "You cannot change rooms while an enemy is in there"; 
                              }
                              else {
                            changePosition("s"); }
                            break; } 
                        case("move east"): {
                            if (currentRoom.hasEnemy == true) {
                                document.getElementById("GameText").textContent = "You cannot change rooms while an enemy is in there"; 
                              }
                              else {
                            changePosition("e");}
                            break; } 
                        case("move west"): {
                            if (currentRoom.hasEnemy == true) {
                                document.getElementById("GameText").textContent = "You cannot change rooms while an enemy is in there"; 
                              }
                              else {
                            changePosition("w"); }
                            break; }               
                        case("d"): {
                            dropItem();
                            selectedOption2 = ("d");
                            level = 1;
                            break; } 
                        case("6"): {
                            selectedOption = 0;
                            break; }      
                        case("commands"): {
                            document.getElementById("Help").textContent = "commands: look(l), attack (a), talk (t), run (r), inventory (i), pickup item (p), drop Item (d), look at friends (friends)"  + "move east, move west, move north, move south";
                            break; }                
                        default: {
                            break; }
                        }}
            }
            pushableText = document.getElementById("GameText").textContent;;
            addNewText();
            //document.getElementById("GameTextLast").textContent  =  document.getElementById("GameText").textContent; 
            (<HTMLInputElement>document.getElementById("textInput")).value = "";
        }


function addNewText(): void {    
        
                var newDiv = document.createElement("div"); 
                // and give it some content 
                var newContent = document.createTextNode(pushableText); 
                // add the text node to the newly created div
                newDiv.appendChild(newContent);  
              
                // add the newly created element and its content into the DOM 
                var currentDiv = document.getElementById("div1"); 
                document.body.insertBefore(newDiv, currentDiv);    
                }             