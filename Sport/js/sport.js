$( document ).ready(function() {

$("#android b").html(function(index, html) {
        return html.replace(/\S/g, "<span>$&</span>");
    });
    $("#ios b").html(function(index, html) {
        return html.replace(/\S/g, "<span>$&</span>");
    });
$("#android").click(function() {
    $("#android").addClass("loading");
    setTimeout(function() {
        $("#android").removeClass("loading");
    }, 8000);
});
    $("#ios").click(function() {
        $("#ios").addClass("loading");
        setTimeout(function() {
            $("#ios").removeClass("loading");
        }, 8000);
    });

});