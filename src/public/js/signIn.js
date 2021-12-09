/**
 * Post Request - Sign In
 */
$(function () {
    $('#signInSubmitButton').on('click', signIn);
});

function createAccount() {
    let dados = {
        email: $('#email').val(),
        senha: $('#password').val()
    }
    $.post("/usuarios", dados, function (data, status, req) {
        alert('IS DONE');
        }).fail(function (req, mensagemStatus, mensagemErro) {
            alert(req.status);
            alert(mensagemStatus);
            alert(mensagemErro);
        });
}

function signIn() {
    //Recuperar dados preenchidos no form
    let dados = {
        email: $('#email').val(),
        senha: $('#password').val()
    }
    //Submissão
    $.post("/login", dados, function (data, status, req) {
        
        //Se necessário, tratar dados de retorno
        //alert(JSON.stringify(data));

        //Pegar token do header vindo na resposta
        let token = req.getResponseHeader("Authorization");
        setCookie("token_ned",token,30);
        //alert("Cookie criado");
        updateNavbar();
        $('#popupContainer').fadeOut('slow');
        $("#popup").empty();
        }).fail(function (req, mensagemStatus, mensagemErro) {
            //alert(req.status);
            //alert(mensagemStatus);
            //alert(mensagemErro);
            $("#error").empty();
            $("#popup").prepend($('<div>').addClass('mx-auto bg-danger fs-4 fw-bold text-center rounded-pill w-25 ').text('EMAIL/SENHA INVALIDOS').attr('id', 'error'));
        });

}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    //path=/ é válido para toda as pastas e subpastas
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}