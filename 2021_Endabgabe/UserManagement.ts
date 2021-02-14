import { sort } from './InitialChoices'
import { User } from './User';
import  ChoicesSingletonClass  from './ChoicesSingleton'
import Console from './ConsoleRead';
const readline = require('readline');
const fs = require('fs');
//export let currentUser: User;

class UserManagementClass {

    //The standart Player, not logged in and with an id of -1 to differenciate
    public  currentUser: User = new User("", -1, "", 0,0,0);
    private static _instance:UserManagementClass = new UserManagementClass();

    public _userArray: User[] = [];  

    private _totalNumberofUsers: number = 0;

    constructor() {
        if(UserManagementClass._instance){
            throw new Error("Error: Instantiation failed: Use UserManagementClass.getInstance() instead of new.");
        }
        UserManagementClass._instance = this;
    }

    public static getInstance():UserManagementClass
    {
        return UserManagementClass._instance;
    }

    //Read Users from json und put them into an Array
    public  readUsers(): void
    {
        //Empty current user Array
     this._userArray= []   
     let rawdata = fs.readFileSync('RegisteredUsers.json');
     try{
     let tempUser = JSON.parse(rawdata);   
     //Reset number of users in case the number was modified before 
     this._totalNumberofUsers = 0;
     //As long as users exist in the json file, push them into the User array
     for(let j: number = 0; tempUser.Users[j] != undefined ; j++){ 
     //Raise totalNumberoftempUsers     
     this._totalNumberofUsers++;
     var readID = tempUser.Users[j].id;
     var readName = tempUser.Users[j].name ;
     var readPassword =tempUser.Users[j].password ;
     var readPlayedGames = tempUser.Users[j].playedGames;
     var readAnsweredQuestions = tempUser.Users[j].answeredQuestions;
     var readCorrectlyAnsweredQuestions = tempUser.Users[j].correctlyAnsweredQuestions;
     let existingUser: User = new User(readName, readID , readPassword, readPlayedGames, readAnsweredQuestions, readCorrectlyAnsweredQuestions );
   //  console.log(newUser.name);
     this._userArray.push(existingUser);
     //console.log(this._totalNumberofUsers)
    }
    }
    catch{
        console.log("No user found yet")
    }
}
    
    //Write User Array into Json
    public async createUsers(): Promise<void>{
        let userName : String = await Console.question("What is your username ?")
        let userPassword : String = await Console.question("What is your password ?")
        let convertedPassword: string = userPassword.toString()
        //Check for special characters
        var regex = /^[A-Za-z0-9 ]+$/
        var regexCheck = regex.test(convertedPassword);
        if (!regexCheck) {
            console.log("Password cannot include special characters.");
            ChoicesSingletonClass.selection()
        }
        else{
        var newID: number = this._totalNumberofUsers +1;
        var newName: String = userName;
        var newPassword: String = userPassword;
            //Check, if name is already in use
        var usedName = this._userArray.find(x => x.name === newName);
        if(newName == usedName?.name){
            console.log("This Username already exists. Please choose another Username")
        }
        //If not, push new User into the User Array
        else{
        var newUser: User = new User(newName, newID ,newPassword, 0,0,0);
        this._userArray.push(newUser);
        this._totalNumberofUsers++;
        console.log("Registration successfull")
    }
           var newData = this._userArray;
           //Create Json Object
        let newObject = {
            Users: newData,
        };
        //Write Json file
        let data = JSON.stringify(newObject, undefined, 2);
        fs.writeFileSync('RegisteredUsers.json', data);
      this.readUsers();
      ChoicesSingletonClass.selection();
       }
    }

       public async updateUsers(playerID: number, updateAnsweredQuestions: number, updateCorrectlyAnsweredQuestions: number ): Promise<void>{
           //For updating scores etc
           //Add function for unregistered Players
           if(this.currentUser.id != -1){
           var requestedUser = this._userArray.find(x => x.id === playerID);
           if(requestedUser != undefined){
              requestedUser.answeredQuestions = requestedUser.answeredQuestions + updateAnsweredQuestions;
              requestedUser.correctlyAnsweredQuestions = requestedUser.correctlyAnsweredQuestions + updateCorrectlyAnsweredQuestions;
              requestedUser.playedGames++;
           }
           
           var newData = this._userArray;
           //Create Json Object
        let newObject = {
            Users: newData,
        };
        //Write Json file
        let data = JSON.stringify(newObject, undefined, 2);
        fs.writeFileSync('RegisteredUsers.json', data);
     //If there was no User previously, to prevent errors read new json file
      this.readUsers();}
      else{
          this.currentUser.answeredQuestions = this.currentUser.answeredQuestions + updateAnsweredQuestions
          this.currentUser.correctlyAnsweredQuestions = this.currentUser.correctlyAnsweredQuestions + updateCorrectlyAnsweredQuestions
          this.currentUser.playedGames++;
          console.log(this.currentUser.playedGames)
      }
      ChoicesSingletonClass.selection();
       }
       
       public async userLogin(): Promise<void>{ 
           //Sets User status to Logedin for the session
        let userName : String = await Console.question("What is your username ?")
        let userPassword : String = await Console.question("What is your password ?")
        var requestedUser = this._userArray.find(x => x.name === userName);
        if(requestedUser?.password == userPassword){
       // requestedUser.loginStatus = true; 
        this.currentUser = requestedUser;
      //  console.log(this.currentUser)
        console.log("You have sucessfully logged in");
        ChoicesSingletonClass.selection();
    }  
        else{
            console.log("Password or Username incorrect")
            ChoicesSingletonClass.selection();
        }
    ChoicesSingletonClass.selection() 
    } 
    }
    export default UserManagementClass.getInstance();

