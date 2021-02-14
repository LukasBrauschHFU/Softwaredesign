export var totalNumberofUsers: number = 1;
export var newID: number = 0;
export var newName: string = "0";
export var newPassword: string = "0";
import  ChoicesSingletonClass  from './ChoicesSingleton'


//Todo: Fragen limuitieren auf 10 + evtl Quiznamenlistung in einem neuen Json
// Regular Expression für Passwörter + LoginStatus löschen 
reload();

function reload(): void{
    ChoicesSingletonClass.selection();

}

