import ChoicesSingleton from './ChoicesSingleton';
import UserManagementClass from './UserManagement';

var umc = UserManagementClass;

export function readScore(): void {
 console.log("Answered Questions: " + umc.currentUser.answeredQuestions + "\n" + "Correctly answered Questions: " + + umc.currentUser.correctlyAnsweredQuestions + "\n" + "Played games: " + umc.currentUser.playedGames + "\n");
 console.log("Quota: " + (100-(umc.currentUser.answeredQuestions - umc.currentUser.correctlyAnsweredQuestions)/umc.currentUser.answeredQuestions*100) + "%")
 ChoicesSingleton.selection();
} 

