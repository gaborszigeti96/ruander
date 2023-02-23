function kalkulal() {
    //Űrlapadatok
    const szelesseg = getElementById('szelesseg');
    const magassag = getElementById('magassag');
    const papir = document.getElementById('papirtipus').value;
    //Számítások
    let terulet = Math.round((szelesseg * magassag) / 10000);
    let koltseg = terulet * papir;
    //Megjelenítés
    document.getElementById('papir').innerHTML = papir;
    document.getElementById('koltseg').innerHTML = koltseg;
    document.getElementById('terulet').innerHTML = terulet;
    document.getElementById('valasz').style.visibility = "visible";
}

