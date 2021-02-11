import { newID, newName, newPassword } from './main';
//export module MyNameSpace{
 //var enemyArray: Enemy[] = [];

export class TextQuestion {
    public questionString: string = "";
    public id: number = 0;
    public correctAnswer: string = "";
   
    constructor(_name: string, _id: number, _correctAnswer: string,){
      //Evtl hier aus Json einlesen
      this.questionString = _name;
      this.id = _id;
      this.correctAnswer = _correctAnswer;
    }}//}