
new universalParallax().init({
    speed: 8.0
});
// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        $("#return-to-top").fadeIn(200); // Fade in the arrow
    } else {
        $("#return-to-top").fadeOut(200); // Else fade out the arrow
    }
});
$("#return-to-top").click(function() {
    // When arrow is clicked
    $("body,html").animate(
        {
            scrollTop: 0 // Scroll to top of body
        },
        1100
    );
});


//popup function

var musicLove = document.getElementById("myMus");


document.querySelector('.openPopup').addEventListener('click', function() {

    var jPopupDemo = new jPopup({

        content: '<strong>Mistakes are proof that you are trying.</strong>\
                  <p>Be careful when you are fixing a BUG,may be you are creating other 10!</p>'

    });

});
document.querySelector('.openSecondPopup').addEventListener('click', function() {

    var jPopupDemo = new jPopup({

        content: '<strong>My skilles</strong>\
                    <p>HTML.</p>\
                    <p>CSS.</p>\
                    <p>JavaScript.</p>\
                    <p>Ajax.</p>\
                    <p>PHP.</p>\
                    <p>SQL.</p>'

    });
});
document.getElementById("on").onclick = function () {
    musicLove.play();
}
document.getElementById("off").onclick= function () {
    musicLove.pause();
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var open = document.getElementById("play");
var close = document.getElementById("closePlay");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    open.play();
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    close.play();
}
    //typing text
    // _(selector, speed, initialDelay)
    _$("demo", 100, 800)
    .type("Hello! Glade to see you here").wait(1000).speed(100)
    .lineBreak()
     .type("This is a little about me ").wait(300).speed(100)
    .lineBreak()
    .type("Born in 1991.01.31,Armenia").wait(300).speed(100)
    .lineBreak()
    .type("School from 1998 to 2008 ").wait(300).speed(100)
    .lineBreak()
    .type("Univercity From 2008 to 2014 ASUE").wait(300).speed(100)
    .lineBreak()
    .type("From 2009 to 2011 was in NKR  Army").wait(300).speed(100)
    .lineBreak()
    .type("Now i'm free developer", {
    fontWeight: "bold",
    color: "black",
}).speed(40)
    .delete("free").wait(1000).speed(200)
    .type("full stack", {
    fontWeight: "bold",
    color: "black",
}).wait(40)
    .type(" Developer!", {
    fontWeight: "bold",
    color: "black",
}).speed(1000)
    .lineBreak();
