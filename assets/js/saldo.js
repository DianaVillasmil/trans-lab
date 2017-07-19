$(document).ready(function () {
    var cards = JSON.parse(localStorage.getItem('cards'));
    cards.forEach((card) => {
        $('#opciones').append(`<option value="${card}">${card}</option>`);
    });
    $('select').material_select();
    $('#opciones').on('change', (event) => {
        $('#card_number_txt').val('');
        if ($('#opciones').val() != '') {
            $('#card_number_txt').prop("disabled", true);
        } else {
            $('#card_number_txt').prop("disabled", false);
        }
    });
});


function verSaldo() {
    var bip = $('#card_number_txt').val() + $('#opciones').val();
    if (bip != '') {
        var url = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bip}`;

        console.log(url);

        //con ajax daba error y en stackoverflow consegui este codigo que funcionaba

        var jqxhr = $.getJSON(url)
            .done(function (result) {
                console.log(result);
                mostrarSaldo(result);
            })
            .fail(function (error) {
                console.log("error");
                console.log(error);
            })
            .always(function () {
                console.log("complete");
            });
    }

}

function mostrarSaldo(saldo) {
    // var pesos = parseInt(saldo.saldoTarjeta.replace(/\$/g,'').replace(/\./g,''))
    // console.log(pesos);
    $('#resultado').html(`
        <div class="grey darken-4 center-align white-text">
            SALDO TOTAL
        </div>
        <div class="amber accent-4 white-text center-align section pad20">
            ${saldo.saldoTarjeta}
        </div>
    `);
}