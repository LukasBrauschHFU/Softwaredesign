import {enemyCurrent} from "./battlesystem.js";
import { Enemy } from "./Enemies.js";
export var friendArray: Enemy[] = [];
export { interactWithEnemy1, interactWithEnemy2, interactWithEnemy3 };

var answer: string = prompt();

//Functions that show the interactions between enemy behavior-types
//Tsundere
function interactWithEnemy1(): void {
let friend: Enemy = new Enemy;
//Sets potential friend to the current enemy
friend = enemyCurrent;
console.log();
prompt();
//Die verschiedenen Dialogoptionen
switch (answer) {
    case("1"): {
        console.log();
        prompt();
        answer = prompt();
        switch (answer) {
            case("1"): {
                console.log();
                prompt();
                answer = prompt();
                friendArray.push(friend);
            }
            case("2"): {
                console.log();
                prompt();
                answer = prompt();
            }
            case("3"): {
                console.log();
                prompt();
                answer = prompt();
            }
            
            }
    }
    case("2"): {
        console.log();
        prompt();
        answer = prompt();
        switch (answer) {
            case("1"): {
                console.log();
                prompt();
                answer = prompt();
            }
            case("2"): {
                console.log();
                prompt();
                answer = prompt();
            }
            case("3"): {
                console.log();
                prompt();
                answer = prompt();
            }
            
            }
    }
    case("3"): {
        console.log();
        prompt();
        answer = prompt();
        switch (answer) {
            case("1"): {
                console.log();
                prompt();
                answer = prompt();
            }
            case("2"): {
                console.log();
                prompt();
                answer = prompt();
            }
            case("3"): {
                console.log();
                prompt();
                answer = prompt();
            }
            
            }
    }
    }
}
//"Have you heared about our lord and savior "boss"" "
function interactWithEnemy2(): void {
    console.log();
    prompt();
    let friend: Enemy = new Enemy;
    friend = enemyCurrent;
    //Die verschiedenen Dialogoptionen
    switch (answer) {
        case("1"): {
            console.log();
            prompt();
            answer = prompt();
            switch (answer) {
                case("1"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case("2"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case("3"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                
                }
        }
        case("2"): {
            console.log();
            prompt();
            answer = prompt();
            switch (answer) {
                case("1"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case("2"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case("3"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                
                }
        }
        case("3"): {
            console.log();
            prompt();
            answer = prompt();
            switch (answer) {
                case("1"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case("2"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                case("3"): {
                    console.log();
                    prompt();
                    answer = prompt();
                }
                
                }
        }
        }
    }
//Hates you and ocasionally attacks you on wrong answers
function interactWithEnemy3(): void {
        console.log();
        prompt();
        let friend: Enemy = new Enemy;
        friend = enemyCurrent;
        //Die verschiedenen Dialogoptionen
        switch (answer) {
            case("1"): {
                console.log();
                prompt();
                answer = prompt();
                switch (answer) {
                    case("1"): {
                        console.log();
                        prompt();
                        answer = prompt();
                    }
                    case("2"): {
                        console.log();
                        prompt();
                        answer = prompt();
                    }
                    case("3"): {
                        console.log();
                        prompt();
                        answer = prompt();
                    }
                    
                    }
            }
            case("2"): {
                console.log();
                prompt();
                answer = prompt();
                switch (answer) {
                    case("1"): {
                        console.log();
                        prompt();
                        answer = prompt();
                    }
                    case("2"): {
                        console.log();
                        prompt();
                        answer = prompt();
                    }
                    case("3"): {
                        console.log();
                        prompt();
                        answer = prompt();
                    }
                    
                    }
            }
            case("3"): {
                console.log();
                prompt();
                answer = prompt();
                switch (answer) {
                    case("1"): {
                        console.log();
                        prompt();
                        answer = prompt();
                    }
                    case("2"): {
                        console.log();
                        prompt();
                        answer = prompt();
                    }
                    case("3"): {
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