"use strict";
var HelloWorld;
(function (HelloWorld) {
    clock();
    function clock() {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        console.log("Hello World");
        console.log("Website visited on:", time, hours, ":", minutes, ":", seconds);
    }
})(HelloWorld || (HelloWorld = {}));
//# sourceMappingURL=Main.js.map