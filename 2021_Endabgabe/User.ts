import { newID, newName, newPassword } from './main';
//export module MyNameSpace{
 //var enemyArray: Enemy[] = [];

export class User {
    public name: String = "";
    public id: number = 0;
    public password: String = "";
    public loginStatus: boolean = false;
    public playedGames: number = 0;
    public answeredQuestions: number = 0;
    public correctlyAnsweredQuestions: number = 0;
    

    constructor(name: String, id: number, password: String, playedGames: number, answeredQuestions: number, correctlyAnsweredQuestions: number){
      this.name = name;
      this.id = id;
      this.password = password;
      this.playedGames = playedGames;
      this.answeredQuestions = answeredQuestions;
      this.correctlyAnsweredQuestions = correctlyAnsweredQuestions;
    }}//}