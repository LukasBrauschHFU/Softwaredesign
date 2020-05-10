"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subjects = ["Harry", "Hermine"];
    let verbs = ["braut", "liebt"];
    let objects = ["Zaubertränke", "den Grimm"];
    let verses;
    let i = 0;
    if (subjects.length != 0 || verbs.length != 0 || objects.length != 0) {
        let newverse = getVerse();
        verses.splice(i, 0, newverse);
        console.log(verses[i]);
        i++;
    }
    else {
        console.log(verses[i]);
    }
    function getVerse() {
        let newverse;
        let picker = Math.floor(Math.random() * subjects.length - 1); //random Index between 0 and subjects.length-1; 
        newverse = subjects.splice(picker, 1);
        picker = Math.floor(Math.random() * verbs.length - 1); //random Index between 0 and verbs.length-1;
        let newVerse = newverse + " " + verbs.splice(picker, 1);
        picker = Math.floor(Math.random() * verbs.length - 1); //random Index between 0 and objects.length-1;
        newVerse = newverse + " " + objects.splice(picker, 1);
        return newverse;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=main.js.map