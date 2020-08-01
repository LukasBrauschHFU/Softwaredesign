import { enemyCurrent } from "./battlesystem.js";
import { Enemy } from "./Enemies.js";
import { player } from "./Player.js";
import { choice, level } from "./test.js";
export var friendArray = [];
export { interactWithEnemy1, interactWithEnemy2, interactWithEnemy3 };
export var enemyIsFriend;
var answer = "";
var answer2 = "";
var answer3 = "";
var btnstart = document.getElementById("talkButton");
btnstart.addEventListener("click", () => interactWithEnemy1());
function changeButton() {
    document.getElementById("talkButton").style.display = "";
    document.getElementById("button2").style.display = "none";
    document.getElementById("GameText").textContent = "You can now talk to the enemy";
}
//Functions that show the interactions between enemy behavior-types
//Tsundere
function interactWithEnemy1() {
    if (level == 1) {
        answer = choice;
    }
    if (level == 2) {
        answer2 = choice;
    }
    let friend = new Enemy;
    //Sets potential friend to the current enemy
    friend = enemyCurrent;
    document.getElementById("GameText").textContent = "Stop, who goes here ?";
    document.getElementById("GameText2").textContent = "Answer (1): I don´t know why I am here. Answer (2): Wait, you can talk ?. Answer (3): Who are you ? ";
    //Die verschiedenen Dialogoptionen
    switch (answer) {
        case ("1"): {
            document.getElementById("GameText").textContent = "I don´t believe you. You are after the treasure, aren´t you ?";
            document.getElementById("GameText2").textContent = "Answer (1): What treasure ?. Answer (2): Perhaps I am. Answer (3): Do you want to share it with me ?";
            switch (answer2) {
                case ("1"): {
                    document.getElementById("GameText").textContent = "That´s none of your business";
                    break;
                }
                case ("2"): {
                    document.getElementById("GameText").textContent = "Then perish, criminal scum";
                    player.currentHealth = player.currentHealth - 2;
                    break;
                }
                case ("3"): {
                    document.getElementById("GameText").textContent = "Well, I tried, but the Boss of this dungeon is to strong for me. If you manage to defeat it, I will gladdly share it with you.";
                    friendArray.push(friend);
                    enemyIsFriend = true;
                    break;
                }
            }
            break;
        }
        case ("2"): {
            document.getElementById("GameText").textContent = "Of course I can. Why wouldn´t I talk";
            document.getElementById("GameText2").textContent = "Answer (1): I just thought monsters couldn´t talk ?. Answer (2): Well, it was just what I thought (3): I´m sorry";
            switch (answer2) {
                case ("1"): {
                    document.getElementById("GameText").textContent = "That´s quiet offensive you know. Now have a taste of my sword for this";
                    player.currentHealth = player.currentHealth - 2;
                    break;
                }
                case ("2"): {
                    document.getElementById("GameText").textContent = "Hmpf";
                    break;
                }
                case ("3"): {
                    document.getElementById("GameText").textContent = "Yeah, no problem. You have the strength to be sorry for your mistakes. I will let you pass";
                    friendArray.push(friend);
                    enemyIsFriend = true;
                    break;
                }
            }
            break;
        }
        case ("3"): {
            document.getElementById("GameText").textContent = "I don´t believe you. You are after the treasure, aren´t you ?";
            document.getElementById("GameText2").textContent = "Answer (1): What treasure ?. Answer (2): Perhaps I am. Answer (3): Do you want to share it with me ?";
            switch (answer2) {
                case ("1"): {
                    document.getElementById("GameText").textContent = "That´s none of your business";
                    break;
                }
                case ("2"): {
                    document.getElementById("GameText").textContent = "Then perish, criminal scum";
                    break;
                }
                case ("3"): {
                    document.getElementById("GameText").textContent = "Well, I tried, but the Boss of this dungeon is to strong for me. If you manage to defeat it, I will gladdly share it with you  ?";
                    friendArray.push(friend);
                    break;
                }
            }
            break;
        }
    }
}
//"Have you heared about our lord and savior "boss"" "
function interactWithEnemy2() {
    console.log();
    prompt();
    let friend = new Enemy;
    friend = enemyCurrent;
    //Die verschiedenen Dialogoptionen
    switch (answer) {
        case ("1"): {
            console.log();
            prompt();
            answer = prompt();
            switch (answer) {
                case ("1"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("2"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("3"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
            }
        }
        case ("2"): {
            console.log();
            prompt();
            answer = prompt();
            switch (answer) {
                case ("1"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("2"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("3"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
            }
        }
        case ("3"): {
            console.log();
            prompt();
            answer = prompt();
            switch (answer) {
                case ("1"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("2"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("3"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
            }
        }
    }
}
//Hates you and ocasionally attacks you on wrong answers
function interactWithEnemy3() {
    console.log();
    prompt();
    let friend = new Enemy;
    friend = enemyCurrent;
    //Die verschiedenen Dialogoptionen
    switch (answer) {
        case ("1"): {
            console.log();
            prompt();
            answer = prompt();
            switch (answer) {
                case ("1"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("2"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("3"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
            }
        }
        case ("2"): {
            console.log();
            prompt();
            answer = prompt();
            switch (answer) {
                case ("1"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("2"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("3"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
            }
        }
        case ("3"): {
            console.log();
            prompt();
            answer = prompt();
            switch (answer) {
                case ("1"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("2"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case ("3"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
            }
        }
    }
}
//push friend into array
//defeat enemy
//# sourceMappingURL=EnemyInteraction.js.map