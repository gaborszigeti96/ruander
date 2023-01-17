//Szigeti Gábor, #Team 11, html:90, css:90, js:50
document.write("Szigeti Gábor <br>")
document.write("#Team11 <br>")
document.write("Html:90 <br>")
document.write("css:90 <br>")
document.write("js:50 <br>")

let szam = prompt("Adjon meg egy számot")

let hatvanyozasMerteke = prompt("Adja meg a hatványozás mértékét")

let eredmeny = Math.pow(szam, hatvanyozasMerteke)

document.write(`A ${szam} és a ${hatvanyozasMerteke} hatványának eredménye: ${eredmeny}`);

document.write("<br> <hr>")
let alsoHatarertek = prompt("Adja meg az also határértéket")
let felsoHatarertek = prompt("Adja meg a felso hatarerteket")


let random = Math.floor(Math.random() * (felsoHatarertek - parseInt(alsoHatarertek))) + parseInt(alsoHatarertek);
document.write(random + "<br>")
