import { newID, newName, newPassword } from './main';
//export module MyNameSpace{
 //var enemyArray: Enemy[] = [];

export class User {
    public name: string = "";
    public id: number = 0;
    public password: string = "";
    public loginStatus: boolean = false;
    public playedGames: number = 0;
    public answeredQuestions: number = 0;
    public correctlyAnsweredQuestions: number = 0;
    

    constructor(name: string, id: number, password: string){
      this.name = name;
      this.id = id;
      this.password = password;
    }}//}