namespace Zufallsgedicht {
    let subjects: string[] = ["Harry", "Hermine"];
    let verbs: string[] = ["braut", "liebt"];
    let objects: string[] = ["Zaubertränke", "den Grimm"];
    let verses: string[] = [""];
    let i: number = 0;
    if (subjects.length != 0 || verbs.length != 0 || objects.length != 0) {
        verses.push(getVerse());
        console.log(verses[i]);
        i++;
    }
    else {
        console.log(verses[i]); 
    }


    function getVerse(): string {
        let newverse: string[];
        let picker: number = Math.floor(Math.random() * subjects.length - 1); //random Index between 0 and subjects.length-1; 

        newverse = subjects.splice(picker, 1);

        picker = Math.floor(Math.random() * verbs.length - 1); //random Index between 0 and verbs.length-1;

        let  newVerse = newverse + " " + verbs.splice(picker, 1);
        picker = Math.floor(Math.random() * verbs.length - 1); //random Index between 0 and objects.length-1;
        newVerse = newverse + " " + objects.splice(picker, 1);

        return newVerse;
    }

}