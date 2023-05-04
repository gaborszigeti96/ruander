function PhErtek(vizsgaltErtek: number) {
    if (vizsgaltErtek == 7) {
        return "semleges"
    }

    else if (vizsgaltErtek < 7) {
        return "savas"
    }

    else {
        return "lugos"
    }
}

function PrimekSzama(VizsgaltTomb: number[]) {
    let primSzamlalo: number = 0;
    let legnagyobbElem: number = VizsgaltTomb[0];
    for (let i: number = 0; i < VizsgaltTomb.length; i++) {
        if (VizsgaltTomb[i] > legnagyobbElem) {
            legnagyobbElem = VizsgaltTomb[i]
        }
    }
    console.log(legnagyobbElem);
    console.log(VizsgaltTomb);
    for (let i: number = 0; i < VizsgaltTomb.length; i++) {
        let isprime: boolean = true;
        for (let j: number = 2; j < VizsgaltTomb[i]; j++) {
            if (VizsgaltTomb[i] % j == 0) {
                isprime = false;
            }

        }
        if (isprime) {
            primSzamlalo++;
        }
    }

    return primSzamlalo;

}

function MaganHangzokSzama(vizsgaltSzoveg: string) {
    let Maganhangzok: Array<string> = ["a", "e", "i", "o", "ö", "u", "ü", "á", "é", "í", "ó", "ő", "ú", "ű"];
    let maganhagzoSzamlalo: number = 0;
    for (let i: number = 0; i < vizsgaltSzoveg.length; i++) {
        for (let j: number = 0; j < Maganhangzok.length; j++) {
            if (vizsgaltSzoveg[i] == Maganhangzok[j]) {
                maganhagzoSzamlalo++
            }
        }
    }
    return maganhagzoSzamlalo
}