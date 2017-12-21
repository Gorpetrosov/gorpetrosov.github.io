$(document).ready(function() {
    $('button.navbar-toggle').click(function() {

        $('div.my-class').toggleClass('in');
        $('div.content-site').toggleClass('in2');
        return false;

    });

    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="popover"]').popover();

});