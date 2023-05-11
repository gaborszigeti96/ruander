var eredmenyek: string[] = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
];

interface olimpiaElem {
    helyezes: number;
    sportoloSzam: number;
    sportag: string;
    versenyszam: string;
}

function feltolto(feltoltendoElem: string[]): olimpiaElem[] {
    var beolvasottAdatok: olimpiaElem[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let darabolandoSor: string[] = feltoltendoElem[i].split(' ');
        let objektum: olimpiaElem = {
            helyezes: Number(darabolandoSor[0]),
            sportoloSzam: Number(darabolandoSor[1]),
            sportag: String(darabolandoSor[2]),
            versenyszam: String(darabolandoSor[3])
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}

var olimpiaAdatok: olimpiaElem[] = feltolto(eredmenyek);

console.log('Pontszerző helyezések száma:' + olimpiaAdatok.length);

function ermeSzamlalo(adatok: olimpiaElem[]): void {
    let aranyErem: number = 0;
    let ezustErem: number = 0;
    let bronzErem: number = 0;

    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            aranyErem++
        }

        else if (adatok[i].helyezes == 2) {
            ezustErem++
        }

        else if (adatok[i].helyezes == 3) {
            bronzErem++
        }

    }
    let osszesen: number = aranyErem + ezustErem + bronzErem;
    console.log('Arany' + aranyErem + '<br>' + 'Ezüst:' + ezustErem + "<br>" + "Bronz:" + bronzErem)
    console.log("osszesen:" + osszesen)
}

ermeSzamlalo(olimpiaAdatok);


function pontSzamlalo(adatok: olimpiaElem[]): void {
    let osszespont: number = 0;

    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            osszespont += 7;
        }

        else if (adatok[i].helyezes == 2) {
            osszespont += 5;
        }

        else if (adatok[i].helyezes == 3) {
            osszespont += 4;
        }

        else if (adatok[i].helyezes == 4) {
            osszespont += 3;
        }

        else if (adatok[i].helyezes == 5) {
            osszespont += 2;
        }

        else if (adatok[i].helyezes == 6) {
            osszespont += 1;
        }

    }
    console.log(osszespont)
}

pontSzamlalo(olimpiaAdatok);


function legtobbErem(adatok: olimpiaElem[]): void {
    let tornaPont: number = 0;
    let uszasPont: number = 0;

    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].sportag == "uszas") {
            uszasPont += adatok[i].sportoloSzam
        }
        if (adatok[i].sportag == "torna") {
            tornaPont += adatok[i].sportoloSzam
        }

    }

    if (tornaPont > uszasPont) {
        console.log("a torna nyert")
    }

    else if (tornaPont = uszasPont) {
        console.log("dontetlen")
    }

    else {
        console.log("a torna nyert")
    }
}

legtobbErem(olimpiaAdatok);


function legtobbPontszerzo(adatok: olimpiaElem[]): void {
    let legtobbSportoloIndex: number = 0;
    let legtobbSportolo: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].sportoloSzam > legtobbSportolo) {
            legtobbSportolo = adatok[i].sportoloSzam;
            legtobbSportoloIndex = i;
        }
    }

    console.log(adatok[legtobbSportoloIndex])
}

legtobbPontszerzo(olimpiaAdatok)