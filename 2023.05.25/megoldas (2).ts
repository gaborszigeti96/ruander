function PhErtek(vizsgaltErtek:number):string{
    if(vizsgaltErtek==7){
        return "semleges";
    }
    else if (vizsgaltErtek<7){
        return "savas";
    }
    else{
        return "lugos";
    }
}


function PrimekSzama(vizsgaltTomb:number[]):number{
    let primekSzama:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        let osztokSzama:number=0;
        for( let j:number=1;j<=vizsgaltTomb[i];j++){
                if(vizsgaltTomb[i]%j==0){
                    osztokSzama++;
                }
        }
        if(osztokSzama==2){
            primekSzama++;
        }
        //Különben nem csinálok semmit...
    }
    return primekSzama;
}


function MaganHangzokSzama(vizsgaltSzoveg:string):number{
    const maganHangzok:string[] = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú", "ü", "ű", "A", "Á", "E", "É", "I", "Í", "O", "Ó", "U", "Ú", "Ü", "Ű"];
    var maganHangzokMennyisege:number=0;
    for(let i:number=0;i<vizsgaltSzoveg.length;i++){
        for(let j:number=0;j<maganHangzok.length;j++){
            if(vizsgaltSzoveg[i]==maganHangzok[j]){
                maganHangzokMennyisege++;
            }
        }
    }
    return maganHangzokMennyisege;
}