//Szigeti Gábor, #Team 11, html:90, css:90, js:50
document.write("Szigeti Gábor <br>")
document.write("#Team11 <br>")
document.write("Html:95 <br>")
document.write("css:95 <br>")
document.write("js:40 <br>")

let szam = prompt("Adjon meg egy számot")

let hatvanyozasMerteke = prompt("Adja meg a hatványozás mértékét")

let eredmeny = Math.pow(szam, hatvanyozasMerteke)

document.write(`A ${szam} és a ${hatvanyozasMerteke} hatványának eredménye: ${eredmeny}`);

document.write("<br> <hr>")
let alsoHatarertek = prompt("Adja meg az also határértéket")
let felsoHatarertek = prompt("Adja meg a felso hatarerteket")


let random = Math.floor(Math.random() * (felsoHatarertek - parseInt(alsoHatarertek))) + parseInt(alsoHatarertek);
document.write(random + "<br>")

let eletkor = Number(prompt("Adja meg az életkorát:"));

if (eletkor >= 0 && eletkor <= 6) {

    document.write(`Az életkorod: ${eletkor} - Kisgyermekkor`);

}

else if (eletkor <= 12) {

    document.write(`Az életkorod: ${eletkor} - Gyermekkor`);

}

else if (eletkor <= 16) {

    document.write(`Az életkorod: ${eletkor} - Serdülőkor`);

}

else if (eletkor <= 20) {

    document.write(`Az életkorod: ${eletkor} - Ifjúkor`);

}

else if (eletkor <= 30) {

    document.write(`Az életkorod: ${eletkor} - Fiatal felnőtt kor`);

}

else if (eletkor <= 60) {

    document.write(`Az életkorod: ${eletkor} - Felnőtt kor`);

}

else if (eletkor <= 120) {

    document.write(`Az életkorod: ${eletkor} - Aggkor`);

}

else {
    document.write("Hibás adat");
}

for (let i = 1; i <= 10; i++) {
    document.write(`${i * i},`)
}