//aktivalo.addEventListener("click", mindenCheck);

function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }
}

//deaktivalo.addEventListener("click", mindenUnCheck);

function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}

//Szorgalmi: Kijelölés megfordítása
//Illetve a két check gomb egy gombra való megírása
/*--Aktivál és deaktivál egy gombon!

deAktivalo.addEventListener("click", deAktivaloFolyamat);
 function deAktivaloFolyamat(){
    let elemLista=document.querySelectorAll(".allapot");
    if(elemLista[0].checked==true){
        mindenUnCheck();
    }
    else{
        mindenCheck();
    }

 }
 */

//Kijelölés megfordítása
deAktivalo.addEventListener("click", deAktivaloFolyamat);
function deAktivaloFolyamat() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        if (elemLista[i].checked == true) {
            elemLista[i].checked = false;
        }
        else {
            elemLista[i].checked = true;
        }

    }
}
//Szorgalmi vége

//csikozasbe.addEventListener("click",CsikozasBe);
function CsikozasBe() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.add("table-striped");
}

//csikozaski.addEventListener("click",CsikozasKi);
function CsikozasKi() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.remove("table-striped");
}
//Illetve a két "sávozás" gomb egy gombra való megírása
//Szorgalmi kezdete
savozas.addEventListener("click", savozasFolyamat);
/*
function savozasFolyamat(){
    let tableObjektum = document.querySelector("table");
    if(tableObjektum.classList.contains("table-striped"))
    {
        tableObjektum.classList.remove("table-striped");
    }
    else{
        tableObjektum.classList.add("table-striped");
    }
}
*/
//Alternatív megoldás toogle függény segítségével
function savozasFolyamat() {
    document.querySelector("table").classList.toggle("table-striped");
}

//Szorgalmi vége

//darkMode.addEventListener("click",DarkMode);
function DarkMode() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.remove("table-light");
    tableObjektum.classList.add("table-dark");
}

//lightMode.addEventListener("click",LightMode);
function LightMode() {
    let tableObjektum = document.querySelector("table");
    tableObjektum.classList.remove("table-dark");
    tableObjektum.classList.add("table-light");
}
//Illetve a két "szín mód" gomb egy gombra való megírása
//Szorgalmi kezdete
darkLightMode.addEventListener("click", darkLightModeFolyamat);
function darkLightModeFolyamat() {
    let darkStance = document.querySelector("table").classList.contains("table-dark");
    let gomb = document.querySelector("#darkLightMode");
    if (darkStance == true) {
        LightMode();
        document.body.style.backgroundImage = "linear-gradient(to right, white, gray, white)";
        gomb.innerHTML = "DarkModeON";
        gomb.classList.remove("btn-light");
        gomb.classList.add("btn-dark");
    }
    else {
        DarkMode();
        document.body.style.backgroundImage = "linear-gradient(to right, black, gray, black)";
        gomb.innerHTML = "LightModeON";
        gomb.classList.remove("btn-dark");
        gomb.classList.add("btn-light");
    }

}

//Szorgalmi vége

tesztSor.addEventListener("click", TesztsorBeszuras);
function TesztsorBeszuras() {
    let tableObjektum = document.querySelector("table");
    let sor = tableObjektum.insertRow();
    let vezNevCella = sor.insertCell();
    let kerNevCella = sor.insertCell();
    let emailCella = sor.insertCell();
    let telefonCella = sor.insertCell();
    let beosztasCella = sor.insertCell();
    let aktivalCella = sor.insertCell();

    vezNevCella.innerHTML = "teszt";
    kerNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

gomba.addEventListener("click", ujRegisztracio);
function ujRegisztracio() {
    let tableObjektum = document.querySelector("table");
    let sor = tableObjektum.insertRow();
    let vezNevCella = sor.insertCell();
    let kerNevCella = sor.insertCell();
    let emailCella = sor.insertCell();
    let telefonCella = sor.insertCell();
    let beosztasCella = sor.insertCell();
    let aktivalCella = sor.insertCell();

    vezNevCella.innerHTML = document.querySelector("#vnev").value;
    kerNevCella.innerHTML = document.querySelector("#knev").value;
    emailCella.innerHTML = document.querySelector("#email").value;
    telefonCella.innerHTML = document.querySelector("#tel").value;
    beosztasCella.innerHTML = document.querySelector("#beo").value;
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

//Validálások 


//keresztnev, vezeteknev
function vnevCheck() {
    let nevMinta = /[A-ZÁÉÍÓÖŐÚÜŰ]+[a-záéíóöőúüű]+$/;
    let ertek = document.querySelector("#vnev").value;
    if (nevMinta.test(ertek) == true) {
        return true;
    }

    else {
        return false;
    }
}

function knevCheck() {
    let nevMinta = /[A-ZÁÉÍÓÖŐÚÜŰ]+[a-záéíóöőúüű]+$/;
    let ertek = document.querySelector("#knev").value;
    if (nevMinta.test(ertek) == true) {
        return true;
    }

    else {
        return false;
    }
}

//email
function emailCheck() {
    let emailMinta = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i; f
    let ertek = document.querySelector("#email").value;
    if (emailMinta.test(ertek) == true) {
        return true;
    }

    else {
        return false;
    }
}

//telszam

function telCheck() {
    let telMinta = /([0-9]{3})-([0-9]{4})$/;
    let ertek = document.querySelector("#tel").value;
    if (telMinta.test(ertek) == true) {
        return true;
    }

    else {
        return false;
    }
}

gomba.addEventListener("click", feltoltoMuvelet);
function feltoltoMuvelet() {
    let modosintandoElem = document.querySelector("#progressMessage");
    if (vnevCheck() == true && knevCheck() == true && emailCheck() == true && telCheck() == true) {
        modosintandoElem.classList.remove("alert-info");
        modosintandoElem.classList.add("alert-succes");
        modosintandoElem.innerHTML = "Sikeres adatfeltöltés"
        ujRegisztracio()
    }
}