

function kjop() {
//objektet opprettes
    const Billett = {
        film: $("#film").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    }

    //sjekker om alle input-feltene er fyllt ut
    let error = false
    if (Billett.antall === "" ) {
        $("#ant").html("Du må oppgi antall biletter");
        error = true
    } else {
        $("#ant").html("");
    }
    if (Billett.fornavn === "") {
        $("#for").html("Du må oppgi navn");
        error = true
    } else {
        $("#for").html("");
    }
    if (Billett.etternavn === "") {
        $("#ette").html("Du må oppgi etternavn");
        error = true
    } else {
        $("#ette").html("");
    }
    if (Billett.telefonnr === "") {
        $("#tlf").html("Du må oppgi telefonnr");
        error = true
    }else {
        $("#tlf").html("");
    }
    if (Billett.epost === "") {
        $("#epo").html("Du må oppgi epost-adresse");
        error = true
    }else {
        $("#epo").html("");
    }

    if(error == false) {
        console.log(Billett)
        //kaller på metoden på serveren som legger objektet inn i et array
        $.post("/kjop", Billett, function () {
            hentRegister();
        });
        // sørger for at feil-meldingene går bort dersom feltene fylles ut
        $("#fil").html("");
        $("#ant").html("");
        $("#for").html("");
        $("#ette").html("");
        $("#tlf").html("");
        $("#epo").html("");
    }
}
    //kaller på metoden på serveren som henter arrayet
function hentRegister() {
    $.post("/hentRegister", function (data) {
        formaterData(data);
    });
}
    //legger arrayet som er hentet ut inn i en tabell. Kobler sammen arrayet og tabellen.
function formaterData(Billett) {
    // tømmer input-feltene
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");

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
    $("#registerListet").html(ut);
}

// nullstiller arrayet
function slett() {
    $.post("/slett", function (data){
        formaterData(data);
    })
}