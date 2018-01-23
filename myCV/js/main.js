
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
    document.getElementById("up").play();
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

/// new page open/cloaser
// var myWindow;
//
// function openWin() {
//     myWindow = window.open("", "myWindow", "width=300,height=150");
//     myWindow.open("index.html","_self");
// }
//
// function closeWin() {
//     myWindow.close();
// }
//owl
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop:true,
                nav:false,
                ouchDrag: true,
                autoplayHoverPause:false,
                dots: false
            },
            400:{
                items:2,
                loop: true,
                ouchDrag: true,
                autoplayHoverPause:false,
                dots: false
            },
            600:{
                items:3,
                loop:true,
                nav:false,
                ouchDrag:true,
                autoplayHoverPause:false,
                dots: false
            },
            800: {
                items:4,
                loop:true,
                nav:false,
                ouchDrag:true,
                autoplayHoverPause:false,
                dots: false
            },
            1000:{
                items:5,
                nav:true,
                loop:true,
                // animateOut:false,
                autoplayHoverPause:false,
                margin:20,
                touchDrag: true
            }
        }
    });

});
//footer
let max_particles = 150;
let particles = [];
let frequency = 200;

// Popolate particles
popolate(max_particles);

var tela = document.createElement("canvas");
tela.width = $(window).width();
tela.height = $("#foot").height();
$("#foot").append(tela);

var canvas = tela.getContext("2d");

class Particle {
    constructor(canvas) {
        let colors = ["#E5493F", "#55C1FF", "#26B9A0", "#5A52FF"];
        // let colors = ["#feea00","#a9df85","#5dc0ad", "#ff9a00","#fa3f20"]
        let types = ["full", "fill", "empty", "square", "square-in-circle"];
        this.random = Math.random();
        this.canvas = canvas;

        this.lineWidth = 0.2 + 2.8 * this.random;

        this.speed = 2 + Math.random() * 3;

        this.progress = 0;
        this.progress_inc =
            this.random > 0.5
                ? this.random * (this.speed * 1.5)
                : this.random * -(this.speed * 1.5);

        this.vx = Math.random() * this.speed - Math.random() * this.speed;
        this.vy = Math.random() * this.speed - Math.random() * this.speed;
        this.radius = 10 + Math.round(Math.random() * 50);
        this.w = $(window).width();
        this.h = $("#foot").height();
        this.x = (this.w - this.radius) / 2;
        this.y = (this.h - this.radius) / 2;

        this.radius = 1 + 8 * this.random;
        this.type = types[this.randomIntFromInterval(0, types.length - 1)];
        this.color = colors[this.randomIntFromInterval(0, colors.length - 1)];
    }

    getCoordinates() {
        return {
            x: this.x,
            y: this.y
        };
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        // Create arc
        let color = this.color;
        switch (this.type) {
            case "square":
                this.drawRotatedRect(
                    this.x,
                    this.y,
                    this.radius * 2,
                    this.radius * 2,
                    this.progress,
                    color
                );
                break;
            case "square-in-circle":
                this.drawRotatedRect(
                    this.x,
                    this.y,
                    this.radius * 2,
                    this.radius * 2,
                    this.progress,
                    color
                );
                this.createArcEmpty(
                    this.radius + this.lineWidth * 3,
                    this.lineWidth,
                    color
                );
                break;
            case "full":
                this.createArcFill(this.radius, color);
                this.createArcEmpty(
                    this.radius + this.lineWidth,
                    this.lineWidth / 2,
                    color
                );
                break;
            case "fill":
                this.createArcFill(this.radius, color);
                break;
            case "empty":
                this.createArcEmpty(this.radius, this.lineWidth, color);
                break;
        }
    }

    createArcFill(radius, color) {
        this.canvas.beginPath();
        this.canvas.arc(this.x, this.y, radius / 1.5, 0, 2 * Math.PI);
        this.canvas.fillStyle = color;
        this.canvas.fill();
        this.canvas.closePath();
    }

    createArcEmpty(radius, lineWidth, color) {
        this.canvas.beginPath();
        this.canvas.arc(this.x, this.y, radius, 0, 2 * Math.PI);
        this.canvas.lineWidth = lineWidth;
        this.canvas.strokeStyle = color;
        this.canvas.stroke();
        this.canvas.closePath();
    }

    drawRotatedRect(x, y, width, height, degrees, color) {
        this.canvas.save();
        this.canvas.beginPath();
        this.canvas.translate(
            x - this.radius + width / 2,
            y - this.radius + height / 2
        );
        this.canvas.rotate(degrees * Math.PI / 180);
        this.canvas.rect(-(width / 2), -(height / 2), width, height);
        this.canvas.fillStyle = color;
        this.canvas.fill();
        this.canvas.restore();
    }

    move() {
        this.progress += this.progress_inc;
        let diff = this.radius;
        switch (this.type) {
            case "full":
                diff = this.radius + this.lineWidth * 2;
                break;
            case "square-in-circle":
                diff = this.radius + this.lineWidth * 3;
                break;
            case "empty":
                diff = this.radius + this.lineWidth;
                break;
        }

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if (this.x < diff || this.x > this.w - diff) {
            this.vx = -this.vx;
        }
        if (this.y < diff || this.y > this.h - diff) {
            this.vy = -this.vy;
        }
        this.render();
        return true;
    }

    calculateDistance(v1, v2) {
        let x = Math.abs(v1.x - v2.x);
        let y = Math.abs(v1.y - v2.y);
        return Math.sqrt(x * x + y * y);
    }
}

/*
 * Function to clear layer canvas
 * @num:number number of particles
 */
function popolate(num) {
    for (var i = 0; i < num; i++) {
        setTimeout(
            (function(x) {
                return function() {
                    // Add particle
                    particles.push(new Particle(canvas));
                };
            })(i),
            frequency * i
        );
    }
    return particles.length;
}

function clear() {
    canvas.fillStyle = "#101018";
    canvas.fillRect(0, 0, tela.width, tela.height);
}

function calculateDistance(v1, v2) {
    let x = Math.abs(v1.x - v2.x);
    let y = Math.abs(v1.y - v2.y);
    return Math.sqrt(x * x + y * y);
}

function connection() {
    let old_element = null;
    $.each(particles, function(i, element) {
        if (i > 0 && (i % 3 == 0 || i % 7 == 0)) {
            let box1 = old_element.getCoordinates();
            let box2 = element.getCoordinates();
            canvas.beginPath();
            canvas.moveTo(box1.x, box1.y);
            canvas.lineTo(box2.x, box2.y);
            canvas.lineWidth = 0.8;
            canvas.strokeStyle = "#32323C";
            if (i % 7 == 0) {
                //canvas.strokeStyle="#3f47ff";
            }
            canvas.stroke();
            canvas.closePath();
        }

        old_element = element;
    });
}

/*
 * Function to update particles in canvas
 */
function update() {
    clear();
    connection();
    particles = particles.filter(function(p) {
        return p.move();
    });
    requestAnimationFrame(update.bind(this));
}

update();
///////////////////////////////////////////////////bg1 section canvas
/* Otherwise just put the config content (json): */

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 200,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,

    }

);
//end bg1 section canvas
