
let aTomb = []
let bTomb = []

for (let i = 0; i < 10; i++) {
    aTomb.push(Math.round(Math.random() * 100));
}

for (let i = 0; i <= 10; i++) {
    bTomb.push(Math.round(Math.random() * 100));
}

document.write("A generált tömbök elemei:");
document.write("<br>A tömb:");
for (let i = 0; i < aTomb.length; i++) {
    document.write(aTomb[i] + ",");
}


document.write("<br>B Tömb:");
for (let i = 0; i < bTomb.length; i++) {
    document.write(bTomb[i] + ",");
}
let metszet = []
for (let i = 0; i < aTomb.length; i++) {
    for (let j = 0; j < bTomb.length; j++) {
        if (aTomb[i] == bTomb[j]) {
            metszet.push(aTomb[i]);
        }
    }
}

document.write("<br>Metszet:");
for (let i = 0; i < metszet.length; i++) {
    document.write(metszet[i] + ",");
}

