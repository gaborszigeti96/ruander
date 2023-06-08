function primekaSzamig(szam: number) {
    let primszamok: number[] = [];
    let primeE: Boolean = false;
    for (let i: number = 1; i < szam; i++) {
        let osztokszama: number = 0;
        for (let j: number = 1; j <= i; j++) {

            if (i % j == 0) {
                osztokszama++
            }



        }
        if (osztokszama == 2) {
            primszamok.push(i)
        }

    }
    return primszamok;
}
console.log(primekaSzamig(50))





function primszamokTolIg(szam1: number, szam2: number) {
    let primszamok: number[] = [];
    let primeE: Boolean = false;
    for (let i: number = szam1; i < szam2; i++) {
        let osztokszama: number = 0;
        for (let j: number = 1; j <= i; j++) {

            if (i % j == 0) {
                osztokszama++
            }



        }
        if (osztokszama == 2) {
            primszamok.push(i)
        }

    }
    return primszamok;
}

console.log(primszamokTolIg(25, 50))