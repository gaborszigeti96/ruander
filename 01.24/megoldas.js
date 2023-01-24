
//Szigeti Gábor, Frontend, #team11

function keszito() {
    document.write("Szigeti Gábor <br> Frontend <br> #team11 <br>")
}


function hatvanyozo(szam, hatvany) {
    let eredmeny = Math.pow(szam, hatvany)
    document.write("<hr>" + `${eredmeny}` + "<hr>")
    return eredmeny
}


function parosLetrehoz(alsoHatar, felsoHatar) {
    let parosSzam = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar)
    if (parosSzam % 2 == 0) {
        document.write(`${parosSzam}`)
        return parosSzam
    }
    else if (parosSzam % 2 == 1 && parosSzam + 1 <= felsoHatar) {
        document.write(`${parosSzam + 1}`)
        return parosSzam + 1
    }
    else {
        document.write(`${parosSzam - 1}`)
        return parosSzam - 1
    }
}


function testTomegIndex(suly, magassag) {
    let TTI = suly / (magassag * magassag);
    document.write("<hr>")
    if (TTI < 16) {
        document.write(`${TTI} esetén, súlyos soványság`);
    }
    else if (TTI < 17) {
        document.write(`${TTI} esetén, mérsékelt soványság`);
    }
    else if (TTI < 18.5) {
        document.write(`${TTI} esetén, enyhe soványság`);
    }
    else if (TTI < 25) {
        document.write(`${TTI} esetén, normális testsúly`);
    }
    else if (TTI < 30) {
        document.write(`${TTI} esetén, túlsúlyos`);
    }
    else if (TTI < 35) {
        document.write(`${TTI} esetén, I. fokú elhízás`);
    }
    else if (TTI < 40) {
        document.write(`${TTI} esetén, II. fokú elhízás`);
    }
    else {
        document.write(`${TTI} esetén, III. fokú (súlyos) elhízás`);
    }
}


function egeszOsztoE(szam, oszto) {
    document.write("<hr>")
    if (szam % oszto == 0) {
        document.write("true")
        return true
    }

    else {
        document.write("false")
        return false
    }
}


keszito()

hatvanyozo(2, 3)

parosLetrehoz(1, 10)

testTomegIndex(200, 2)

egeszOsztoE(25, 5)




