function ujVisszajelzoSor(tesztneve, visszajelzes) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var visszajelzesMezo = adatSor.insertCell(1);
    tesztNeveMezo.innerHTML = `${tesztneve}`;
    visszajelzesMezo.innerHTML = `${visszajelzes}`;
}

function teszt01() {
    try {
        let tesztElem = document.querySelectorAll("div")
        if (tesztElem[0].className.includes("container")) {
            ujVisszajelzoSor("Az első Div Container", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Az első Div Container", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Az első Div Container", "HIBA");
    }


}

function teszt02() {
    try {
        let tesztElem = document.querySelector("h1")
        if (tesztElem.innerHTML == "Tanfolyam regisztráció") {
            ujVisszajelzoSor("Egyes szintű címsor tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Egyes szintű címsor tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Egyes szintű címsor tartalma", "HIBA");
    }


}



function teszt03() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[0].type == "text") {
            ujVisszajelzoSor("Első input mező típusa text", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező típusa text", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező típusa text", "HIBA");
    }



}


function teszt04() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[0].id == "veznev") {
            ujVisszajelzoSor("Első input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező azonosítója", "HIBA");
    }


}

function teszt05() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[0].className == "form-control") {
            ujVisszajelzoSor("Első input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező bootstrap osztályaa", "HIBA");
    }


}

function teszt06() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[1].type == "text") {
            ujVisszajelzoSor("Második input mező típusa text", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező típusa text", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező típusa text", "HIBA");
    }



}


function teszt07() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[1].id == "kernev") {
            ujVisszajelzoSor("Második input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező azonosítója", "HIBA");
    }


}

function teszt08() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[1].className == "form-control") {
            ujVisszajelzoSor("Második input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező bootstrap osztályaa", "HIBA");
    }


}

function teszt09() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[2].type == "text") {
            ujVisszajelzoSor("Harmadik input mező típusa text", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező típusa text", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező típusa text", "HIBA");
    }



}


function teszt10() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[2].id == "fnev") {
            ujVisszajelzoSor("Harmadik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező azonosítója", "HIBA");
    }


}

function teszt11() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[2].className == "form-control") {
            ujVisszajelzoSor("Harmadik input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező bootstrap osztályaa", "HIBA");
    }


}

function teszt12() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[3].type == "password") {
            ujVisszajelzoSor("Negyedik input mező típusa password", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező típusa passwordt", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező típusa password", "HIBA");
    }



}


function teszt13() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[3].id == "pass1") {
            ujVisszajelzoSor("Negyedik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező azonosítója", "HIBA");
    }


}

function teszt14() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[3].className == "form-control") {
            ujVisszajelzoSor("Negyedik input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező bootstrap osztályaa", "HIBA");
    }


}


function teszt15() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[4].type == "password") {
            ujVisszajelzoSor("Ötödik input mező típusa password", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező típusa passwordt", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező típusa password", "HIBA");
    }



}


function teszt16() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[4].id == "pass2") {
            ujVisszajelzoSor("Ötödik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező azonosítója", "HIBA");
    }


}

function teszt17() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[4].className == "form-control") {
            ujVisszajelzoSor("Ötödik input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező bootstrap osztályaa", "HIBA");
    }


}


function teszt18() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[5].type == "email") {
            ujVisszajelzoSor("Hatodik input mező típusa ", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező típusa ", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező típusa ", "HIBA");
    }



}


function teszt19() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[5].id == "email") {
            ujVisszajelzoSor("Hatodik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező azonosítója", "HIBA");
    }


}

function teszt20() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[5].className == "form-control") {
            ujVisszajelzoSor("Hatodik input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező bootstrap osztályaa", "HIBA");
    }


}


function teszt21() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[6].type == "tel") {
            ujVisszajelzoSor("Hetedik input mező típusa ", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező típusa ", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező típusa password", "HIBA");
    }



}


function teszt22() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[6].id == "tel") {
            ujVisszajelzoSor("Hetedik input mező azonosítója", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező azonosítója", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező azonosítója", "HIBA");
    }


}

