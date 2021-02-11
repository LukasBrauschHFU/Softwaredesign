export var totalNumberofUsers: number = 1;
export var newID: number = 0;
export var newName: string = "0";
export var newPassword: string = "0";
import { User } from './User';
import UserManagementClass  from './UserManagement';
import QuestionManagementClass  from './QuestionManagement';
import {Question, QuestionFactory} from './QuestionFactory'
import {playQuiz} from './QuizExecution'
import { SelectionQuestion } from './SelectionQuestion';
const readline = require('readline');
const fs = require('fs');
//let jsonData = require('./student.json');
//let Users = require('./Users');
//var myClass = new Users.MyNameSpace.Enemy

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask user for the name input
rl.question(`What's your name? `, (name: String) => {

    // ask for UserName and Password
    rl.question(`What is your UserName ? `, (userName:string) => {
        rl.question(`What is your Password ? `, (userPassword:string) => {
    if(name == "3"){
        UserManagementClass.readUsers();
        
      UserManagementClass.writeUsers(userName, userPassword);
      console.log(userName)
     // UserManagementClass.userLogin(userName, userPassword)

    }
  
    if(name == "4"){
        const dog: any = QuestionFactory.create('SelectionQuestion', "OwO", QuestionManagementClass._totalNumberSelection+1, "EheSelection", "Not", "Petan", "Moruk", 3, );
        QuestionManagementClass.writeQuestions(dog, "SelectionQuestion", true, "Fubuki", "Fubuki", 5);
       // const dog2: Question = QuestionFactory.create('TextQuestion', "OwO", QuestionManagementClass._totalNumberText+1, "EheTExt1", "", "", "", 0, );
       // QuestionManagementClass.writeQuestions(dog2, "TextQuestion");
       // const dog3: Question = QuestionFactory.create('TextQuestion', "OwO", QuestionManagementClass._totalNumberText+1, "EheEHeTExt2", "", "", "", 0, );
       // QuestionManagementClass.writeQuestions(dog3, "TextQuestion");
       // const dog4: Question = QuestionFactory.create('NumberQuestion', "OwO", QuestionManagementClass._totalNumberNumber+1, "5", "", "", "", 0, );
       // QuestionManagementClass.writQuestions(dog4, "NumberQuestion");
       // console.log(dog);

    }
    if(name == "5"){
        QuestionManagementClass.readQuestions("Fubuki");
        const dog: any = QuestionFactory.create('SelectionQuestion', "OwO", QuestionManagementClass._totalNumberSelection+1, "EheSelection", "Not", "Petan", "Moruk", 3, );
        QuestionManagementClass.writeQuestions(dog, "SelectionQuestion", true, "Fubuki", "Fubuki", 5);
       // const dog: Question = QuestionFactory.create('SelectionQuestion', "OwO", QuestionManagementClass._totalNumberSelection+1, "EheNEw", "No", "EwE", "", 2, );
       // QuestionManagementClass.writeQuestions(dog, "SelectionQuestion");
        

    }
    if(name == "6"){
        playQuiz();
        

    }
        // log user details
    //    console.log(`${name} is from ${country}`);

        // close the stream
        rl.close();
    })}
    
    
    );

});