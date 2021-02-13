export var totalNumberofUsers: number = 1;
export var newID: number = 0;
export var newName: string = "0";
export var newPassword: string = "0";
import { User } from './User';
import UserManagementClass  from './UserManagement';
import QuestionManagementClass  from './QuestionManagement';
import {Question, QuestionFactory} from './QuestionFactory'
import {QuizExecution} from './QuizExecution'
import { SelectionQuestion } from './SelectionQuestion';
import { QuizCreation } from './QuizCreation';
import Console from './ConsoleRead';
import { MovieDatabase} from './MovieDatabase';
import { waitForDebugger } from 'inspector';
import { readScore } from './ScoreBoard';

var umc = UserManagementClass;

    class ChoicesSingleton {
        private static _instance : ChoicesSingleton = new ChoicesSingleton()
      
      
        constructor() {
            if(ChoicesSingleton._instance){
                throw new Error("Error: Instantiation failed: Use UserManagementClass.getInstance() instead of new.");
            }
            ChoicesSingleton._instance = this;
        }
        public static getInstance() : ChoicesSingleton {
          return ChoicesSingleton._instance
        }

        public async selection(): Promise<void> {
            if (umc.currentUser.id == -1){
            let choice : String = await Console.question(" \n What do you want to do ? You can \n 1 Play an existing Quiz \n 2 Login \n 3 Register a new Account \n 4 Read score  ")
            UserManagementClass.readUsers();
           switch(choice){
           case "1": {
            var quizStart: QuizExecution = new QuizExecution;
               quizStart.playQuiz();
           break;
           }
           case "2": {
               UserManagementClass.readUsers()
               UserManagementClass.userLogin()
               break;
           }
           case "3": {
            UserManagementClass.createUsers()
            break;
        }
        case "4": {
            readScore();
            break;
        }
        
           }
        }
           else{
            let choice : String = await Console.question(" \n What do you want to do ? You can \n 1 Play an existing Quiz \n 2 Create a new quiz \n 3 See your score")
            UserManagementClass.readUsers();
           switch(choice){
            case "1": {
             var quizStart: QuizExecution = new QuizExecution;
                quizStart.playQuiz();
            break;
            }
            case "2": {
                var createStart: QuizCreation = new QuizCreation;
                createStart.createQuiz();
            }
            case "3": {
                readScore();
                   break;
               }
         
            }
        
        }
        
        
        
        
        }
    }
      export default ChoicesSingleton.getInstance();