function teszt23() {
    try {
        let tesztElem = document.querySelectorAll("input")
        if (tesztElem[6].className == "form-control") {
            ujVisszajelzoSor("Hetedik input mező bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező bootstrap osztályaa", "HIBA");
    }


}


/* Nem minden mező form control
function teszt24() {
    try {
        szerepelE = false;
        let tesztElem = document.querySelectorAll("input")
        for (i = 0; i < tesztElem.length; i++) {
            if (tesztElem[i].className !== "form-control") {
                szerepelE = false;
            }


            else {

                szerepelE = true;

            }
        }

        if (szerepelE == true) {
            ujVisszajelzoSor("Összes mező form-control-e", "Megfelelő");
        }

        else {
            ujVisszajelzoSor("Összes mező form-control-e", "NEM megfelelő");
        }
    }

    catch {
        ujVisszajelzoSor("Összes mező form-control-e", "HIBA");
    }
}

*/

function teszt25() {
    try {
        let tesztElem = document.querySelectorAll("label")
        if (tesztElem[0].innerHTML == "Vezeték név:"
            && tesztElem[1].innerHTML == "Kereszt név:"
            && tesztElem[2].innerHTML == "Felhasználói név:"
            && tesztElem[3].innerHTML == "Jelszó:"
            && tesztElem[4].innerHTML == "Jelszó ismét:"
            && tesztElem[5].innerHTML == "E-mail cím:"
            && tesztElem[6].innerHTML == "Telefonszám:"
        ) {
            ujVisszajelzoSor("Labelek tartalmai", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Labelek tartalmai", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Labelek tartalmai", "HIBA");
    }
}

function teszt26() {
    try {
        let tesztElem = document.querySelectorAll("small")
        if (tesztElem[0].className == "form-text text-muted") {
            ujVisszajelzoSor("Felhasználói név alatti üzenet osztályai", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Felhasználói név alatti üzenet osztályai", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Felhasználói név alatti üzenet osztályai", "HIBA");
    }


}

function teszt27() {
    try {
        let tesztElem = document.querySelectorAll("small")
        if (tesztElem[0].innerHTML == "Beceneve, mely mások számára is látható.") {
            ujVisszajelzoSor("Felhasználói név alatti üzenet", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Felhasználói név alatti üzenet", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Felhasználói név alatti üzenet", "HIBA");
    }


}

function teszt28() {
    try {
        let tesztElem = document.querySelectorAll("small")
        if (tesztElem[1].innerHTML == "Ide továbbítjuk a legfontosabb tanfolyam információkat.") {
            ujVisszajelzoSor("Email név alatti üzenet", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Email név alatti üzenet", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Email név alatti üzenet", "HIBA");
    }


}

function teszt29() {
    try {
        let tesztElem = document.querySelectorAll("small")
        if (tesztElem[1].className == "form-text text-muted") {
            ujVisszajelzoSor("Email név alatti üzenet osztályai", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Email név alatti üzenet osztályai", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Email név alatti üzenet osztályai", "HIBA");
    }


}

function teszt30() {
    try {
        let tesztElem = document.querySelectorAll("small")
        if (tesztElem[2].className == "form-text text-muted") {
            ujVisszajelzoSor("Telefon név alatti üzenet osztályai", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Telefon név alatti üzenet osztályai", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Telefon név alatti üzenet osztályai", "HIBA");
    }


}

function teszt31() {
    try {
        let tesztElem = document.querySelectorAll("small")
        if (tesztElem[2].innerHTML == "Ha szeretne akár azonnal értesülni a fontosabb hírekről") {
            ujVisszajelzoSor("Telefon név alatti üzenet", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Telefon név alatti üzenet", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Telefon név alatti üzenet", "HIBA");
    }


}

function teszt32() {
    try {
        let tesztElem = document.querySelector("button")
        if (tesztElem.className.includes("btn")) {
            ujVisszajelzoSor("Gomb alapértelmezett bootstrap osztálya", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb alapértelmezett bootstrap osztálya", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb alapértelmezett bootstrap osztálya", "HIBA");
    }


}

function teszt33() {
    try {
        let tesztElem = document.querySelector("button")
        if (tesztElem.className.includes("btn-primary")) {
            ujVisszajelzoSor("Gomb színe", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb színe", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb színe", "HIBA");
    }


}

function teszt34() {
    try {
        let tesztElem = document.querySelector("button")
        if (tesztElem.className.includes("form-control")) {
            ujVisszajelzoSor("Gomb mérete", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb mérete", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb mérete", "HIBA");
    }


}


function teszt35() {
    try {
        let tesztElem = document.querySelector("button")
        if (tesztElem.innerHTML == "Regisztrálok") {
            ujVisszajelzoSor("Gomb felirat", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Gomb felirat", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Gomb felirat", "HIBA");
    }


}

function teszt36() {
    try {
        let tesztElem = document.querySelector("select")
        if (tesztElem.options.length == 4) {
            ujVisszajelzoSor("Select mezőben lévő elemek száma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Select mezőben lévő elemek száma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Select mezőben lévő elemek száma", "HIBA");
    }


}


function teszt37() {
    try {
        let tesztElem = document.querySelector('#tipus');
        let text = tesztElem.options[tesztElem.selectedIndex].text;
        if (text == "Webfejlesztő") {
            ujVisszajelzoSor("Selected mező", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Select mezőben", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Select mező", "HIBA");
    }


}


function allTeszt() {
    teszt01();
    teszt02();
    teszt03();
    teszt04();
    teszt05();
    teszt06();
    teszt07();
    teszt08();
    teszt09();
    teszt10();
    teszt11();
    teszt12();
    teszt13();
    teszt14();
    teszt15();
    teszt16();
    teszt17();
    teszt18();
    teszt19();
    teszt20();
    teszt21();
    teszt22();
    teszt23();
    teszt25();
    teszt26();
    teszt27();
    teszt28();
    teszt29();
    teszt30();
    teszt31();
    teszt32();
    teszt33();
    teszt34();
    teszt35();
    teszt36();
    teszt37();
}
allTeszt();