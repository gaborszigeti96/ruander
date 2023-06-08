function Rng(alsoHatar: number, felsoHatar: number) {
    return (Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
}

console.log(Rng(5, 10))

// 2. 

function TombGenerator(meret: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let generaltTomb: Array<number> = [];
    for (let i: number = 0; i < meret; i++) {
        generaltTomb.push(Rng(alsoHatar, felsoHatar));
    }
    return generaltTomb;
}



// 3.
function Duplazo(VizsgaltTomb: number[]) {
    let duplaTomb: number[] = [];
    for (let i: number = 0; i < VizsgaltTomb.length; i++) {
        duplaTomb.push(VizsgaltTomb[i] * 2)

    }

    return duplaTomb;

}

// 4.
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

//5.
function EgyediElemek(VizsgaltTomb: number[]) {
    let egyediElem: Number = 0;
    let egyediTomb: number[] = [];
    for (let i: number = 0; i < VizsgaltTomb.length - 1; i++) {
        let szerepelE: boolean = false;
        for (let j: number = i + 1; j < VizsgaltTomb.length; j++) {
            if (VizsgaltTomb[j] == VizsgaltTomb[i]) {
                szerepelE = true;

            }
        }

        if (!szerepelE) {
            egyediTomb.push(VizsgaltTomb[i]);
        }
    }

    return egyediTomb;
}