$(function () {
    submitAlbumReport();
    toolsMenuButtons();
});

function updateAlbumReportButtonsFunctions() {
    $('#orderByNameButton').on('click', submitAlbumReportOrderByName);
    $('#orderByCityButton').on('click', submitAlbumReportOrderByCity);
    $('#orderByBirthdayButton').on('click', submitAlbumReportOrderByBirthday);
    $('#searchByNameButton').on('click', submitAlbumReportSearchByName);
    $('#searchByCityButton').on('click', submitAlbumReportSearchByCity);
}

function toolsMenuButtons() {
    $('#optionsMenu #searchBtn').on('click', function() {
        $('#reportFunctionsMenu #orderbyCol').hide();
        $('#reportFunctionsMenu #searchCol').fadeToggle('slow');
    })
    $('#optionsMenu #orderbyBtn').on('click', function() {
        $('#reportFunctionsMenu #searchCol').hide();
        $('#reportFunctionsMenu #orderbyCol').fadeToggle('slow');
    })
}

function submitAlbumReportSearchByName() {
    const token = getCookie("token_ned");
    const name = $('#searchCol #inputToSearch').val();
    $.ajax({
        type: "GET",
        headers: { 'x-access-token': token },
        url: "/DigitalAlbum/Report/getSpecificAlbumByName/" + name
    }).done(function (data) {
        $("#reportContent").empty();
        $("#reportContent").html(data);
        updateAlbumReportButtonsFunctions();
    }).fail(function (req, mensagemStatus, mensagemErro) {
        //alert(req.status);
        //alert(req.responseText);
        //alert(mensagemStatus);
        //alert(mensagemErro);
        $("#reportContent").append($('<div>').addClass('bg-danger fs-1 fw-bold text-center').text('NECESSARIO FAZER LOGIN'));
        if (req.responseText) {
            submitSignOut();
        }
    });
}

function submitAlbumReportSearchByCity() {
    const token = getCookie("token_ned");
    const city = $('#searchCol #inputToSearch').val();
    $.ajax({
        type: "GET",
        headers: { 'x-access-token': token },
        url: "/DigitalAlbum/Report/getSpecificAlbumByCity/" + city
    }).done(function (data) {
        $("#reportContent").empty();
        $("#reportContent").html(data);
        updateAlbumReportButtonsFunctions();
    }).fail(function (req, mensagemStatus, mensagemErro) {
        //alert(req.status);
        //alert(req.responseText);
        //alert(mensagemStatus);
        //alert(mensagemErro);
        $("#reportContent").append($('<div>').addClass('bg-danger fs-1 fw-bold text-center').text('NECESSARIO FAZER LOGIN'));
        if (req.responseText) {
            submitSignOut();
        }
    });
}

function submitAlbumReport() {

    const token = getCookie("token_ned");

    $.ajax({
        type: "GET",
        headers: { 'x-access-token': token },
        url: "/DigitalAlbum/Report/getEveryAlbum"
    }).done(function (data) {
        $("#reportContent").empty();
        $("#reportContent").html(data);
        updateAlbumReportButtonsFunctions();
    }).fail(function (req, mensagemStatus, mensagemErro) {
        //alert(req.status);
        //alert(req.responseText);
        //alert(mensagemStatus);
        //alert(mensagemErro);
        $("#reportContent").append($('<div>').addClass('bg-danger fs-1 fw-bold text-center').text('NECESSARIO FAZER LOGIN'));
        if (req.responseText) {
            submitSignOut();
        }
    });
}

function submitAlbumReportOrderByName() {
    const token = getCookie("token_ned");
    $.ajax({
        type: "GET",
        headers: { 'x-access-token': token },
        url: "/DigitalAlbum/Report/getEveryAlbumOrderByName"
    }).done(function (data) {
        $("#reportContent").empty();
        $("#reportContent").html(data);
        updateAlbumReportButtonsFunctions();
    }).fail(function (req, mensagemStatus, mensagemErro) {
        //alert(req.status);
        //alert(req.responseText);
        //alert(mensagemStatus);
        //alert(mensagemErro);
        $("#reportContent").append($('<div>').addClass('bg-danger fs-1 fw-bold text-center').text('NECESSARIO FAZER LOGIN'));
        if (req.responseText) {
            submitSignOut();
        }
    });
}

function submitAlbumReportOrderByCity() {
    const token = getCookie("token_ned");
    $.ajax({
        type: "GET",
        headers: { 'x-access-token': token },
        url: "/DigitalAlbum/Report/getEveryAlbumOrderByCity"
    }).done(function (data) {
        $("#reportContent").empty();
        $("#reportContent").html(data);
        updateAlbumReportButtonsFunctions();
    }).fail(function (req, mensagemStatus, mensagemErro) {
        //alert(req.status);
        //alert(req.responseText);
        //alert(mensagemStatus);
        //alert(mensagemErro);
        $("#reportContent").append($('<div>').addClass('bg-danger fs-1 fw-bold text-center').text('NECESSARIO FAZER LOGIN'));
        if (req.responseText) {
            submitSignOut();
        }
    });
}

function submitAlbumReportOrderByBirthday() {
    const token = getCookie("token_ned");
    $.ajax({
        type: "GET",
        headers: { 'x-access-token': token },
        url: "/DigitalAlbum/Report/getEveryAlbumOrderByBirthday"
    }).done(function (data) {
        $("#reportContent").empty();
        $("#reportContent").html(data);
        updateAlbumReportButtonsFunctions();
    }).fail(function (req, mensagemStatus, mensagemErro) {
        //alert(req.status);
        //alert(req.responseText);
        //alert(mensagemStatus);
        //alert(mensagemErro);
        $("#reportContent").append($('<div>').addClass('bg-danger fs-1 fw-bold text-center').text('NECESSARIO FAZER LOGIN'));
        if (req.responseText) {
            submitSignOut();
        }
    });
}