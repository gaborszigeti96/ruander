function EkezetesBetukSzama(modositandoSzoveg) {
    var ekezetesBetuk = ["á", "Á", "ű", "Ű", "é", "É", "i", "I", "í", "Í", "ő", "Ő", "ú", "Ú", "ö", "Ö", "ü", "Ü", "ó", "Ó"];
    var ekezetesbetukSz = 0;
    for (var i = 0; i < modositandoSzoveg.length; i++) {
        for (var j = 0; j < ekezetesBetuk.length; j++) {
            if (modositandoSzoveg[i] == ekezetesBetuk[j]) {
                ekezetesbetukSz++;
            }
        }
    }
    console.log(ekezetesbetukSz);
}
EkezetesBetukSzama("aladáréű");
function camelCaseGenerator(modositandoSzoveg) {
    return modositandoSzoveg.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
console.log(camelCaseGenerator("elment a lidineni a vasarba"));
