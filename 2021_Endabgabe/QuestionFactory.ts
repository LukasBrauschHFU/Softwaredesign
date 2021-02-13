import {SelectionQuestion} from "./SelectionQuestion";
import {NumberQuestion} from "./NumberQuestion";
import {TextQuestion} from "./TextQuestion";

export abstract class Question {
    questionString: string  = ""; 
    id: number= 0;
    correctAnswer: any  ;
}
//Change maybe
export class QuestionFactory {
    public static create(questionType: string, question1: String, id: number, correctAnswer: String, wrongAnswer1: String, wrongAnswer2: String, wrongAnswer3: String, amountAnswers: number) {
        switch(questionType) {
            case 'SelectionQuestion':
                return new SelectionQuestion(question1, id, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3, amountAnswers)
            case 'NumberQuestion':
                var convertedNumber: number = +correctAnswer; 
                return new NumberQuestion(question1, id, convertedNumber);
            case 'TextQuestion':
                return new TextQuestion(question1, id, correctAnswer);    
            default:
                throw new Error('This type of question does not exist');
        }
    }
}

