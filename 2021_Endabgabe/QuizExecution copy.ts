//Evtl nach Questionmanagement auslagern
import { Question } from './QuestionFactory';
import QuestionManagementClass from './QuestionManagement';
import Console from './ConsoleRead';
import UserManagementClass from './UserManagement';
import { sort } from './InitialChoices';
import  ChoicesSingleton  from './ChoicesSingleton';

//Am Ende Arrays leeren
var qmc = QuestionManagementClass;
var umc = UserManagementClass;
export class QuizExecution{
//Fragenanzahl importieren aus String


public async playQuiz(): Promise<void>{
//Read Quizname here
let quizNameInput : String = await Console.question("What quiz do you want to load ?")  
qmc.readQuestions(quizNameInput);  
//umc.currentUser.playedGames++


//console.log(qmc._isPublic)
//Check if Quiz is open, if not, check Username  
//console.log("Current user id "+ currentUser.id)
//console.log("Current quiz id "+ qmc._quizCreator)
if(qmc._isPublic == false && umc.currentUser == undefined || qmc._quizCreator !=  umc.currentUser?.id){
    console.log("This quiz is private and was created by another user");
    ChoicesSingleton.selection();
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
    let input : String = await Console.question("What is your Answer ?")
   // console.log("You answered" + input)
   umc.updateUsers(umc.currentUser?.id, "answeredQuestions");
    if(input === currentSelectionQuestion?.correctAnswer ){
        //Falls registriert, hier Score++

   console.log("Right")
   umc.updateUsers(umc.currentUser?.id, "correctlyAnsweredQuestions");
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
    umc.updateUsers(umc.currentUser?.id, "answeredQuestions");
    if(input === currentTextQuestion?.correctAnswer){
        //Falls registriert, hier Score++
   console.log("Right")
   umc.updateUsers(umc.currentUser?.id, "correctlyAnsweredQuestions");
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
 umc.updateUsers(umc.currentUser?.id, "answeredQuestions");
 if(convertedInput === currentNumberQuestion?.correctAnswer ){
     //Falls registriert, hier Score++
console.log("Right")
umc.updateUsers(umc.currentUser?.id, "correctlyAnsweredQuestions");
 }
 else{
     console.log("wrong");
 }
 //Return to startsite and increase number of played games
 umc.updateUsers(umc.currentUser?.id, "playedGames");
 ChoicesSingleton.selection();
}

}}

}
}
