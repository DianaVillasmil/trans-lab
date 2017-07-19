var tarifa = 0;

$(document).ready(function () {
    var cards = JSON.parse(localStorage.getItem('cards'));
    cards.forEach((card) => {
        $('#tarjetas').append(`<option value="${card}">${card}</option>`);
    });
    $('#tarjetas').on('change', (event) => {
        $('#card_number_txt').val('');
        if ($('#tarjetas').val() != '') {
            $('#card_number_txt').prop("disabled", true);
        } else {
            $('#card_number_txt').prop("disabled", false);
        }
    });

    $('select').material_select();
});

function calcularTarifa() {
    var bip = $('#card_number_txt').val() + $('#tarjetas').val();
    if ($('#tarifas').val() && bip != '') {
        tarifa = parseInt($('#tarifas').val());
        
        var url = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bip}`;

        console.log(url);

        //con ajax daba error y en stackoverflow consegui este codigo que funcionaba

        var jqxhr = $.getJSON(url)
            .done(function (result) {
                console.log(result);
                mostrarTarifa(result);
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

function mostrarTarifa(saldo) {
    //usando expresiones regulares y replace
    var pesos = parseInt(saldo.saldoTarjeta.replace(/\$/g, '').replace(/\./g, ''))
    console.log(pesos);

    var saldoFinal = '$' + (pesos - tarifa);
    $('#costo').html(`
        <div class="grey darken-4 center-align white-text">
            COSTO PASAJE
        </div>
        <div class="amber accent-4 white-text center-align section pad20">
            $${tarifa}
        </div>
    `);

    $('#saldo').html(`
        <div class="grey darken-4 center-align white-text">
            SALDO FINAL
        </div>
        <div class="amber accent-4 white-text center-align section pad20">
            ${saldoFinal}
        </div>
    `);
}



