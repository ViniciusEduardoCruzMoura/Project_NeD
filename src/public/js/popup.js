$(function () {
    $('#closePopupButton').on('click', function() {
        $('#popupContainer').fadeOut('slow');
        $('#popup').empty();
    });
});