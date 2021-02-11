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
    public static create(questionType: string, question1: string, id: number, correctAnswer: string, wrongAnswer1: string, wrongAnswer2: string, wrongAnswer3: string, amountAnswers: number) {
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

