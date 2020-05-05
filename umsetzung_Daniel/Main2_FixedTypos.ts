namespace Main2  {
    let s: string = "Die Maus frisst den Käse";
    let s1: string = mirrorWords(s);
    let s1 = mirrorString(s1);
    prompt(s1);
    let s2: string = mirrorWords(s);
    prompt(s2);
    let s3: string = mirrorString(s);
    prompt(s3);

    function mirrorWords(_s: string): string {
        let output: string = "";
        let wordSplit: string = _s.split(" ");
        for (let i: number = wordSplit.length - 1; i >= 0;) {
            output += wordSplit[i];
            i--;
        }
        return output;
    }
    function mirrorString(_s: string): string {
        let output: string = "";
        let sSplit: string = _s.split("");
        for (let i: number = sSplit.length - 1; i >= 0;) {
            output += sSplit[i];
            i--;
        }
        return output;
    }
}
