function Rng(alsoHatar, felsoHatar) {
    return (Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
}
console.log(Rng(5, 10));
// 2. 
function TombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        generaltTomb.push(Rng(alsoHatar, felsoHatar));
    }
    return generaltTomb;
}
// 3.
function Duplazo(VizsgaltTomb) {
    var duplaTomb = [];
    for (var i = 0; i < VizsgaltTomb.length; i++) {
        duplaTomb.push(VizsgaltTomb[i] * 2);
    }
    return duplaTomb;
}
// 4.
function PrimekSzama(VizsgaltTomb) {
    var primSzamlalo = 0;
    var legnagyobbElem = VizsgaltTomb[0];
    for (var i = 0; i < VizsgaltTomb.length; i++) {
        if (VizsgaltTomb[i] > legnagyobbElem) {
            legnagyobbElem = VizsgaltTomb[i];
        }
    }
    console.log(legnagyobbElem);
    console.log(VizsgaltTomb);
    for (var i = 0; i < VizsgaltTomb.length; i++) {
        var isprime = true;
        for (var j = 2; j < VizsgaltTomb[i]; j++) {
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
function EgyediElemek(VizsgaltTomb) {
    var egyediElem = 0;
    var egyediTomb = [];
    for (var i = 0; i < VizsgaltTomb.length - 1; i++) {
        var szerepelE = false;
        for (var j = i + 1; j < VizsgaltTomb.length; j++) {
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
