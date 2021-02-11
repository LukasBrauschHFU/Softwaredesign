//Evtl nach Questionmanagement auslagern
import { Question, QuestionFactory } from './QuestionFactory';
import QuestionManagementClass from './QuestionManagement';

//Fragenanzahl importieren aus String
var qmc = QuestionManagementClass;
//Track, how many questions where created yet for this quiz
var currentlyCreatedQuestions: number = 0;

export function createQuiz(): void{
     //Check if registered and name here
     console.log("Please enter your Username")
     var creatorName: string = ""    
     //Namensinput quiz here  
    console.log("Please enter the name of your quiz");
    var quizName: string = "";
   

for (var j: number = 0; j <= 9; j++){
    console.log("You have created " + currentlyCreatedQuestions + " questions in this quiz so far. Do you want to add more questions ?")
    //console input here
    
    //console input for question to be added here
    var initialInput: string = ""
    switch(initialInput){
        case "SelectionQuestion": {

        }
        case "TextQuestion": {
            console.log("Please enter your question here");
            //User input here
            var question: string = "";
            console.log("Please enter the correct answer here");
            //User input here
            var answer: string = ""
            const newTextQuestion: any = QuestionFactory.create('TextQuestion', question, qmc._totalNumberSelection+1, answer, "", "", "", 0, );
            QuestionManagementClass.writeQuestions(newTextQuestion, "TextQuestion", false, creatorName, quizName, 5);
        }
        case "NumberQuestion": {
            
        }
        case "Save": {
            if (currentlyCreatedQuestions <=3){
                console.log("You need to add at least 3 questions to save your quiz. Do you want to discard it ?") 
                //Delete file command here
            }
        }
    }



}
}
