import { newID, newName, newPassword } from './main';
//export module MyNameSpace{
 //var enemyArray: Enemy[] = [];

export class TextQuestion {
    public questionString: String = "";
    public id: number = 0;
    public correctAnswer: String = "";
   
    constructor(_name: String, _id: number, _correctAnswer: String,){
      //Evtl hier aus Json einlesen
      this.questionString = _name;
      this.id = _id;
      this.correctAnswer = _correctAnswer;
    }}//}