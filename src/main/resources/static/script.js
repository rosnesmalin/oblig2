src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

let ut = '';


function kjøp() {
    const Billett = {
        film: document.getElementById('film').value,
        antall: document.getElementById('antall').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn: document.getElementById('etternavn').value,
        telefonnr: document.getElementById('telefonnr').value,
        epost: document.getElementById('epost').value
    }
    $.post("/kjop", Billett, function() {
        hentRegister();
    })
}
function hentRegister() {
    $.post("/hentRegister", function (data) {
        formaterData(data);
    })
}

function formaterData(Billett) { //denne funker ikke
    ut =
        "<table>"
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

    // tømmer input-feltene
    document.getElementById('fil').value = null;
    document.getElementById('antall').value = null;
    document.getElementById('fornavn').value = null;
    document.getElementById('etternavn').value = null;
    document.getElementById('telefonnr').value = null;
    document.getElementById('epost').value = null;
}

// nullstiller arrayet
function slett() {
    $.post("/slett", function (data){
        $("#registerListet").html(data);
    })
}