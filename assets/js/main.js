function login(){
    var mail = $('#mail');
    var pass = $('#pass');
    if(mail.hasClass('valid') && pass.hasClass('valid')) {
        localStorage.setItem("mail", mail.val());
        window.location.href = "home.html";
    }
}