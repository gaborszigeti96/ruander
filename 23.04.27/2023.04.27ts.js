function DiakInfo(nev, csoport, tipus) {
    var kiir = nev + " Team[0" + csoport + "] - ";
    var type;
    if (tipus) {
        type = "Junior Frontend";
    }
    else {
        type = "Webprogramozó";
    }
    kiir += type;
    return kiir;
}
console.log(DiakInfo("Minta Márton", 8, true));
function SzovegesErtekeles(jegy) {
    var ertekeles = jegy;
    var szorgalom = "";
    var magatartas = "";
    if (ertekeles == 5) {
        szorgalom = "Példás";
        magatartas = "Példás";
        return [szorgalom, magatartas];
    }
    else if (ertekeles == 4) {
        szorgalom = "Jó";
        magatartas = "Jó";
        return [szorgalom, magatartas];
    }
    else if (ertekeles == 3) {
        szorgalom = "Változó";
        magatartas = "Változó";
        return [szorgalom, magatartas];
    }
    else if (ertekeles == 2) {
        szorgalom = "Hanyag";
        magatartas = "Rossz";
        return [szorgalom, magatartas];
    }
    else {
        szorgalom = "Hiba";
        magatartas = "Hiba";
        return [szorgalom, magatartas];
    }
}
console.log(SzovegesErtekeles(2));
function HarommalOszthatokSzama(szamok) {
    var harommalOszthato = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 3 == 0) {
            harommalOszthato++;
        }
    }
    return harommalOszthato;
}
console.log(HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    var randomSzam = generaltTomb[0];
    var i = 0;
    while (i < mennyiseg) {
        randomSzam = (Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
        var szerepelE = false;
        for (var j = 0; j < generaltTomb.length; j++) {
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
