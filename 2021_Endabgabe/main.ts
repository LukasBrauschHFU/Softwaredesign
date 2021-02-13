export var totalNumberofUsers: number = 1;
export var newID: number = 0;
export var newName: string = "0";
export var newPassword: string = "0";
import { User } from './User';
import UserManagementClass  from './UserManagement';
import QuestionManagementClass  from './QuestionManagement';
import {Question, QuestionFactory} from './QuestionFactory'
import  ChoicesSingleton  from './ChoicesSingleton'
import { SelectionQuestion } from './SelectionQuestion';
import { createQuiz } from './QuizCreation';
import Console from './ConsoleRead';
import { MovieDatabase} from './MovieDatabase';
import { waitForDebugger } from 'inspector';
import { sortAndDeduplicateDiagnostics } from 'typescript';
//const readline = require('readline');
//const fs = require('fs');

//let jsonData = require('./student.json');
//let Users = require('./Users');
//var myClass = new Users.MyNameSpace.Enemy

//Todo: Fragen limuitieren auf 10 + evtl Quiznamenlistung in einem neuen Json

reload();

function reload(): void{
    ChoicesSingleton.selection();

}

