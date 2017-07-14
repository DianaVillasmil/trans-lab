if (!localStorage.getItem('cards')) {
    localStorage.setItem('cards', "[]");
}
$(document).ready(function () {
    $('.collapsible').collapsible();
});