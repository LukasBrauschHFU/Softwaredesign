namespace HelloWorld {
          clock();
       
          function clock(): void {
                
                let time: Date = new Date();
                let hours: number = time.getHours();
                let minutes: number = time.getMinutes();
                let seconds: number  = time.getSeconds();
                console.log("Hello World");
                console.log("Website visited on:", time , hours, ":", minutes, ":", seconds);                
}
}
