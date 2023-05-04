function PhErtek(vizsgaltErtek) {
    if (vizsgaltErtek == 7) {
        return "semleges";
    }
    else if (vizsgaltErtek < 7) {
        return "savas";
    }
    else {
        return "lugos";
    }
}
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
function MaganHangzokSzama(vizsgaltSzoveg) {
    var Maganhangzok = ["a", "e", "i", "o", "ö", "u", "ü", "á", "é", "í", "ó", "ő", "ú", "ű"];
    var maganhagzoSzamlalo = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < Maganhangzok.length; j++) {
            if (vizsgaltSzoveg[i] == Maganhangzok[j]) {
                maganhagzoSzamlalo++;
            }
        }
    }
    return maganhagzoSzamlalo;
}
