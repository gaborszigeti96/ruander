function Rng(alsoHatar:number, felsoHatar:number):number{
    return Math.round(Math.random()*(felsoHatar-alsoHatar)+alsoHatar);
}


function TombGenerator(meret:number, alsoHatar:number, felsoHatar:number):number[]{
    var tomb:number[]=[];
    for(let i:number=0;i<meret;i++){
        tomb.push(Rng(alsoHatar, felsoHatar));
    }
    return tomb;
}

function Duplazo(vizsgaltTomb:number[]):number[]{
    var duplazottTomb:number[]=[];
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        duplazottTomb.push(vizsgaltTomb[i]*2);
    }
    return duplazottTomb;
}


function PrimekSzama(vizsgaltTomb:number[]):number{
    let primekSzama:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        let osztokSzama:number=0;
        for(let j:number=1;j<=vizsgaltTomb[i];j++){
            if(vizsgaltTomb[i]%j==0){
                osztokSzama++;
            }
        }
        if(osztokSzama==2){
            primekSzama++;
        }
    }
    return primekSzama;
}

function EgyediElemek(vizsgaltTomb:number[]):number[]{
    let egyediElemekTomb:number[]=[];
    for(let i=0;i<vizsgaltTomb.length;i++){
        let szerepelE:boolean=false;
        for(let j=0;j<egyediElemekTomb.length;j++){
            if(vizsgaltTomb[i]==egyediElemekTomb[j]){
                szerepelE=true;
            }
        }
        if(szerepelE==false){
            egyediElemekTomb.push(vizsgaltTomb[i]);
        }
    }
    return egyediElemekTomb;
}