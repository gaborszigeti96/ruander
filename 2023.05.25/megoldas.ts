function EkezetesBetukSzama(vizsgalandoSzoveg:string):number{
    let ekezetesBetuk:string[]=['á','é','í','ó','ö','ő','ú','ü','ű','Á','É','Í','Ó','Ö','Ő','Ú','Ü','Ű'];
    let ekezetesBetukSzama:number=0;
    for(let i:number=0;i<vizsgalandoSzoveg.length;i++){
        let szerepelE=false;
        for(let j:number=0;j<ekezetesBetuk.length;j++){
            if(ekezetesBetuk[j]==vizsgalandoSzoveg[i]){
                szerepelE=true;
            }
        }
        if(szerepelE==true){
            ekezetesBetukSzama++;
        }
    }
    return ekezetesBetukSzama;
}
//tsc ./filename.ts --target es2016
//és akkor tudud az includes-ot is használni
function camelCaseGenerator(modositandoSzoveg:string):string{
    let ujSzoveg:string="";
    let szovegElemek:string[]=modositandoSzoveg.split(" ");
    for(let i:number=0;i<szovegElemek.length;i++){
        if(i==0){
            ujSzoveg+=szovegElemek[i][0].toLowerCase()
        }
        else{
            ujSzoveg+=szovegElemek[i][0].toUpperCase()
        }
        for(let j:number=1;j<szovegElemek[i].length;j++)
        {
            ujSzoveg+=szovegElemek[i][j].toLowerCase();
        }
    }
    return ujSzoveg;
}

function PrimLista(vizsgaltTomb:number[]):any{
    let primekListaja:number[]=[];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        let oszto:number=0;
        for(let j=1;j<=vizsgaltTomb[i];j++){
            if(vizsgaltTomb[i]%j==0){
                oszto++;
            }
        }
        if(oszto==2){
            primekListaja.push(vizsgaltTomb[i]);
        }
        else{}
    }    
    if(primekListaja.length==0){
        return "Nincs prímszám a tömbben";
    }
    else {
        return primekListaja.toString();
    }
}