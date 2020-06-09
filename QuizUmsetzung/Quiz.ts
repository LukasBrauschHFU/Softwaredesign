namespace Main2 {


  class Question {
    public question: string = "";
    public playerPoints: number = 0;
  }

  class YesNoQuestion extends Question {
    public answer: number = 0;
    askYesNoQuestion(): void {
      var randomNumber: number = Math.floor(Math.random());
      var filler: YesNoQuestion = yesNoQuestionArray[randomNumber];
      console.log(Question);
      var userInput: string | null = prompt("Please enter your answer");
      var userInput2: number = parseInt(userInput!);
      if (userInput2 == filler.answer) {
        //Question.playerPoints + 1;
        console.log("Sehr gut, das war die richtige Antwort");
      }
      else {
        console.log("Das war die falsche Antwort");
      }
    }
    createYesNoQuestion(): void {
      console.log("Bitte geben Sie eine Frage ein:");
      var tempQuestion: String | null = prompt("Please enter your question");
      console.log("Lautet die Antwort auf Ihre Frage(1) Ja oder (2) Nein");
      var tempAnswer: String | null = prompt("Please enter your answer");
      var n: number = 1;
      var questionName: string = "Question" + n;
      questionName = new Question(tempQuestion, tempAnswer);
      yesNoQuestionArray.push(questionName);
      n = n + 1;
    }
  }

  class ValueQuestion extends Question {
    answer: number = 0;
    askValueQuestion(): void {
      var randomNumber: number = Math.floor(Math.random());
      var filler: ValueQuestion = valueQuestionArray[randomNumber];
      console.log(Question);
      var userInputConvert: string | null = prompt("Please enter your answer");
      var userInput: number = parseInt(userInputConvert!);
      if (userInput == filler.answer) {
        //Question.playerPoints + 1;
        console.log("Sehr gut, das war die richtige Antwort");
      }
      else {
        console.log("Das war die falsche Antwort");
      }
    }
    createValueQuestion(): void {
      console.log("Bitte geben Sie eine Frage ein");
      var tempQuestion: String | null = prompt("Please enter your question");
      console.log("Bitte geben Sie die Antwort ein");
      var tempAnswer: String | null = prompt("Please enter your answer");
      var n: number = 1;
      var questionName: string = "Question" + n;
      questionName = new Question(tempQuestion, tempAnswer);
      valueQuestionArray.push(questionName);
      n = n + 1;
    }}

  class SingleOrMultipleChoiceQuestion extends Question {
    rightAnswer: string[];
    falseAnswer: string[];
    askSingleOrMultipleChoiceQuestion(): void {
      var randomNumber: number = Math.floor(Math.random());
      var filler: SingleOrMultipleChoiceQuestion = singleOrMultipleChoiceQuestionArray[randomNumber];
      var allAnswer: String[] = [filler.rightAnswer, filler.falseAnswer];
      console.log(Question + allAnswers);
      var userInputConvert: string | null = prompt("Please enter your answer");
      var userInput: number[] = parseInt(userInputConvert!);
      if (userInput.length == filler.rightAnswer.length) {
        var i: number = 0;
        var j: number = 0;
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
  
    createSingleOrMutltipleChoiceQuestion();
  }

  class FreeTextQuestion extends Question {
    answer: string;
    askFreeTextQuestion(): void {
      var randomNumber: number = Math.floor(Math.random());
      var filler: FreeTextQuestion = freeTextQuestionArray[randomNumber];
      console.log(Question);
      var userInputConvert: string | null; = prompt("Please enter your answer");
      var userInput: string = userInputConvert!;
      userInput.split("");
      if (userInput.length != filler.answer.length) {
        console.log("Deine Antwort ist leider falsch");
      }
      else {
        var i: number = 0;
        if (i < filler.answer.length) {
          if (filler.answer[i] == userInput[i]) {
            i = i + 1;
          }
          else {
            console.log("Deine Antwort ist leider falsch");
          }
        } else {
          //playerPoints = playerPoints + 1
          console.log("Sehr gut, das war die richtige Antwort");
        }
      }
    }
  
createFreeTextQuestion(): void {
  console.log("Bitte geben Sie eine Frage ein");
  var tempQuestion: String | null; = prompt("Please enter your question");
  console.log("Bitte geben Sie die Antwort ein");
  var tempAnswer: String | null = prompt("Please enter your answer");
  var n: number = 1;
  var questionName: string = "Question" + n;
  questionName = new Question(tempQuestion, tempAnswer);
  freeTextQuestionArray.push(questionName);
  n = n + 1;
}
  }
  let singleOrMultipleChoiceQuestionArray: SingleOrMultipleChoiceQuestion[];
  let yesNoQuestionArray: YesNoQuestion[];
  let valueQuestionArray: ValueQuestion[];
  let freeTextQuestionArray: FreeTextQuestion[];

  console.log("Hallo und herzlich Wilkommen zu diesem Quiz! Dein Punktestand beträgt" + Question.playerPoints + "Punkte. Möchten Sie... (1)... das Quiz starten (2)...eine neue Frage erstellen (3)...das Programm beenden. Bitte geben Sie die entsprechende Nummer an ");
  var owo: string | null = prompt("Wahl bestätigen");
  var choice: number = parseInt(owo!);
  switch (choice) {
    case 1:
      var selectedQuestion: number = Math.floor(Math.random() * 4) + 1;
      switch (selectedQuestion) {
        case 1:
          let myYesNoQuestion: YesNoQuestion = new YesNoQuestion();
          myYesNoQuestion.askYesNoQuestion();
          break;
        case 2:
          let myValueQuestion: ValueQuestion = new ValueQuestion();
          myValueQuestion.askValueQuestion();
          break;
        case 3:
          let mySingleOrMultipleChoiceQuestion: SingleOrMultipleChoiceQuestion = new SingleOrMultipleChoiceQuestion();
          mySingleOrMultipleChoiceQuestion.askSingleOrMultipleChoiceQuestion();
          break;
        case 4:
          let mycreateFreeTextQuestion: FreeTextQuestion = new FreeTextQuestion();
          mycreateFreeTextQuestion.askFreeTextQuestion();
          break;
      }
      break;

    case 2:
      console.log("Was für eine Frage möchten sie erstellen? (1) Ja-Nein-Frage(2)Schätzfrage(3)Single- oder MultipleChoice-Frage (4)Freitext-Frage");

      var choiceCreate: string | null = prompt("Please enter the type of question you want to create");

      switch (choiceCreate) {
        case "1":
          let myYesNoQuestion: YesNoQuestion = new YesNoQuestion();
          myYesNoQuestion.createYesNoQuestion();
          break;
        case "2":
          let myValueQuestion: ValueQuestion = new ValueQuestion();
          myValueQuestion.createValueQuestion();
          break;
        case "3":
          let mySingleOrMultipleChoiceQuestion: SingleOrMultipleChoiceQuestion = new SingleOrMultipleChoiceQuestion();
          mySingleOrMultipleChoiceQuestion.createSingleOrMutltipleChoiceQuestion();
          break;
        case "4":
          let mycreateFreeTextQuestion: FreeTextQuestion = new FreeTextQuestion();
          mycreateFreeTextQuestion.createFreeTextQuestion();
          break;
      }
      break;
    case 3:
      break;

  }
}