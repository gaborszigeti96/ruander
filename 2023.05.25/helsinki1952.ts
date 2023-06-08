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


interface eredmeny {
    helyezes: number;
    meret: number;
    sportag: string;
    versenySzam: string;
}

function ObjektumFeltolto(feltoltendoElem: string[]): eredmeny[] {
    var beolvasottAdatok: eredmeny[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let elemDarabok: string[] = feltoltendoElem[i].split(" ");
        let objektum: eredmeny = {
            helyezes: Number(elemDarabok[0]),
            meret: Number(elemDarabok[1]),
            sportag: elemDarabok[2],
            versenySzam: elemDarabok[3]
        }
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}

var helsinki: eredmeny[] = ObjektumFeltolto(eredmenyek);
//Feltöltés visszaellenőrzése
function AdatKiir(adatok: eredmeny[]): void {
    for (let i: number = 0; i < adatok.length; i++) {
        console.log(adatok[i].helyezes + "-" + adatok[i].meret + "-" + adatok[i].sportag + "-" + adatok[i].versenySzam);
    }
}
//AdatKiir(helsinki);
function PontszerzoHelyekSzama(adatok: eredmeny[]): number {
    return adatok.length;
}

function PontszerzoHelyekSzamaKiir(helyekSzama: number): void {
    console.log("3. feladat:");
    console.log("Pontszerző helyezések száma: " + helyekSzama);
}
PontszerzoHelyekSzamaKiir(PontszerzoHelyekSzama(helsinki));

function ErmekSzama(adatok: eredmeny[]): [number, number, number, number] {
    let arany: number = 0;
    let ezust: number = 0;
    let bronz: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            arany++;
        }
        else if (adatok[i].helyezes == 2) {
            ezust++;
        }
        else if (adatok[i].helyezes == 3) {
            bronz++;
        }
        else { }
    }
    return [arany, ezust, bronz, arany + ezust + bronz];
}

function ErmekSzamaKiir(eremMennyiseg: [number, number, number, number]): void {
    console.log("4. feladat:");
    console.log("Arany: " + eremMennyiseg[0]);
    console.log("Ezust: " + eremMennyiseg[1]);
    console.log("Bronz: " + eremMennyiseg[2]);
    console.log("Összesen: " + eremMennyiseg[3]);
}
ErmekSzamaKiir(ErmekSzama(helsinki));

function SzerzettPont(adatok: eredmeny[]): number {
    let osszPont: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            osszPont += 7;
        }
        else if (adatok[i].helyezes == 2) {
            osszPont += 5;
        }
        else if (adatok[i].helyezes == 3) {
            osszPont += 4;
        }
        else if (adatok[i].helyezes == 4) {
            osszPont += 3;
        }
        else if (adatok[i].helyezes == 5) {
            osszPont += 2;
        }
        else if (adatok[i].helyezes == 6) {
            osszPont += 1;
        }
        else { }
    }
    return osszPont;
}
function SzerzettPontKiir(osszesPont: number): void {
    console.log("5. feladat:")
    console.log("Olimpiai pontok száma: " + osszesPont);
}
SzerzettPontKiir(SzerzettPont(helsinki));

//Megoldas by Jáger Adri
function OlimpiaiPontok(adatTomb: eredmeny[]): string {
    var osszegzoTomb: number[] = [0, 7, 5, 4, 3, 2, 1];
    adatTomb.forEach((item) => {
        osszegzoTomb[0] = osszegzoTomb[0] + osszegzoTomb[item.helyezes];
    })
    return `5.feladat: \n Olimpiai pontok száma: ${osszegzoTomb[0]}`;

}
console.log(OlimpiaiPontok(helsinki) + "");
//Extra megoldás vége


function TornaVsUszas(adatok: eredmeny[]): string {
    let torna: number = 0;
    let uszas: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].sportag == "torna" && adatok[i].helyezes <= 3) {
            torna++;
        }
        else if (adatok[i].sportag == "uszas" && adatok[i].helyezes <= 3) {
            uszas++;
        }
        else { }
    }
    if (uszas > torna) {
        return "uszas";
    }
    else if (torna > uszas) {
        return "torna";
    }
    else {
        return "egyenlo";
    }
}
function TornaVsUszasKiir(gyakoribb: string): void {
    console.log("6. feladat:")
    if (gyakoribb == "torna") {
        console.log("Torna sportágban szereztek több érmet");
    }
    else if (gyakoribb == "uszas") {
        console.log("Úszás sportágban szereztek több érmet");
    }
    else {
        console.log("Egyenlő volt az érmek száma");
    }
}
TornaVsUszasKiir(TornaVsUszas(helsinki));

function LegtobbSportolo(adatok: eredmeny[]): number {
    let legtobbSportoloIndexe: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].meret > adatok[legtobbSportoloIndexe].meret) {
            legtobbSportoloIndexe = i;
        }
    }
    return legtobbSportoloIndexe;
}
function LegtobbSportoloKiir(legnagyobb: number): void {
    console.log("7. feladat:");
    console.log("Helyezés: " + helsinki[legnagyobb].helyezes);
    console.log("Sportág: " + helsinki[legnagyobb].sportag);
    console.log("Versenyszám: " + helsinki[legnagyobb].versenySzam);
    console.log("Sportolók száma: " + helsinki[legnagyobb].meret);
}

LegtobbSportoloKiir(LegtobbSportolo(helsinki));