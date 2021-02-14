export var totalNumberofUsers: number = 1;
export var newID: number = 0;
export var newName: string = "0";
export var newPassword: string = "0";
import { User } from './User';
import UserManagementClass  from './UserManagement';
import QuestionManagementClass  from './QuestionManagement';
import { QuestionFactory} from './QuestionFactory'
import {QuizExecution} from './QuizExecution'
import { SelectionQuestion } from './SelectionQuestion';
import { QuizCreation } from './QuizCreation';
import Console from './ConsoleRead';
import { MovieDatabase} from './MovieDatabase';
import { waitForDebugger } from 'inspector';
import { readScore } from './ScoreBoard';

var umc = UserManagementClass;

    class ChoicesSingletonClass {
        private static _instance : ChoicesSingletonClass = new ChoicesSingletonClass()
      
      
        constructor() {
            if(ChoicesSingletonClass._instance){
                throw new Error("Error: Instantiation failed: Use UserManagementClass.getInstance() instead of new.");
            }
            ChoicesSingletonClass._instance = this;
        }
        public static getInstance() : ChoicesSingletonClass {
          return ChoicesSingletonClass._instance
        }

        public async selection(): Promise<void> {
            if (umc.currentUser.id == -1){
                UserManagementClass.readUsers();
            let choice : String = await Console.question(" \n What do you want to do ? You can \n 1 Play an existing Quiz \n 2 Login \n 3 Register a new Account \n 4 Read score  ")
           switch(choice){
           case "1": {
            var quizStart: QuizExecution = new QuizExecution;
              quizStart.playQuiz();
           break;
           }
           case "2": {
               //UserManagementClass.readUsers()
               UserManagementClass.userLogin()
               break;
           }
           case "3": {
            UserManagementClass.createUsers()
            break;
        }
        case "4": {
            //Evtl erst hiden, beim 2. aufrugf dann anzeigen
            readScore();
            break;
        }
        
           }
        }
           else{
            UserManagementClass.readUsers();
            let choice : String = await Console.question(" \n What do you want to do ? You can \n 1 Play an existing Quiz \n 2 Create a new quiz \n 3 See your score")
           switch(choice){
            case "1": {
             var quizStart: QuizExecution = new QuizExecution;
                quizStart.playQuiz();
            break;
            }
            case "2": {
                var createStart: QuizCreation = new QuizCreation;
                createStart.createQuiz();
                break;
            }
            case "3": {
                readScore();
                   break;
               }
         
            }
        
        }
        
        
        
        
        }
    }
      export default ChoicesSingletonClass.getInstance();