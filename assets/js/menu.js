if (!localStorage.getItem('cards')) {
  localStorage.setItem('cards', "[]");
}
$(".button-collapse").sideNav({
  menuWidth: 270
});