$(document).ready(function () {
    $('.ikone').click(function () {
        document.getElementById("naslov").innerHTML = $(this).attr('name');
        document.getElementById("glavna").src = this.src;
    });
});