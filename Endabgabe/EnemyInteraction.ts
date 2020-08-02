//import { Enemy } from "./Enemies.js";
import {player} from "./Player.js";
import { choice, level } from "./test.js";
//export var friendArray: Enemy[] = [];
export { interactWithEnemy1, interactWithEnemy2, interactWithEnemy3};
export var enemyIsFriend: boolean;
export var triggerEnding: boolean = false;

var answer: string = "";
var answer2: string = "";
//var btnstart: HTMLElement = document.getElementById("talkButton");
//btnstart.addEventListener("click", () => interactWithEnemy1());



//Functions that show the interactions between enemy behavior-types
//Tsundere
function interactWithEnemy1(): void {
if (level == 1) {
        answer = choice;
    }
if (level == 2) {
        answer2 = choice;
    }
document.getElementById("GameText").textContent = "Knight: Stop, who goes here ?"; 
document.getElementById("GameText2").textContent = "Answer (1): I don´t know why I am here. Answer (2): Wait, you can talk ?. Answer (3): Who are you ? "; 
//Die verschiedenen Dialogoptionen
switch (answer) {
    case("1"): {
        document.getElementById("GameText").textContent = "Knight: I don´t believe you. You are after the treasure, aren´t you ?"; 
        document.getElementById("GameText2").textContent = "Answer (1): What treasure ?. Answer (2): Perhaps I am. Answer (3): Do you want to share it with me ?"; 
        switch (answer2) {
            case("1"): {
                document.getElementById("GameText").textContent = "Knight: That´s none of your business"; 
                break;
            }
            case("2"): {
                document.getElementById("GameText").textContent = "Knight: Then perish, criminal scum";
                player.currentHealth = player.currentHealth - 2;
                break; 
            }
            case("3"): {
                document.getElementById("GameText").textContent = "Knight: Well, I tried, but the Boss of this dungeon is to strong for me. If you manage to defeat it, I will gladdly share it with you."; 
              
                enemyIsFriend = true;
                break;
            }
            
            }
        break;
    }
    case("2"): {
        document.getElementById("GameText").textContent = "Knight: Of course I can. Why wouldn´t I talk"; 
        document.getElementById("GameText2").textContent = "Answer (1): I just thought monsters couldn´t talk ?. Answer (2): Well, it was just what I thought (3): I´m sorry"; 
        switch (answer2) {
            case("1"): {
                document.getElementById("GameText").textContent = "Knight: That´s quiet offensive you know. Now have a taste of my sword for this"; 
                player.currentHealth = player.currentHealth - 2;
                break;
            }
            case("2"): {
                document.getElementById("GameText").textContent = "Knight: Hmpf";
                break; 
            }
            case("3"): {
                document.getElementById("GameText").textContent = "Knight: Yeah, no problem. You have the strength to be sorry for your mistakes. I will let you pass";
                enemyIsFriend = true;
                break;
            }
            
            }
        break;
    }
    case("3"): {
        document.getElementById("GameText").textContent = "Knight: I am Sir of Beanwhich. I reside here to protect the treasure of Lord Momonga"; 
        document.getElementById("GameText2").textContent = "Answer (1): Isn´t that a bit boring ?. Answer (2): K then. Sounds stupid Answer (3): Sounds cool "; 
        switch (answer2) {
            case("1"): {
                document.getElementById("GameText").textContent = "Knight: Well, yes it is but Lord Momonga pays me well."; 
                break;
            }
            case("2"): {
                document.getElementById("GameText").textContent = "Knight: You dare insulting me and Lord Momonga ?";
                player.currentHealth = player.currentHealth - 2;
                break; 
            }
            case("3"): {
                document.getElementById("GameText").textContent = "Knight: You think so ? Well, I may let you slip by, but don´t tell Lord Momonga"; 
                enemyIsFriend = true;
                break;
            }
            
            }
        break;
    }
    }
}
//"Have you heared about our lord and savior "boss"" "
function interactWithEnemy2(): void {
    if (level == 1) {
        answer = choice;
    }
    if (level == 2) {
        answer2 = choice;
    }
    document.getElementById("GameText").textContent = "Golem: Hnnnnnng, umpf"; 
    document.getElementById("GameText2").textContent = "Answer (1): Hello ?. Answer (2): Gnarf, hmmmm ?. Answer (3): ... "; 
//Die verschiedenen Dialogoptionen
    switch (answer) {
    case("1"): {
        document.getElementById("GameText").textContent = "The golem stares at you."; 
        document.getElementById("GameText2").textContent = "Answer (1): Can you talk ?. Answer (2): You seem creepy, dude (3): Can I pet you ?"; 
        switch (answer2) {
            case("1"): {
                document.getElementById("GameText").textContent = "Golem: Uguu"; 
                break;
            }
            case("2"): {
                document.getElementById("GameText").textContent = "The golem looks sad";
                break; 
            }
            case("3"): {
                document.getElementById("GameText").textContent = "The golem bows down and allows you to pet its head. It smiles";
                enemyIsFriend = true;
                break;
            }
            
            }
        break;
    }
    case("2"): {
        document.getElementById("GameText").textContent = "Golem: OwO, wamuu"; 
        document.getElementById("GameText2").textContent = "Answer (1): The what now ?. Answer (2): Nani?! (3): UwU"; 
        switch (answer2) {
            case("1"): {
                document.getElementById("GameText").textContent = "The golem seems to be upset by your answer and punches you"; 
                player.currentHealth = player.currentHealth - 2;
                break;
            }
            case("2"): {
                document.getElementById("GameText").textContent = "The golem seems to be amused";
                enemyIsFriend = true;
                break; 
            }
            case("3"): {
                document.getElementById("GameText").textContent = "The golem allows you to pass";
                enemyIsFriend = true;
                break;
            }
            
            }
        break;
    }
    case("3"): {
        document.getElementById("GameText").textContent = "Golem: ... "; 
        document.getElementById("GameText2").textContent = "Answer (1): ... . Answer (2): Alright then. Answer (3): You seem alright, golem-chan "; 
        switch (answer2) {
            case("1"): {
                document.getElementById("GameText").textContent = "Golem: ..."; 
                break;
            }
            case("2"): {
                document.getElementById("GameText").textContent = "The golem stares confused";
                break; 
            }
            case("3"): {
                document.getElementById("GameText").textContent = "The golem blushes"; 
                enemyIsFriend = true;
                break;
            }
            
            }
        break;
    }
    }
}
//Hates you and ocasionally attacks you on wrong answers
function interactWithEnemy3(): void {
    if (level == 1) {
        answer = choice;
    }
    if (level == 2) {
        answer2 = choice;
    }
    document.getElementById("GameText").textContent = "Oho, so you made it all the way up to me ?"; 
    document.getElementById("GameText2").textContent = "Answer (1): Who are you ? Answer (2): Indeed, I did. Answer (3): Did you eat enough calcium today ? "; 
//Die verschiedenen Dialogoptionen
    switch (answer) {
    case("1"): {
        document.getElementById("GameText").textContent = "I´m Lord Momonga, ruler over this tomb of nazric"; 
        document.getElementById("GameText2").textContent = "Answer (1): Altright. Answer (2): I wouldn´t be proud to be the ruler ofer this pile of garbae . Answer (3): Sounds great. Can I work for you ?"; 
        switch (answer2) {
            case("1"): {
                document.getElementById("GameText").textContent = "Now, let us fight"; 
                break;
            }
            case("2"): {
                document.getElementById("GameText").textContent = "You dare insult the almighty Momonga ? Have a taste of my power";
                document.getElementById("GameText2").textContent = "Momonga shot a lightning out of his fingers. You died";
                triggerEnding = true;
                break; 
            }
            case("3"): {
                document.getElementById("GameText").textContent = "I gladly accept your offer, since you were strong enough to get I´m sure here you will make a good minion";
                document.getElementById("GameText2").textContent = "You are happy that you finally have a job"; 
                triggerEnding = true;
                break;
            }
            
            }
        break;
    }
    case("2"): {
        document.getElementById("GameText").textContent = "Oho you´re approaching me ?"; 
        document.getElementById("GameText2").textContent = "Answer (1): I can´t beat the crap out of you without getting closer. Answer (2): I guess so.  Answer(3): ... "; 
        switch (answer2) {
            case("1"): {
                document.getElementById("GameText").textContent = "Oho, then come as close as you like"; 
                document.getElementById("GameText2").textContent = "You beginn a long punching duel, until you collapse";
                triggerEnding = true;
                break;
            }
            case("2"): {
                document.getElementById("GameText").textContent = "Ok";
                break; 
            }
            case("3"): {
                document.getElementById("GameText").textContent = "Did I stutter ?";
                break;
            }
            
            }
        break;
    }
    case("3"): {
        document.getElementById("GameText").textContent = "What kind of question is that ? "; 
        document.getElementById("GameText2").textContent = "Answer (1): Because you are a skeleton and all that. Answer (2): Bad joke, I know Answer (3): ... "; 
        switch (answer2) {
            case("1"): {
                document.getElementById("GameText").textContent = "..."; 
                document.getElementById("GameText2").textContent = "Lord Momonga threw a chair at you. It hit your seemingly empty head. You died";
                triggerEnding = true;
                break;
            }
            case("2"): {
                document.getElementById("GameText").textContent = "Indeed it is";
                break; 
            }
            case("3"): {
                document.getElementById("GameText").textContent = "Yeah, thought so"; 
                break;
            }
            
            }
        break;
    }
    }
}
     
