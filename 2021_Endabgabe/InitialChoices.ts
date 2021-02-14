export var totalNumberofUsers: number = 1;
export var newID: number = 0;
export var newName: string = "0";
export var newPassword: string = "0";
import { User } from './User';
import UserManagementClass  from './UserManagement';
import {QuizExecution} from './QuizExecution'
import { SelectionQuestion } from './SelectionQuestion';
import Console from './ConsoleRead';
import { MovieDatabase} from './MovieDatabase';
import { waitForDebugger } from 'inspector';
//const readline = require('readline');
//const fs = require('fs');

//let jsonData = require('./student.json');
//let Users = require('./Users');
//var myClass = new Users.MyNameSpace.Enemy

export class sort {

public async selection(): Promise<void> {
    let choice : String = await Console.question("What do you want to do ?")
    UserManagementClass.readUsers();
   switch(choice){
   case "1": {
    UserManagementClass.userLogin()
   break;
   }
   case "2": {
    var test: QuizExecution = new QuizExecution;
       test.playQuiz();
       break;
   }

   }


}
    }

