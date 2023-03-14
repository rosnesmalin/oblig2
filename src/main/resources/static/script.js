src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";


function kjop() {
//objektet opprettes
    const Billett = {
        film: document.getElementById('film').value,
        antall: document.getElementById('antall').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn: document.getElementById('etternavn').value,
        telefonnr: document.getElementById('telefonnr').value,
        epost: document.getElementById('epost').value
    }
    //sjekker om alle input-feltene er fyllt ut
    let error = false
    if (Billett.antall == "" ) {
        document.getElementById('ant').innerHTML="Du må oppgi antall biletter";
        error = true
    } else {
        document.getElementById('ant').innerHTML="";
    }
    if (Billett.fornavn == "") {
        document.getElementById('for').innerHTML="Du må oppgi navn";
        error = true
    } else {
        document.getElementById('for').innerHTML="";
    }
    if (Billett.etternavn == "") {
        document.getElementById('ette').innerHTML="Du må oppgi etternavn";
        error = true
    } else {
        document.getElementById('ette').innerHTML="";
    }
    if (Billett.telefonnr == "") {
        document.getElementById('tlf').innerHTML="Du må oppgi telefonnr";
        error = true
    }else {
        document.getElementById('tlf').innerHTML="";
    }
    if (Billett.epost == "") {
        document.getElementById('epo').innerHTML="Du må oppgi epost-adresse";
        error = true
    }else {
        document.getElementById('epo').innerHTML="";
    }

    if(!error) {
    //kaller på metoden på serveren som legger objektet inn i et array
    $.post("/kjop", Billett, function() {
        hentRegister();
    });
        // sørger for at feil-meldingene går bort dersom feltene fylles ut
        document.getElementById('fil').innerHTML = "";
        document.getElementById('ant').innerHTML = "";
        document.getElementById('for').innerHTML = "";
        document.getElementById('ette').innerHTML = "";
        document.getElementById('tlf').innerHTML = "";
        document.getElementById('epo').innerHTML = "";
}}
    //kaller på metoden på serveren som henter arrayet
function hentRegister() {
    $.post("/hentRegister", function (data) {
        formaterData(data);
    });
}
    //legger arrayet som er hentet ut inn i en tabell. Kobler sammen arrayet og tabellen.
function formaterData(Billett) {
    // tømmer input-feltene
    document.getElementById('antall').value = null;
    document.getElementById('fornavn').value = null;
    document.getElementById('etternavn').value = null;
    document.getElementById('telefonnr').value = null;
    document.getElementById('epost').value = null;

    let ut =
        "<table class='table table-striped table-bordered'>"
        + "<tr>"
        + "<th>Film</th>"
        + "<th>Antall billetter</th>"
        + "<th>Navn</th>"
        + "<th>Telefonnr</th>"
        + "<th>Epost</th>"
        + "</tr>"

    for (let p of Billett) {
        ut += "<tr>"
            + "<td>" + p.film + "</td><td>" + p.antall + "</td>"
            + "<td>" + p.fornavn + ' ' + p.etternavn + "</td><td>"
            + p.telefonnr + "</td>" + "<td>" + p.epost + "</td>"
            + "<tr>";
    }
    ut += "</table>";
    document.getElementById('registerListet').innerHTML = ut;
}

// nullstiller arrayet
function slett() {
    $.post("/slett", function (data){
        formaterData(data);
    })
}