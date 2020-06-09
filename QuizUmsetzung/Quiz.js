"use strict";
var Main2;
(function (Main2) {
    class Question {
        constructor() {
            this.question = "";
            this.playerPoints = 0;
        }
    }
    class YesNoQuestion extends Question {
        constructor() {
            super(...arguments);
            this.answer = 0;
        }
        askYesNoQuestion() {
            var randomNumber = Math.floor(Math.random());
            var unnötig = yesNoQuestionArray[randomNumber];
            console.log(Question);
            var userInput = prompt("Please enter your answer");
            var userInput2 = parseInt(userInput);
            if (userInput2 == unnötig.answer) {
                //Question.playerPoints + 1;
                console.log("Sehr gut, das war die richtige Antwort");
            }
            else {
                console.log("Das war die falsche Antwort");
            }
        }
        createYesNoQuestion() {
            console.log("Bitte geben Sie eine Frage ein:");
            var tempQuestion = prompt("Please enter your question");
            console.log("Lautet die Antwort auf Ihre Frage(1) Ja oder (2) Nein");
            var tempAnswer = prompt("Please enter your answer");
            var n = 1;
            var questionName = "Question" + n;
            questionName = new Question(tempQuestion, tempAnswer);
            yesNoQuestionArray.push(questionName);
            n = n + 1;
        }
    }
    class ValueQuestion extends Question {
        constructor() {
            super(...arguments);
            this.answer = 0;
        }
        askValueQuestion() {
            var randomNumber = Math.floor(Math.random());
            var unnötig = valueQuestionArray[randomNumber];
            console.log(Question);
            var userInputConvert = prompt("Please enter your answer");
            var userInput = parseInt(userInputConvert);
            if (userInput == unnötig.answer) {
                //Question.playerPoints + 1;
                console.log("Sehr gut, das war die richtige Antwort");
            }
            else {
                console.log("Das war die falsche Antwort");
            }
        }
        createValueQuestion() {
            console.log("Bitte geben Sie eine Frage ein");
            var tempQuestion = prompt("Please enter your question");
            console.log("Bitte geben Sie die Antwort ein");
            var tempAnswer = prompt("Please enter your answer");
            var n = 1;
            var questionName = "Question" + n;
            questionName = new Question(tempQuestion, tempAnswer);
            valueQuestionArray.push(questionName);
            n = n + 1;
        }
    }
    class SingleOrMultipleChoiceQuestion extends Question {
        askSingleOrMultipleChoiceQuestion() {
            var randomNumber = Math.floor(Math.random());
            var unnötig = singleOrMultipleChoiceQuestionArray[randomNumber];
            var allAnswer = [unnötig.rightAnswer, unnötig.falseAnswer];
            console.log(Question + allAnswers);
            var userInputConvert = prompt("Please enter your answer");
            var userInput = parseInt(userInputConvert);
            if (userInput.length == unnötig.rightAnswer.length) {
                var i = 0;
                var j = 0;
                if (j < userInput.length) {
                    if (i < userInput.length) {
                        if (userInput[j] = rightAnswers[i]) {
                            j = j + 1;
                            i = 0;
                        }
                        else {
                            i = i + 1;
                        }
                    }
                    else {
                        console.log("Eine deiner Antworten ist falsch");
                    }
                }
                else {
                    //playerPoints = playerPoints + 1;
                    console.log("Sehr gut, deine Antworten waren richtig");
                }
            }
            else {
                console.log("Die Anzahl deiner angegebenen Antworten stimmt nicht mit den richtigen Antworten überein.");
            }
        }
    }
    class FreeTextQuestion extends Question {
        askFreeTextQuestion() {
            var randomNumber = Math.floor(Math.random());
            var unnötig = freeTextQuestionArray[randomNumber];
            console.log(Question);
            var userInputConvert;
            prompt("Please enter your answer");
            var userInput = userInputConvert;
            userInput.split("");
            if (userInput.length != unnötig.answer.length) {
                console.log("Deine Antwort ist leider falsch");
            }
            else {
                var i = 0;
                if (i < unnötig.answer.length) {
                    if (unnötig.answer[i] == userInput[i]) {
                        i = i + 1;
                    }
                    else {
                        console.log("Deine Antwort ist leider falsch");
                    }
                }
                else {
                    //playerPoints = playerPoints + 1
                    console.log("Sehr gut, das war die richtige Antwort");
                }
            }
        }
        createFreeTextQuestion() {
            console.log("Bitte geben Sie eine Frage ein");
            var tempQuestion;
            prompt("Please enter your question");
            console.log("Bitte geben Sie die Antwort ein");
            var tempAnswer = prompt("Please enter your answer");
            var n = 1;
            var questionName = "Question" + n;
            questionName = new Question(tempQuestion, tempAnswer);
            freeTextQuestionArray.push(questionName);
            n = n + 1;
        }
    }
    let singleOrMultipleChoiceQuestionArray;
    let yesNoQuestionArray;
    let valueQuestionArray;
    let freeTextQuestionArray;
    console.log("Hallo und herzlich Wilkommen zu diesem Quiz! Dein Punktestand beträgt" + Question.playerPoints + "Punkte. Möchten Sie... (1)... das Quiz starten (2)...eine neue Frage erstellen (3)...das Programm beenden. Bitte geben Sie die entsprechende Nummer an ");
    var owo = prompt("Wahl bestätigen");
    var choice = parseInt(owo);
    switch (choice) {
        case 1:
            var selectedQuestion = Math.floor(Math.random() * 4) + 1;
            switch (selectedQuestion) {
                case 1:
                    let myYesNoQuestion = new YesNoQuestion();
                    myYesNoQuestion.askYesNoQuestion();
                    break;
                case 2:
                    let myValueQuestion = new ValueQuestion();
                    myValueQuestion.askValueQuestion();
                    break;
                case 3:
                    let mySingleOrMultipleChoiceQuestion = new SingleOrMultipleChoiceQuestion();
                    mySingleOrMultipleChoiceQuestion.askSingleOrMultipleChoiceQuestion();
                    break;
                case 4:
                    let mycreateFreeTextQuestion = new FreeTextQuestion();
                    mycreateFreeTextQuestion.askFreeTextQuestion();
                    break;
            }
            break;
        case 2:
            console.log("Was für eine Frage möchten sie erstellen? (1) Ja-Nein-Frage(2)Schätzfrage(3)Single- oder MultipleChoice-Frage (4)Freitext-Frage");
            var choiceCreate = prompt("Please enter the type of question you want to create");
            switch (choiceCreate) {
                case "1":
                    let myYesNoQuestion = new YesNoQuestion();
                    myYesNoQuestion.createYesNoQuestion();
                    break;
                case "2":
                    let myValueQuestion = new ValueQuestion();
                    myValueQuestion.createValueQuestion();
                    break;
                case "3":
                    let mySingleOrMultipleChoiceQuestion = new SingleOrMultipleChoiceQuestion();
                    mySingleOrMultipleChoiceQuestion.createSingleOrMutltipleChoiceQuestion();
                    break;
                case "4":
                    let mycreateFreeTextQuestion = new FreeTextQuestion();
                    mycreateFreeTextQuestion.createFreeTextQuestion();
                    break;
            }
            break;
        case 3:
            break;
    }
})(Main2 || (Main2 = {}));
//# sourceMappingURL=Quiz.js.map