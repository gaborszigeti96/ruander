function primekaSzamig(szam) {
    var primszamok = [];
    var primeE = false;
    for (var i = 1; i < szam; i++) {
        var osztokszama = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j == 0) {
                osztokszama++;
            }
        }
        if (osztokszama == 2) {
            primszamok.push(i);
        }
    }
    return primszamok;
}
console.log(primekaSzamig(50));
function primszamokTolIg(szam1, szam2) {
    var primszamok = [];
    var primeE = false;
    for (var i = szam1; i < szam2; i++) {
        var osztokszama = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j == 0) {
                osztokszama++;
            }
        }
        if (osztokszama == 2) {
            primszamok.push(i);
        }
    }
    return primszamok;
}
console.log(primszamokTolIg(25, 50));
