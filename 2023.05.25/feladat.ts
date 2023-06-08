function EkezetesBetukSzama(modositandoSzoveg: string) {
    let ekezetesBetuk: string[] = ["á", "Á", "ű", "Ű", "é", "É", "i", "I", "í", "Í", "ő", "Ő", "ú", "Ú", "ö", "Ö", "ü", "Ü", "ó", "Ó"]
    let ekezetesbetukSz: number = 0;
    for (let i: number = 0; i < modositandoSzoveg.length; i++) {
        for (let j: number = 0; j < ekezetesBetuk.length; j++) {
            if (modositandoSzoveg[i] == ekezetesBetuk[j]) {
                ekezetesbetukSz++
            }
        }
    }
    console.log(ekezetesbetukSz)
}
EkezetesBetukSzama("aladáréű");


function camelCaseGenerator(modositandoSzoveg: string) {

    return modositandoSzoveg.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');

}

console.log(camelCaseGenerator("elment a lidineni a vasarba"));



function PrimLista(vizsgaltTomb: number[]) {
    let primszamok: number[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {

    }
}