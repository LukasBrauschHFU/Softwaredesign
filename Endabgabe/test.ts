import {changePosition} from "./CharacterMovement.js";
import {battleStart, talking, useItem, pickupItem, dropItem, currentRoom} from "./Battlesystem.js";
import { triggerEnding } from "./EnemyInteraction.js";

export var choice: string = (<HTMLInputElement>document.getElementById("textInput")).value;
export var btn: HTMLElement = document.getElementById("button2");
export var selectedOption: number = 0;
export var level: number = 0;
var selectedOption2: string = "";
var btnstart: HTMLElement = document.getElementById("startButton");
btnstart.addEventListener("click", () => showNewButton());
btn.addEventListener("click", () => fightingStart());
//Variable for pushing new text to the function that creates it
var pushableText: string = "";

function showNewButton(): void {
document.getElementById("startButton").style.display = "none";
document.getElementById("button2").style.display = "";
document.getElementById("GameText").textContent = "You wake up in a room that seems to be slightly lit by something burning. You have no memory of what happened yesterday night or how you ended up here. You take look at the backpack laying next to you and see that some kind of drink in an blue bottle is in there. As your eyes adjust to the darkness you begin to see 3 exits. Also, you find out that the burning thing in the middle of the room seems to be some kind of bread on a stick.";
}

function fightingStart(): void {
            choice = (<HTMLInputElement>document.getElementById("textInput")).value;
            document.getElementById("GameText").textContent = ""; 
            document.getElementById("GameText2").textContent = ""; 
            document.getElementById("Help").textContent = ""; 
            console.log(choice); 
            battleStart();
            if (triggerEnding == true) {
                document.getElementById("Help").textContent = "The End"; 
            }
            else {
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
                        case("i"): {
                            useItem();
                            selectedOption2 = ("i");
                            level = 1;
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
                            changePosition("e"); }
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
                        case("commands"): {
                            document.getElementById("Help").textContent = "commands: look(l), attack (a), talk (t), run (r), inventory (i), pickup item (p), drop Item (d), Quit game (q) "  + "move east, move west, move north, move south";
                            break; }                
                        default: {
                            break; }
                        }}
            }}
            pushableText = document.getElementById("GameText").textContent;
            addNewText();
            //document.getElementById("GameTextLast").textContent  =  document.getElementById("GameText").textContent; 
            (<HTMLInputElement>document.getElementById("textInput")).value = "";
        }


function addNewText(): void {    
        
                var newDiv: HTMLElement = document.createElement("div"); 
                
                var newContent: Text = document.createTextNode(pushableText); 
                
                newDiv.appendChild(newContent);  
              
                
                var currentDiv: HTMLElement = document.getElementById("div1"); 
                document.body.insertBefore(newDiv, currentDiv);    
                }             