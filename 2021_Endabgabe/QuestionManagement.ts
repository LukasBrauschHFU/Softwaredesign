import { Question, QuestionFactory } from './QuestionFactory';
import {SelectionQuestion} from './SelectionQuestion';
import { TextQuestion } from './TextQuestion';
import { NumberQuestion } from './NumberQuestion';
import ConsoleHandling from '../bac/classes/ConsoleHandling';
//const readline = require('readline');
const fs = require('fs');


class QuestionManagementClasss {

    private static _instance:QuestionManagementClasss = new QuestionManagementClasss();

    public _selectionQuestionArray: SelectionQuestion[] = [];  
    public _numberQuestionArray: NumberQuestion[] = [];  
    public _textQuestionArray: TextQuestion[] = [];  
    
    public _totalNumberSelection: number = 0;
    public _totalNumberNumber: number = 0;
    public _totalNumberText: number = 0;
    public _totalNumberAllQuestions: number = 0;
    public _quizCreator: number = 0;
    public _isPublic: boolean = false;
   

    constructor() {
        if(QuestionManagementClasss._instance){
            throw new Error("Error: Instantiation failed: Use QuestionManagementClasss.getInstance() instead of new.");
        }
        QuestionManagementClasss._instance = this;
    }

    public static getInstance():QuestionManagementClasss
    {
        return QuestionManagementClasss._instance;
    }
   
    //Read Users from json und put them into an Array
    
    public readQuestions(Title: String):void
    {//Reset Question Arrays
      this._selectionQuestionArray = [];
      this._numberQuestionArray = [];
      this._textQuestionArray = [];
     var filename: string = Title + ".json"
     let rawdata = fs.readFileSync(filename);
     let question = JSON.parse(rawdata);   
     //Reset number of users in case the number was modified before 
     this._totalNumberSelection = 0;
     this._totalNumberNumber = 0;
     this._totalNumberText = 0;
    // console.log(question)
     //As long as users exist in the json file, push them into the User array

     for(let j: number = 0; question.SelectionQuestions[j] != undefined ; j++){ 
     //Raise totalNumberofquestions     
     this._totalNumberSelection++;
     var readID = question.SelectionQuestions[j].id;
     var readQuestionString = question.SelectionQuestions[j].questionString ;
     var readCorrectAnswer =question.SelectionQuestions[j].correctAnswer ;
     var readWrongAnswer1 = question.SelectionQuestions[j].wrongAnswer1;
     var readWrongAnswer2 = question.SelectionQuestions[j].wrongAnswer2;
     var readWrongAnswer3 = question.SelectionQuestions[j].wrongAnswer3;
     var readAmountQuestions = question.SelectionQuestions[j].amountAnswers;
  //   console.log(readCorrectAnswer)
     let existingQuestion: any = QuestionFactory.create('SelectionQuestion', readQuestionString, readID, readCorrectAnswer, readWrongAnswer1, readWrongAnswer2, readWrongAnswer3, readAmountQuestions,);
   //  console.log(existingUser);
     this._selectionQuestionArray.push(existingQuestion);
    // console.log(this._totalNumberofUsers)
  //  var testfind = this._selectionQuestionArray.find(id => id = 1);
  //  console.log("Right answer is " + testfind?.correctAnswer);
    }

    for(let j: number = 0; question.NumberQuestions[j] != undefined ; j++){ 
        //Raise totalNumberofquestions     
        this._totalNumberNumber++;
        var readID = question.NumberQuestions[j].id;
        var readQuestionString = question.NumberQuestions[j].questionString ;
        var readCorrectAnswer = question.NumberQuestions[j].correctAnswer ;
        let existingUser: any = QuestionFactory.create('NumberQuestion', readQuestionString, readID, readCorrectAnswer, "", "", "", 0, );
      //  console.log(newUser.name);
        this._numberQuestionArray.push(existingUser);
    //    console.log(this._totalNumberofUsers)
       }

    for(let j: number = 0; question.TextQuestions[j] != undefined ; j++){ 
        //Raise totalNumberofquestions     
        this._totalNumberText++;
        var readID = question.TextQuestions[j].id;
        var readQuestionString = question.TextQuestions[j].questionString ;
        var readCorrectAnswer =question.TextQuestions[j].correctAnswer ;
        let existingUser: any = QuestionFactory.create('TextQuestion', readQuestionString, readID, readCorrectAnswer, "", "", "", 0, );
      //  console.log(newUser.name);
        this._textQuestionArray.push(existingUser);
     //   console.log(this._totalNumberofUsers)
   //    console.log(this._numberQuestionArray[1]);
       }
       this._totalNumberAllQuestions = question.amountQuizQuestions //Hier nochmal schauen
       this._quizCreator = question.OwnerID;
      // console.log("This question is " + question.IsPublic)
       this._isPublic = question.IsPublic
      // console.log("This creator number is" + this._quizCreator)
   
    }
    
    //Write User Array into Json
    //Save your quiz, choose your name
    public importQuestions(questionObject: any, questionType: string):void{  
    //Import Questions into their arrays
     if (questionType ==="SelectionQuestion"){
         this._selectionQuestionArray.push(questionObject);
         this._totalNumberSelection++;
     }
    else if (questionType ==="NumberQuestion"){
        this._numberQuestionArray.push(questionObject);
        this._totalNumberNumber++;
    }
    else if (questionType === "TextQuestion"){
        this._textQuestionArray.push(questionObject);
        this._totalNumberText++;
    }
        console.log("Question added successfully")
       }   

   public writeFinalQuestions(isPublic: boolean, OwnerID: number, Title: String, amountQuizQuestions: number):void{     
      //Title = Der Dateiname und Quizname
        var filename: string = Title + ".json"//Console input here   
        var newSelectionData = this._selectionQuestionArray;
        var newNumberData = this._numberQuestionArray;
        var newTextData = this._textQuestionArray;
           //Create Json Object
        let newObject = {
            SelectionQuestions: newSelectionData,
            NumberQuestions: newNumberData,
            TextQuestions: newTextData,
            IsPublic: isPublic,
            OwnerID: OwnerID,
            amountQuizQuestions: amountQuizQuestions,
        };
        //Write Json file
      
        let data = JSON.stringify(newObject, undefined, 2);
        fs.writeFileSync(filename, data);
        
       }  
    }
    export default QuestionManagementClasss.getInstance();

