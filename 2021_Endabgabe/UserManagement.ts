import { totalNumberofUsers } from '../bac/main';
import { User } from './User';
const readline = require('readline');
const fs = require('fs');

class UserManagementClass {

    private static _instance:UserManagementClass = new UserManagementClass();

    private _userArray: User[] = [];  

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
    public readUsers():void
    {
     let rawdata = fs.readFileSync('student-2.json');
     let student = JSON.parse(rawdata);   
     //Reset number of users in case the number was modified before 
     this._totalNumberofUsers = 0;
     //As long as users exist in the json file, push them into the User array
     for(let j: number = 0; student.Users[j] != undefined ; j++){ 
     //Raise totalNumberofStudents     
     this._totalNumberofUsers++;
     var readID = student.Users[j].id;
     var readName = student.Users[j].name ;
     var readPassword =student.Users[j].password ;
     let existingUser: User = new User(readName, readID , readPassword );
   //  console.log(newUser.name);
     this._userArray.push(existingUser);
     console.log(this._totalNumberofUsers)
    }
    }
    
    //Write User Array into Json
    public writeUsers(userName: string, userPassword: string):void
    {    //Hier nochmal schauen, ob das so geht, wegen Vaariablen, ansonsten halt mit import vaariablen oder hier einen input
        var newID: number = this._totalNumberofUsers +1;
        var newName: string = userName;
        var newPassword: string = userPassword;
            //Check, if name is already in use
        var usedName = this._userArray.find(x => x.name === newName);
      //console.log(usedName?.name)
        if(newName == usedName?.name){
            console.log("This Username already exists. Please choose another Username")
        }
        //If not, push new User into the User Array
        else{
        var newUser: User = new User(newName, newID ,newPassword);
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
        fs.writeFileSync('student-2.json', data);
     
       }  
       public userLogin(nameUser: string, passwordUser: string):void
    { //Sets User status to Logedin for the session
        var requestedName = this._userArray.find(x => x.name === nameUser);
        if(requestedName?.password == passwordUser){
        requestedName?.loginStatus = true;
        console.log("You have sucessfully logged in");
    }  
        else{
            console.log("Password or Username incorrect")
        }
    //    console.log(usedName)
        console.log(this._userArray)
    } 
    }
    export default UserManagementClass.getInstance();

