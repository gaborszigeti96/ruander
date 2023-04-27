function DiakInfo(nev: string, csoport: number, tipus: boolean) {

    let kiir: string = nev + " Team[0" + csoport + "] - ";
    let type: string;
    if (tipus) {
        type = "Junior Frontend";
    } else {
        type = "Webprogramozó"
    }
    kiir += type;
    return kiir
}

console.log(DiakInfo("Minta Márton", 8, true))

function SzovegesErtekeles(jegy: number): [string, string] {
    let ertekeles: number = jegy;
    let szorgalom: string = "";
    let magatartas: string = "";
    if (ertekeles == 5) {
        szorgalom = "Példás";
        magatartas = "Példás";
        return [szorgalom, magatartas]
    }
    else if (ertekeles == 4) {
        szorgalom = "Jó";
        magatartas = "Jó";
        return [szorgalom, magatartas]
    }
    else if (ertekeles == 3) {
        szorgalom = "Változó";
        magatartas = "Változó";
        return [szorgalom, magatartas]
    }
    else if (ertekeles == 2) {
        szorgalom = "Hanyag";
        magatartas = "Rossz";
        return [szorgalom, magatartas]
    }
    else {
        szorgalom = "Hiba";
        magatartas = "Hiba";
        return [szorgalom, magatartas]
    }
}
console.log(SzovegesErtekeles(2))

function HarommalOszthatokSzama(szamok: number[]) {
    let harommalOszthato: number = 0;
    for (let i: number = 0; i < szamok.length; i++) {
        if (szamok[i] % 3 == 0) {
            harommalOszthato++;
        }
    }
    return harommalOszthato;
}
console.log(HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]))

function Nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let generaltTomb: Array<number> = [];
    let randomSzam: number = generaltTomb[0];
    let i: number = 0;
    while (i < mennyiseg) {
        randomSzam = (Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
        let szerepelE: boolean = false;
        for (let j: number = 0; j < generaltTomb.length; j++) {
            if (generaltTomb[j] == randomSzam) {
                szerepelE = true;
            }
        }
        if (!szerepelE) {
            generaltTomb.push(randomSzam);
            i++;
        }
    }
    return generaltTomb;
}
console.log(Nyeroszamok(5, 1, 90));