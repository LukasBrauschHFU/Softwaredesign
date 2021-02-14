//Evtl nach Questionmanagement auslagern
//import { Question } from './QuestionFactory';
import QuestionManagementClass from './QuestionManagement';
import Console from './ConsoleRead';
import UserManagementClass from './UserManagement';
import { sort } from './InitialChoices';
import  ChoicesSingletonClass  from './ChoicesSingleton';
import { checkServerIdentity } from 'tls';

var qmc = QuestionManagementClass;
var umc = UserManagementClass;
export class QuizExecution{

public async playQuiz(): Promise<void>{   
let tempAmountAnswers: number = 0;    
let tempCorrectAmountAnswers: number = 0;  
//Quizname reader here
console.log("You can choose one of these quiz: ")
qmc.readQuizNames();
//Read Quizname here
let quizNameInput : String = await Console.question("What quiz do you want to load ?") 
//check if quiz exists
try{qmc.readQuestions(quizNameInput); }
catch{
    console.log("This quiz does not exist");
    ChoicesSingletonClass.selection();
} 
if(qmc._isPublic == false && qmc._quizCreator !=  umc.currentUser?.id){
    console.log("This quiz is private and was created by another user");
    ChoicesSingletonClass.selection();
}
else if(qmc._isPublic == true || qmc._quizCreator == umc.currentUser.id) {
for (var j: number = 0; j <= qmc._totalNumberAllQuestions; j++){
//Ask Selection Question
if(qmc._selectionQuestionArray[j]!= null){
    //Randomize Question-Answer reihenfolge
    var currentSelectionQuestion =  qmc._selectionQuestionArray[j]
    console.log(qmc._selectionQuestionArray[j].questionString );
    switch(qmc._selectionQuestionArray[j].amountAnswers){
        case 2:{
            console.log("1. " + qmc._selectionQuestionArray[j].correctAnswer + '\n' + "2. " + qmc._selectionQuestionArray[j].wrongAnswer1)
            break;
        }
        case 3:{
            console.log("1. " + qmc._selectionQuestionArray[j].correctAnswer + '\n' + "2. " + qmc._selectionQuestionArray[j].wrongAnswer1 + '\n' + "3. " + qmc._selectionQuestionArray[j].wrongAnswer2)
            break;
        }
        case 4:{
            console.log("1. " + qmc._selectionQuestionArray[j].correctAnswer + '\n' + "2 " + qmc._selectionQuestionArray[j].wrongAnswer1 + '\n' + "3. " + qmc._selectionQuestionArray[j].wrongAnswer2 + '\n' + "4. " + qmc._selectionQuestionArray[j].wrongAnswer3 )
            break;
        }
    }
    console.log("j is" + j)
    let input : String = await Console.question("What is your Answer ?")
    console.log("You answered" + input)
    tempAmountAnswers++;
    if(input === currentSelectionQuestion.correctAnswer ){
   console.log("Right")
   tempCorrectAmountAnswers++;
    }
    else{
        console.log("wrong");
    }
}
//Ask text Question
if(qmc._textQuestionArray[j]!= null){
    var currentTextQuestion =  qmc._textQuestionArray[j]
    console.log(qmc._textQuestionArray[j].questionString);
    let input : String = await Console.question("What is your Answer ?")
    //console.log("You answered" + input + currentTextQuestion?.correctAnswer)
    tempAmountAnswers++;
    if(input === currentTextQuestion.correctAnswer){
   console.log("Right")
   tempCorrectAmountAnswers++;
    }
    else{
        console.log("wrong");
    }
}
//Ask number Question
if(qmc._numberQuestionArray[j]!= null){
 var currentNumberQuestion =  qmc._numberQuestionArray[j]
 console.log(qmc._numberQuestionArray[j].questionString);
 let input : String = await Console.question("What is your Answer ?")
 var convertedInput: number = +input;
 //Add answeredquestioncounter
 tempAmountAnswers++;
 if(convertedInput === currentNumberQuestion.correctAnswer ){
     //Falls registriert, hier Score++
console.log("Right")
tempCorrectAmountAnswers++;
 }
 else{
     console.log("wrong");
 }
 
}

}
//Return to startsite and increase number of played games/answers
console.log(tempCorrectAmountAnswers,tempAmountAnswers)
umc.updateUsers(umc.currentUser.id, tempAmountAnswers,tempCorrectAmountAnswers);
ChoicesSingletonClass.selection();}

}
}
