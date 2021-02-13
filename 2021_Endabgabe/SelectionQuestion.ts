// import { newID, newName, newPassword } from './main';
//export module MyNameSpace{
 //var enemyArray: Enemy[] = [];

export class SelectionQuestion {
    public questionString: String = "";
    public id: number = 0;
    public correctAnswer: String = "";
    public wrongAnswer1: String = "";
    public wrongAnswer2: String = "";
    public wrongAnswer3: String = "";
    public amountAnswers: number = 2;
    
    constructor(_name: String, _id: number, _correctAnswer: String, _wrongAnswer1: String, _wrongAnswer2: String, _wrongAnswer3: String, _amountAnswers: number){
      this.questionString = _name;
      this.id = _id;
      this.correctAnswer = _correctAnswer;
      this.wrongAnswer1 = _wrongAnswer1 ;
      this.wrongAnswer2 = _wrongAnswer2;
      this.wrongAnswer3 = _wrongAnswer3;
      this.amountAnswers = _amountAnswers;
    }}//}