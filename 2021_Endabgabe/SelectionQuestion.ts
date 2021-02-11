// import { newID, newName, newPassword } from './main';
//export module MyNameSpace{
 //var enemyArray: Enemy[] = [];

export class SelectionQuestion {
    public questionString: string = "";
    public id: number = 0;
    public correctAnswer: string = "";
    public wrongAnswer1: string = "";
    public wrongAnswer2: string = "";
    public wrongAnswer3: string = "";
    public amountAnswers: number = 2;
    
    constructor(_name: string, _id: number, _correctAnswer: string, _wrongAnswer1: string, _wrongAnswer2: string, _wrongAnswer3: string, _amountAnswers: number){
      this.questionString = _name;
      this.id = _id;
      this.correctAnswer = _correctAnswer;
      this.wrongAnswer1 = _wrongAnswer1 ;
      this.wrongAnswer2 = _wrongAnswer2;
      this.wrongAnswer3 = _wrongAnswer3;
      this.amountAnswers = _amountAnswers;
    }}//}