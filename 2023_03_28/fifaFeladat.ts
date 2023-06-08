var csapatAdat: string[] = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];

interface fifaElem {
    csapat: string;
    helyezes: number;
    valtozas: number;
    pontszam: number;
}

function Objektumfeltolto(feltoltendoElem: string[]): fifaElem[] {
    var beolvasottAdatok: fifaElem[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let darabolandoSor: string[] = feltoltendoElem[i].split(";");
        let objektum: fifaElem = {
            csapat: darabolandoSor[0],
            helyezes: Number(darabolandoSor[1]),
            valtozas: Number(darabolandoSor[2]),
            pontszam: Number(darabolandoSor[3])
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
var fifaAdatok: fifaElem[] = Objektumfeltolto(csapatAdat);

function AdatKiiro(adatok: fifaElem[]): void {
    for (let i: number = 0; i < adatok.length; i++) {
        console.log(adatok[i].csapat + ":" + adatok[i].pontszam);
    }
}
AdatKiiro(fifaAdatok);

function CsapatokSzama(adatok: fifaElem[]): void {
    console.log("3. feladat: A világranglistán " + adatok.length + " csapat szerepel");
}

CsapatokSzama(fifaAdatok);


function AtlagPontszam(adatok: fifaElem[]): void {
    let pontOsszeg: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        pontOsszeg += adatok[i].pontszam;
    }
    console.log(`4. feladat: A csapatok átlagok pontszáma: ${pontOsszeg / adatok.length} pont`);
}
AtlagPontszam(fifaAdatok);

function LegtobbetJavito(adatok: fifaElem[]): void {
    let maxIndex: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].valtozas > adatok[maxIndex].valtozas) {
            maxIndex = i;
        }
    }
    console.log("5. feladat: A legtöbbet javító csapat");
    console.log("\tHelyezés: "+adatok[maxIndex].helyezes);
    console.log("\tCsapat: "+adatok[maxIndex].csapat);
    console.log("\tPontszám: "+adatok[maxIndex].pontszam);
}
LegtobbetJavito(fifaAdatok);


function VanEMagyar(adatok:fifaElem[]):void{
    let szerepelE:boolean=false;
    for(let i:number=0;i<adatok.length;i++){
        if(adatok[i].csapat=="Magyarország"){
            szerepelE=true;
        }
    }
    if(szerepelE==true){
        console.log("6. feladat: A csapatok között szerepelt Magyarország");
    
    }
    else{
        console.log("6. feladat: A csapatok között nincs Magyarország")
    }
}
VanEMagyar(fifaAdatok);

function TescosStatisztika(adatok:fifaElem[]):void{
    var minuszEgy:number=0;
    var nulla:number=0;
    var egy:number=0;
    for(let i:number=0;i<adatok.length;i++){
        if(adatok[i].valtozas==-1){
            minuszEgy++;
        }
        else if(adatok[i].valtozas==0){
            nulla++;
        }
        else if(adatok[i].valtozas==1){
            egy++;
        }
        else{}
    }
    console.log("7. feladat: Statisztika(TESCO)");
    console.log("\t0 helyet változott: "+nulla+" csapat");
    console.log("\t-1 helyet változott: "+minuszEgy+" csapat");
    console.log("\t1 helyet változott: "+egy+" csapat");
}
TescosStatisztika(fifaAdatok);


//NEM TESCO-s
function ValtozasStatisztikaReszletes(fifaAdatok:fifaElem[]):void{
	let valtozas:number[]=[];
    for(let i:number=0;i<fifaAdatok.length;i++)
    {
    	let szerepelE:boolean=false;
        for(let j:number=0;j<valtozas.length;j++)
        {
        	if(fifaAdatok[i].valtozas==valtozas[j])
            {
            	szerepelE=true;
            }
        }
        if(szerepelE==false){
        	valtozas.push(fifaAdatok[i].valtozas);
        }        
    }
    let valtozasSeged:number[]=[];
    for(let i:number=0;i<valtozas.length;i++){
    	valtozasSeged.push(0);
    }
    
    for(let i:number=0;i<fifaAdatok.length;i++)
    {
        for(let j:number=0;j<valtozas.length;j++)
        {
        	if(fifaAdatok[i].valtozas==valtozas[j])
            {
            	valtozasSeged[j]++;
            }
        }
    }
    console.log("7. feladat: Statisztika(Komplex)");
    for(let i:number=0;i<valtozasSeged.length;i++){
    	if(valtozasSeged[i]>1){
        	console.log("\t"+valtozas[i]+" helyet váltott: "+valtozasSeged[i]+" csapat");
        }
    }
}
ValtozasStatisztikaReszletes(fifaAdatok);