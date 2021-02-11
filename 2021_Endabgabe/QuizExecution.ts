//Evtl nach Questionmanagement auslagern
import { Question } from './QuestionFactory';
import QuestionManagementClass from './QuestionManagement';

//Fragenanzahl importieren aus String
var qmc = QuestionManagementClass;

export function playQuiz(): void{
//Read Quizname here
//Check if Quiz is open, if not, check Username    
qmc.readQuestions("Fubuki");    
for (var j: number = 0; j <= qmc._totalNumberAllQuestions; j++){
//Ask Selection Question
if(qmc._selectionQuestionArray[j]!= null){
    var currentSelectionQuestion =  qmc._textQuestionArray[j]
    console.log(qmc._selectionQuestionArray[j].questionString);
    var input: string = "5"//console input here
    if(input === currentSelectionQuestion?.correctAnswer ){
        //Falls registriert, hier Score++
   console.log("Right")
    }
    else{
        console.log("wrong");
    }
}
//Ask text Question
if(qmc._numberQuestionArray[j]!= null){
    var currentTextQuestion =  qmc._textQuestionArray[j]
    console.log(qmc._numberQuestionArray[j].questionString);
    var input: string = "5"//console input here
    if(input === currentTextQuestion?.correctAnswer ){
        //Falls registriert, hier Score++
   console.log("Right")
    }
    else{
        console.log("wrong");
    }
}
//Ask number Question
if(qmc._numberQuestionArray[j]!= null){
 var currentNumberQuestion =  qmc._numberQuestionArray[j]
 console.log(qmc._numberQuestionArray[j].questionString);
 var input: string = "5"//console input here
 var convertedInput: number = +input;
 if(convertedInput === currentNumberQuestion?.correctAnswer ){
     //Falls registriert, hier Score++
console.log("Right")
 }
 else{
     console.log("wrong");
 }
}

}
}
