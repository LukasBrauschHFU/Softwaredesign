import * as readline from 'readline';


class ConsoleRead {
  private static instance : ConsoleRead = new ConsoleRead()

  
  private ConsoleReadLine : readline.ReadLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  constructor() {
    if(ConsoleRead.instance)
      throw new Error("Use ConsoleRead.Instance() instead new ConsoleRead()")
    ConsoleRead.instance = this
  }

  public static getInstance() : ConsoleRead {
    return ConsoleRead.instance
  }

 

  public question(question: String) : Promise<String> {
    let answer : String = "";
    return new Promise((resolve) => {
      this.ConsoleReadLine.question(question.toString(), (_answer: string) => {
        answer = _answer;
        resolve(answer);
      })
    });
  }

  public showPossibilities(showPossibilities : String[], question: String) : Promise<String> {
    this.ConsoleReadLine.write("\n")
    this.ConsoleReadLine.write("Functions you can use: ");
    this.ConsoleReadLine.write("\n\n");
    for(let possibility of showPossibilities) {
      this.ConsoleReadLine.write(possibility.toString());
      this.ConsoleReadLine.write("\n")
    }
    this.ConsoleReadLine.write("\n");

    return new Promise((resolve) => this.ConsoleReadLine.question(question.toString(), (answer: string) => {
      resolve(answer);
    }));
  }

  public printInput(input: string) {
    this.ConsoleReadLine.write(input);
    this.ConsoleReadLine.write("\n");
  }

  public closeConsoleRead() {
    this.ConsoleReadLine.close();
  }
}

export default ConsoleRead.getInstance();