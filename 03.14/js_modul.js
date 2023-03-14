
const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
];

function KockaFelszin(a) {

    return 6 * (a * a)

}

document.write(`${KockaFelszin(2)}`)
document.write(`<br>${KockaFelszin(3)}`)
document.write(`<br>${KockaFelszin(5)}`)
document.write(`<hr>`)

function KockaTerfogat(a) {
    return a * a * a
}
document.write(`${KockaTerfogat(2)}`)
document.write(`<br>${KockaTerfogat(3)}`)
document.write(`<br>${KockaTerfogat(5)}`)
document.write(`<hr>`)

function PhErtek(vizsgaltErtek) {
    if (vizsgaltErtek < 7) {
        return "savas"

    }

    else if (vizsgaltErtek == 7) {
        return "semleges"
    }

    else {
        return "lúgos"
    }


}

document.write(`${PhErtek(9)}`)
document.write(`<br>${PhErtek(5.5)}`)
document.write(`<br>${PhErtek(7)}`)
document.write(`<hr>`)

function ElsoNSzamOsszege(szamokMennyisege) {
    let osszeg = 0;
    for (i = 0; i <= szamokMennyisege; i++) {
        osszeg += i

    }

    return osszeg;

}

document.write(`${ElsoNSzamOsszege(3)}`)
document.write(`<br>${ElsoNSzamOsszege(10)}`)
document.write(`<br>${ElsoNSzamOsszege(21)}`)
document.write(`<hr>`)

function MaxParos(vizsgaltTomb) {
    let legnagyobbParosSzam = 0;
    for (i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] > legnagyobbParosSzam && vizsgaltTomb[i] % 2 == 0) {
            legnagyobbParosSzam = vizsgaltTomb[i]
        }
    }
    return legnagyobbParosSzam
}

document.write(`${MaxParos([12, 3, 7, 19, 21])}`)
document.write(`<br>${MaxParos([28, 14, 2, 42, 69])}`)
document.write(`<br>${MaxParos([32, 21, 54, 33, 21])}`)
document.write(`<hr>`)

function MaganHangzokSzama(vizsgaltSzoveg) {
    let Maganhangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"]
    let MaganhagzokSzama = 0
    for (i = 0; i < vizsgaltSzoveg.length; i++) {
        for (j = 0; j < Maganhangzok.length; j++) {
            if (vizsgaltSzoveg[i] == Maganhangzok[j]) {
                MaganhagzokSzama++
            }
        }
    }

    return MaganhagzokSzama;
}
document.write(`${MaganHangzokSzama("Szeretem a programozás")}`)
document.write(`<br>${MaganHangzokSzama("Géza kék az ég")}`)
document.write(`<br>${MaganHangzokSzama("Répa, retek, mogyoró")}`)
document.write(`<hr>`)

function SzovegVisszafele(szoveg) {
    let szovegVisszafele = ""
    for (i = szoveg.length - 1; i >= 0; i--) {
        szovegVisszafele += szoveg[i]
    }
    return szovegVisszafele;
}
document.write(`${SzovegVisszafele("Szeretem a programozás")}`)
document.write(`<br>${SzovegVisszafele("Géza kék az ég")}`)
document.write(`<br>${SzovegVisszafele("Répa, retek, mogyoró")}`)
document.write(`<hr>`)

function CegAtlagEletkor(vizsgaltObjektum) {
    let eletkorokOsszege = 0
    for (i = 0; i < vizsgaltObjektum.length; i++) {
        eletkorokOsszege += vizsgaltObjektum[i].kor
    }
    return Math.round(eletkorokOsszege / vizsgaltObjektum.length)
}
document.write(`${CegAtlagEletkor(Dolgozok)}`)


