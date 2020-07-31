import { enemyCurrent } from "./battlesystem.js";
import { Enemy } from "./Enemies.js";
export var friendArray = [];
export { interactWithEnemy1, interactWithEnemy2, interactWithEnemy3 };
var answer = "";
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
    let friend = new Enemy;
    //Sets potential friend to the current enemy
    friend = enemyCurrent;
    console.log();
    prompt();
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
                    friendArray.push(friend);
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