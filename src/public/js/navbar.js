$(function () {
    updateNavbar();
});

function updateNavbar() {
    updateMenu();
    updateLinkButtonsNav();
    updateButtonFunctions();
}

function updateButtonFunctions() {
    const $albumReportButton = $('#albumReportPageButton');
    const $signInButton = $('#signInPageButton');
    const $projectsButton = $('#projectsButton');
    const $teamButton = $('#teamButton');
    const $signOutButton = $('#signOutButton');

    const $projectsPage = $('#projectsPage');
    const $teamPage = $('#teamPage');
    const $albumReportPage = '/DigitalAlbum/Report';

    $(function () {
        $albumReportButton.on('click', function() {goToPage($albumReportPage)});
        $projectsButton.on('click', function() {scrollToPage($projectsPage)});
        $teamButton.on('click', function() {scrollToPage($teamPage)});
        $signInButton.on('click', submitSingIn);
        $signOutButton.on('click', submitSignOut);
    });
}

function updateLinkButtonsNav() {
    const url = $(location).attr('pathname');
    const $navbar = $('.navbar-nav');
    const button = {
        //home: $('<a>').text('Inicio').addClass('nav-link active').attr({id:'homeButton', href:'/Home'}),
        //projects: $('<a>').text('Projetos').addClass('nav-link').attr('id', 'projectsButton'),
        //team: $('<a>').text('Time').addClass('nav-link').attr('id', 'teamButton'),
        //albumForm: $('<a>').text('Album Digital').addClass('nav-link').attr({id:'digitalAlbumFormButton', href:'/DigitalAlbum/Form'})
        home: $('<a>').text('Inicio').addClass('nav-link active').attr({id:'homeButton', href:'/Home'}).prepend($('<img>').attr({src: '/public/images/icons/home.png', height: '20'}).addClass('me-2')),
        projects: $('<a>').text('Projetos').addClass('nav-link').attr('id', 'projectsButton').prepend($('<img>').attr({src: '/public/images/icons/project.png', height: '20'}).addClass('me-2')),
        team: $('<a>').text('Time').addClass('nav-link').attr('id', 'teamButton').prepend($('<img>').attr({src: '/public/images/icons/team.png', height: '20'}).addClass('me-2')),
        albumForm: $('<a>').text('Album Digital').addClass('nav-link').attr({id:'digitalAlbumFormButton', href:'/DigitalAlbum/Form'}).prepend($('<img>').attr({src: '/public/images/icons/album.png', height: '20'}).addClass('me-2'))
    }
    if (url == '/Home') {
        $navbar.empty();
        $navbar.append(button.home).append(button.team).append(button.projects).append(button.albumForm);
    } else {
        $navbar.empty();
        $navbar.append(button.home).append(button.albumForm);
    }
}

function updateMenu() {
    const token = getCookie("token_ned");
    const $menu = $('#menuButton');
    const button = {
        //signIn: $('<a>').text('Entrar').addClass('btn btn-md btn-danger').attr('id','signInPageButton'),
        //signOut: $('<a>').text('Sair').addClass('btn btn-md btn-danger').attr('id','signOutButton'),
        //albumReport: $('<a>').text('Relatorio do Album').addClass('btn btn-md btn-secondary').attr('id','albumReportPageButton')
        signIn: $('<a>').text('Entrar').addClass('btn btn-md btn-danger').attr('id','signInPageButton').prepend($('<img>').attr({src: '/public/images/icons/login.png', height: '20'}).addClass('me-2')),
        signOut: $('<a>').text('Sair').addClass('btn btn-md btn-danger').attr('id','signOutButton').prepend($('<img>').attr({src: '/public/images/icons/logout.png', height: '20'}).addClass('me-2')),
        albumReport: $('<a>').text('Relatorio do Album').addClass('btn btn-md btn-secondary').attr('id','albumReportPageButton').prepend($('<img>').attr({src: '/public/images/icons/report.png', height: '20'}).addClass('me-2'))
    }
    if (token ==  "") {
        $menu.empty();
        $menu.append(button.signIn);
    } else {
        $menu.empty();
        $menu.append(button.albumReport).append(button.signOut);
    }
}

function scrollToPage(page) {
    $(window).scrollTop(page.offset().top);
}

function goToPage(page) {
    window.location.href = page;
}

function submitSignOut() {
    document.cookie = "token_ned=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //alert("Vc saiu do NeD" + "Cookie Atual: [ " + getCookie("token_ned") + " ] ");
    updateNavbar();
    window.location.replace('/Home');
}

function submitSingIn() {
    $.ajax({
        type: "GET",
        url: "/SignIn"
    }).done(function (data) {
        $('#popupContainer').fadeIn('slow');
        $("#popup").html(data);
    })
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}