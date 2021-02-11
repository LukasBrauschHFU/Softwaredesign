import { newID, newName, newPassword } from './main';
//export module MyNameSpace{
 //var enemyArray: Enemy[] = [];

export class NumberQuestion {
    public questionString: string = "";
    public id: number = 0;
    public correctAnswer: number = 0;
    


    constructor(_name: string, _id: number, _correctAnswer: number,){
      //Evtl hier aus Json einlesen
      this.questionString = _name;
      this.id = _id;
      this.correctAnswer = _correctAnswer;
    }}//}