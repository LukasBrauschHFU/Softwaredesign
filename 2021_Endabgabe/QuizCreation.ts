//Evtl nach Questionmanagement auslagern

import { initial } from 'lodash';
import Console from './ConsoleRead';
import { NumberQuestion } from './NumberQuestion';
import UserManagementClass from './UserManagement';
import { Question, QuestionFactory } from './QuestionFactory';
import QuestionManagementClass from './QuestionManagement';
import ChoicesSingleton from './ChoicesSingleton';

const fs = require('fs')

//Fragenanzahl importieren aus String
var qmc = QuestionManagementClass;
var umc = UserManagementClass
var currentlyCreatedQuestions: number = 0;

export class QuizCreation{
   
    
public async createQuiz(): Promise<void>{
    //Track, how many questions where created yet for this quiz
    
 //   var quizIsPublic: boolean = false
     //Check if logged in
     currentlyCreatedQuestions = 0;
     if(umc.currentUser != undefined){
     var creatorID: number = umc.currentUser.id;    
     //Namensinput quiz here  
    var quizName: String = await Console.question("What do you want to call your quiz ?")
    
    try{let rawdata = fs.readFileSync(quizName + ".json")
        let test = JSON.parse(rawdata)
        console.log("A quiz with this name already exists. Please try again with another name")
        ChoicesSingleton.selection() 
    
    }
   catch{console.log("working name")}     
   
for (var j: number = 0; j <= 9; j++){
    //Hier ein if, falls 10 Fragen erreicht wurden
    console.log("You have created " + currentlyCreatedQuestions + " questions in this quiz so far")
   // console.log(j)
    var initialInput: String = await Console.question("Do you want to add more questions ?")

    //Debug
  //  if( currentlyCreatedQuestions >= 7){
  //      initialInput = "No"
  //  }
    //!Debug
    
    if(initialInput == "No"){
        if (currentlyCreatedQuestions <3){
            var deleteQuiz: String = await Console.question("You need to add at least 3 questions to save your quiz. Do you want to discard it")
            //Delete temporary Quiz arrays if wanted
            if(deleteQuiz == "Yes"){
            qmc._numberQuestionArray = [];
            qmc._selectionQuestionArray = []
            qmc._textQuestionArray = []
            ChoicesSingleton.selection() 
            break;}
            else{
            }
        }
        else{
            //If User decides to save his quiz, let them decide if it is public or not
            var publicInput: String = await Console.question("Do you want your quiz to be public ?")
        
        if (publicInput == "Yes"){//Public expression here
            qmc.writeFinalQuestions(true, creatorID, quizName, currentlyCreatedQuestions )
            console.log("Written file sucessfully")
            //Delete temporary Quiz arrays
            qmc._numberQuestionArray = [];
            qmc._selectionQuestionArray = []
            qmc._textQuestionArray = []
            ChoicesSingleton.selection() 
        }
        else if (publicInput == "No"){
            qmc.writeFinalQuestions(false, creatorID, quizName, currentlyCreatedQuestions )
            console.log("Written file sucessfully")
            //Delete temporary Quiz arrays
            qmc._numberQuestionArray = [];
            qmc._selectionQuestionArray = []
            qmc._textQuestionArray = []
            ChoicesSingleton.selection() 
        }
        break;
        }
        
    }
    else if (initialInput == "Yes"){
        var questionTypeInput: String = await Console.question("What type of question do you want to create ?")
        if(questionTypeInput == "SelectionQuestion") {
            var question: String = await Console.question("Please enter your question here")
            var answer: String = await Console.question("Please enter the 2-4 answers here (Correct one first)(Split them by using comma in between")
            var amountCurrentAnswers: number = 0;
            var splittedAnswer = answer.split(",", 4); 
           // console.log(splittedAnswer[1])   
            //Check, how many answers where given
            for(var i: number  = 0;splittedAnswer[i] != null; i++){
                amountCurrentAnswers++ 
            }
            //Check, if the right amount of possible questions was entered
            if(amountCurrentAnswers <= 1 || amountCurrentAnswers >= 5){
                console.log("Too little or too much questions where added, please retry")
              //  return;
            }
            else{
            const newSelectionQuestion: any = QuestionFactory.create('SelectionQuestion', question, qmc._totalNumberSelection+1, splittedAnswer[0], splittedAnswer[1], splittedAnswer[2], splittedAnswer[3], amountCurrentAnswers, );
            QuestionManagementClass.importQuestions(newSelectionQuestion, "SelectionQuestion");
            currentlyCreatedQuestions++;
            //break;
        }
        }
       else if(questionTypeInput == "TextQuestion") {
            var question: String = await Console.question("Please enter your question here")
            var answer: String = await Console.question("Please enter the correct answer here")
            const newTextQuestion: any = QuestionFactory.create('TextQuestion', question, qmc._totalNumberText+1, answer, "", "", "", 0, );
            QuestionManagementClass.importQuestions(newTextQuestion, "TextQuestion");
            currentlyCreatedQuestions++;
         //   break;
        }
        else if(questionTypeInput == "NumberQuestion") {
            var question: String = await Console.question("Please enter your question here")
            var answer: String = await Console.question("Please enter the correct answer here")
            const newNumberQuestion: any = QuestionFactory.create('NumberQuestion', question, qmc._totalNumberNumber+1, answer, "", "", "", 0, );
            QuestionManagementClass.importQuestions(newNumberQuestion, "NumberQuestion");
            currentlyCreatedQuestions++;
           // break;
        }
        else {
           console.log("You did not enter a valid question type")
           //break; 
        }
  }
}
 }
 else{
     console.log("You need to be logged in to use this feature")
 }
}

}

