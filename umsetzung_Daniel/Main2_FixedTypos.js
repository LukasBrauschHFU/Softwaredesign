"use strict";
var Main2;
(function (Main2) {
    let s = "Die Maus frisst den Käse";
    let s1 = mirrorWords(s);
    let s1 = mirrorString(s1);
    prompt(s1);
    let s2 = mirrorWords(s);
    prompt(s2);
    let s3 = mirrorString(s);
    prompt(s3);
    function mirrorWords(_s) {
        let output = "";
        let wordSplit = _s.split(" ");
        for (let i = wordSplit.length - 1; i >= 0;) {
            output += wordSplit[i];
            i--;
        }
        return output;
    }
    function mirrorString(_s) {
        let output = "";
        let sSplit = _s.split("");
        for (let i = sSplit.length - 1; i >= 0;) {
            output += sSplit[i];
            i--;
        }
        return output;
    }
})(Main2 || (Main2 = {}));
//# sourceMappingURL=Main2_FixedTypos.js.map