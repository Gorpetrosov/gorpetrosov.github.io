
new universalParallax().init({
    speed: 8.0
});

//popup function

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
