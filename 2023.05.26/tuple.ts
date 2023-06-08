var tupleminta: [string, number]; //név életkor pl
tupleminta = ["Kis józsef", 21];

var tupleminta2 = ["Nagy Katalin", 18];
console.log(tupleminta[0]);
console.log(tupleminta[1]);
console.log(tupleminta2[0]);
console.log(tupleminta2[1]);

//
function NegyzetKeruletTerulet(aOldal: number): [number, number] {
    let kerulet = aOldal * 4;
    let terulet = aOldal * aOldal;


    return [kerulet, terulet];
}

var eredmeny: [number, number] = NegyzetKeruletTerulet(3);
console.log(eredmeny[0] + "és" + eredmeny[1]);

//

function TombFeltolto(meret: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let generaltTomb: Array<number> = [];
    for (let i: number = 0; i < meret; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return generaltTomb;
}
var vizsgaltTomb: number[] = TombFeltolto(6, 1, 20);
console.log(vizsgaltTomb);
//

function MaximumKereses(vizsgaltTomb: number[]): [number, number] {
    let maxErtek: number = vizsgaltTomb[0];
    let maxIndex: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] > maxErtek) {
            maxErtek = vizsgaltTomb[i]
            maxIndex = i;
        }
    }

    return [maxErtek, maxIndex]
}

var maxEredmeny: number[] = MaximumKereses(vizsgaltTomb)

console.log(maxEredmeny)

////////////////////////////////////////////////////////

function Masodfoku(a: number, b: number, c: number): [number, number] {
    let x1: number = 0;
    let x2: number = 0;
    if (a == 0) {
        console.log("Az A érték nem lehet nulla")
    }

    else {
        let d = b * b - 4 * a * c

        if (d >= 0) {
            x1 = (-b + Math.sqrt(d)) / 2 / a
            x2 = (-b - Math.sqrt(d)) / 2 / a
        }
        else {
            console.log("Nem valós szám")
        }


    }

    return [x1, x2]
}

console.log(Masodfoku(5, 9, 2));
console.log(Masodfoku(1, 1, 1));
console.log(Masodfoku(7, 10, 3));
console.log(Masodfoku(0, 10, 3));

function Fibonacci(range: number): number[] {
    let sequence: number[] = [0, 1]
    for (let i: number = 1; i < range; i++) {

        sequence.push(sequence[i] + sequence[i - 1])

    }
    return sequence
}

console.log(Fibonacci(10));

function Palidrome(text: string): boolean {
    let same: boolean = false
    let textbackward: string = "";
    for (let i: number = text.length - 1; i >= 0; i--) {
        textbackward += text[i]

    }
    if (textbackward == text) {
        same = true;
    }
    console.log(textbackward)
    return same;
}

console.log(Palidrome("alma"));
console.log(Palidrome("aza aza aza"));
console.log(Palidrome("aza"));

function SumArr(numbers: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum;
}
let sumnumbers: number[] = [5, 10, 5, 10, 5]
console.log(SumArr(sumnumbers));
////////////////////////////////////////////////////////

function Titlecase(text: string): string {
    return text.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

console.log(Titlecase("Elment a lidinéni a vásárba csuhajja"))

function Sorting(numbers: number[]): number[] {
    return numbers.sort(function (a, b) { return a - b });


}

console.log(Sorting(sumnumbers))
///

function factorial(x: number): number {
    if (x == 0 || x == 1) {
        return 1;
    }

    else {
        return x * factorial(x - 1);
    }
}

console.log(factorial(5))

///////////////////////////////////////
function EkezetesBetukSzama(modositandoSzoveg: string) {
    let ekezetesBetuk: string[] = ["á", "Á", "ű", "Ű", "é", "É", "i", "I", "í", "Í", "ő", "Ő", "ú", "Ú", "ö", "Ö", "ü", "Ü", "ó", "Ó"]
    let ekezetesbetukSz: number = 0;
    for (let i: number = 0; i < modositandoSzoveg.length; i++) {
        for (let j: number = 0; j < ekezetesBetuk.length; j++) {
            if (modositandoSzoveg[i] == ekezetesBetuk[j]) {
                ekezetesbetukSz++
            }
        }
    }
    console.log(ekezetesbetukSz)
}
EkezetesBetukSzama("aladáréű");

/////////////////////////////////
function camelCaseGenerator(modositandoSzoveg: string) {

    return modositandoSzoveg.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');

}

console.log(camelCaseGenerator("elment a lidineni a vasarba"));
//////////////////////////////////////////////
function Rng(alsoHatar: number, felsoHatar: number): number {
    return Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
}

////////////////////////////////////////////////////////////////////////////////////////


function TombGenerator(meret: number, alsoHatar: number, felsoHatar: number): number[] {
    var tomb: number[] = [];
    for (let i: number = 0; i < meret; i++) {
        tomb.push(Rng(alsoHatar, felsoHatar));
    }
    return tomb;
}

////////////////////////////////////////////////////////////////////////////////////////////
function Duplazo(vizsgaltTomb: number[]): number[] {
    var duplazottTomb: number[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        duplazottTomb.push(vizsgaltTomb[i] * 2);
    }
    return duplazottTomb;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function PrimekSzama(vizsgaltTomb: number[]): number {
    let primekSzama: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let osztokSzama: number = 0;
        for (let j: number = 1; j <= vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
        }
        if (osztokSzama == 2) {
            primekSzama++;
        }
    }
    return primekSzama;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function EgyediElemek(vizsgaltTomb: number[]): number[] {
    let egyediElemekTomb: number[] = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let szerepelE: boolean = false;
        for (let j = 0; j < egyediElemekTomb.length; j++) {
            if (vizsgaltTomb[i] == egyediElemekTomb[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            egyediElemekTomb.push(vizsgaltTomb[i]);
        }
    }
    return egyediElemekTomb;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MaganHangzokSzama(vizsgaltSzoveg: string): number {
    const maganHangzok: string[] = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "U", "Ú", "Ü", "Ű"];
    var maganHangzokMennyisege: number = 0;
    for (let i: number = 0; i < vizsgaltSzoveg.length; i++) {
        for (let j: number = 0; j < maganHangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganHangzok[j]) {
                maganHangzokMennyisege++;
            }
        }
    }
    return maganHangzokMennyisege;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function PrimLista(vizsgaltTomb: number[]): any {
    let primekListaja: number[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let oszto: number = 0;
        for (let j = 1; j <= vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                oszto++;
            }
        }
        if (oszto == 2) {
            primekListaja.push(vizsgaltTomb[i]);
        }
        else { }
    }
    if (primekListaja.length == 0) {
        return "Nincs prímszám a tömbben";
    }
    else {
        return primekListaja.toString();
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
