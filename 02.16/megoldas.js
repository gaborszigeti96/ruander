

//Szigeti Gábor #Team 11

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
]
// hosszellenőr
function hosszEllenor(szoveg) {
    if (szoveg.length >= 8) {
        return true;
    } else {
        return false;
    }
}

hosszEllenor("teszt")

//tajszám ellenőr 

function tajSzamEllenor(tajszam) {
    if (tajszam.length == 9) {
        let paros = 0;
        let paratlan = 0;
        for (i = 0; i < tajszam.length; i++) {
            if (i % 2 == 0) {
                paros += parseInt(tajszam[i])
            }

            else {
                paratlan += parseInt(tajszam[i])
            }
        }
        paros = paros * 7;
        paratlan = paratlan * 3;

        if ((paros + paratlan) % 10 == tajszam[8]) {
            return true;
        }

        else {
            return false;
        }
    }

    else {
        return false;
    }
}

document.write(`${tajSzamEllenor("037687210")}`)

//Tömb terjedelem

function tombTerjedelem(tomb) {
    if (tomb.length == 0) {
        return 0;
    }
    let legKisebb = 99999999
    let legNagyobb = -99999999
    for (i = 0; i < tomb.length; i++) {
        if (tomb[i] < legKisebb) {
            legKisebb = tomb[i]
        }

        if (tomb[i] > legNagyobb) {
            legNagyobb = tomb[i]
        }
    }
    return legNagyobb - legKisebb
}
let vizsgaltTomb = [3, 5, 10, 16, 9];
tombTerjedelem(vizsgaltTomb);
document.write(`<br> ${tombTerjedelem(vizsgaltTomb)}`)

//Legidősebb Dolgozó

function legidosebbDolgozo(dolgozok) {
    let maxKor = 0;
    let legNagyobbIndex = 0;
    for (i = 0; i < dolgozok.length; i++) {
        if (dolgozok[i].kor > maxKor) {
            maxKor = dolgozok[i].kor;
            legNagyobbIndex = i
        }
    }
    return legNagyobbIndex;
}

document.write(`<br>${legidosebbDolgozo(Dolgozok)}`)

//Fizetésemelés

function fizetesEmeles(dolgozok) {
    let fizetesekOsszege = 0
    for (i = 0; i < dolgozok.length; i++) {
        fizetesekOsszege += parseInt(dolgozok[i].fizetes);

    }
    let atlag = fizetesekOsszege / dolgozok.length

    let fizetesEmelesUtan = []
    for (i = 0; i < dolgozok.length; i++) {
        let objektum = dolgozok[i]
        if (dolgozok[i].fizetes < atlag) {
            objektum.fizetes = dolgozok[i].fizetes * (atlag * 0.1) + dolgozok[i].fizetes
        }
        fizetesEmelesUtan.push(objektum)
    }
    return fizetesEmelesUtan
}





