// for IE 9
var console = { log: function() {} };
//end ie 9
// runniong full page
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: [/*'#1bbc9b',*/ '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'biography', 'mywork', 'contacts', 'lastPage'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000
    });

    $('#showExamples').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#examplesList').toggle();
        document.getElementById("up").play();
    });

    $('html').click(function(){
        $('#examplesList').hide();
        // document.getElementById("up").play();
    });
    $("#mus").click(function() {
        document.getElementById("up").play();
    });
});
//ends full page code
//particles paging
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
                "value": 2,
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
//ending particles paging
// first page animation text
$(document).ready(function() {
    // $("#regTitle").html("Hello World");
    $("#stage").delay(15000).hide(0);

});

var leftinner= document.getElementById("leftinner");
var backing= document.getElementById("backing");
var rightinner = document.getElementById("rightinner");
function changeGlob() {
        leftinner.innerHTML = "welcome";
        backing.innerHTML = "welcome";
        rightinner.innerHTML = "welcome";
}
setInterval(changeGlob,7000);