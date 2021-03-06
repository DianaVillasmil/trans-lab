function addCard(){
    var card_number_txt = $('#card_number_txt')
    if(card_number_txt.hasClass('valid')) {
        var card = card_number_txt.val();
        var cards;
        cards = JSON.parse(localStorage.getItem('cards'));
        cards.push(card);
        cards = Array.from(new Set(cards)); //quitar duplicados (developer.mozilla.org array desde un set)
        localStorage.setItem('cards', JSON.stringify(cards));
        refreshCards();
    }    
}

function refreshCards(){
    var cards;
    cards = JSON.parse(localStorage.getItem('cards'));
    $('#cards').html('');
    cards.forEach((card)=>{
        $('#cards').append(`
            <li class="white left-align">${card}</li>
        `);
    });
}

$('#mail').html(localStorage.getItem('mail'));

refreshCards();

