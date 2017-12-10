
// creating canvas bord

var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var paint=false;
myCanvas.addEventListener('mousedown',start);
myCanvas.addEventListener('mousemove',draw);
myCanvas.addEventListener('mouseup',stop);
// writing on board
    window.onload = function() {
        // Fill Window Width and Height
        myCanvas.width = 1000;
        myCanvas.height =360;

        // Set Background Color
        ctx.fillStyle="#fff";
        ctx.fillRect(0,0,myCanvas.width,myCanvas.height);

        // Mouse Event Handlers
        if(myCanvas){
            var isDown = false;
            var canvasX, canvasY;
            ctx.lineWidth = 1;

            $(myCanvas)
                .mousedown(function(e){
                    isDown = true;
                    ctx.beginPath();
                    canvasX = e.pageX - myCanvas.offsetLeft;
                    canvasY = e.pageY - myCanvas.offsetTop;
                    ctx.moveTo(canvasX, canvasY);
                })
                .mousemove(function(e){
                    if(isDown !== false) {
                        canvasX = e.pageX - myCanvas.offsetLeft;
                        canvasY = e.pageY - myCanvas.offsetTop;
                        ctx.lineTo(canvasX, canvasY);
                        ctx.stroke();
                    }
                })
                .mouseup(function(e){
                    isDown = false;
                    ctx.closePath();
                });
        }

        // Touch Events Handlers
        draw = {
            started: false,
            start: function(evt) {

                ctx.beginPath();
                ctx.moveTo(
                    evt.touches[0].pageX,
                    evt.touches[0].pageY
                );

                this.started = true;

            },
            move: function(evt) {

                if (this.started) {
                    ctx.lineTo(
                        evt.touches[0].pageX,
                        evt.touches[0].pageY
                    );

                    // ctx.strokeStyle = "#000";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

            },
            end: function(evt) {
                this.started = false;
            }
        };

        // Touch Events
        myCanvas.addEventListener('touchstart', draw.start, false);
        myCanvas.addEventListener('touchend', draw.end, false);
        myCanvas.addEventListener('touchmove', draw.move, false);

        // Disable Page Move
        document.body.addEventListener('touchmove',function(evt){
            evt.preventDefault();
        },false);
    };


//clear blackbord
 function  clearCanvas() {
     myCanvas.height = 360;

 }


 //colorPicker set


var points=new Array();

var color = "rgb(0,0,0)";

function change(e){
    color = this.value;
}

document.getElementById("colorWell").onchange = change;

function start(e){
    var mouseX = e.pageX - myCanvas.offsetLeft;
    var mouseY = e.pageY - myCanvas.offsetTop;
    paint = true;
    ctx.beginPath();
    ctx.moveTo(mouseX,mouseY);
    points[points.length]=[mouseX,mouseY];
};

function draw(e){

    if(paint){
        var mouseX = e.pageX - myCanvas.offsetLeft;
        var mouseY = e.pageY - myCanvas.offsetTop;
        ctx.lineTo(mouseX,mouseY);
        ctx.stroke();
        ctx.strokeStyle = color;
        ctx.lineJoin = ctx.lineCap = 'round';

        points[points.length]=[mouseX,mouseY];
    }

}
function stop(e){
    paint=false;
    var s=JSON.stringify(points);
    localStorage['lines']=s;
}

// loader
$(document).ready(function () {
    $(".dws-progress-bar").circularProgress({
        color: "#25ffe4",
        line_width: 17,
        height: "350px",
        width: "350px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 25
    }).circularProgress('animate', 100, 2000);
});

$(window).on('load', function () {
    var $preloader = $('#preloader');
    $preloader.delay(2000).fadeOut('slow');
});

// time button
function currentTimeC() {
    var clockBlock = document.getElementById('clock');

    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    var seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    clockBlock.innerHTML = hours + " : " + minutes + " : " + seconds;
}
setInterval(currentTimeC);

// music player


var audioPlayer = document.querySelector('.green-audio-player');
var playPause = audioPlayer.querySelector('#playPause');
var playpauseBtn = audioPlayer.querySelector('.play-pause-btn');
var loading = audioPlayer.querySelector('.loading');
var progress = audioPlayer.querySelector('.progress');
var sliders = audioPlayer.querySelectorAll('.slider');
var volumeBtn = audioPlayer.querySelector('.volume-btn');
var volumeControls = audioPlayer.querySelector('.volume-controls');
var volumeProgress = volumeControls.querySelector('.slider .progress');
var player = audioPlayer.querySelector('audio');
var currentTime = audioPlayer.querySelector('.current-time');
var totalTime = audioPlayer.querySelector('.total-time');
var speaker = audioPlayer.querySelector('#speaker');

var draggableClasses = ['pin'];
var currentlyDragged = null;

window.addEventListener('mousedown', function (event) {

    if (!isDraggable(event.target)) return false;

    currentlyDragged = event.target;
    var handleMethod = currentlyDragged.dataset.method;

    this.addEventListener('mousemove', window[handleMethod], false);

    window.addEventListener('mouseup', function () {
        currentlyDragged = false;
        window.removeEventListener('mousemove', window[handleMethod], false);
    }, false);
});

playpauseBtn.addEventListener('click', togglePlay);
player.addEventListener('timeupdate', updateProgress);
player.addEventListener('volumechange', updateVolume);
player.addEventListener('loadedmetadata', function () {
    totalTime.textContent = formatTime(player.duration);
});
player.addEventListener('canplay', makePlay);
player.addEventListener('ended', function () {
    playPause.attributes.d.value = "M18 12L0 24V0";
    player.currentTime = 0;
});

volumeBtn.addEventListener('click', function () {
    volumeBtn.classList.toggle('open');
    volumeControls.classList.toggle('hidden');
});

window.addEventListener('resize', directionAware);

sliders.forEach(function (slider) {
    var pin = slider.querySelector('.pin');
    slider.addEventListener('click', window[pin.dataset.method]);
});

directionAware();

function isDraggable(el) {
    var canDrag = false;
    var classes = Array.from(el.classList);
    draggableClasses.forEach(function (draggable) {
        if (classes.indexOf(draggable) !== -1) canDrag = true;
    });
    return canDrag;
}

function inRange(event) {
    var rangeBox = getRangeBox(event);
    var rect = rangeBox.getBoundingClientRect();
    var direction = rangeBox.dataset.direction;
    if (direction == 'horizontal') {
        var min = rangeBox.offsetLeft;
        var max = min + rangeBox.offsetWidth;
        if (event.clientX < min || event.clientX > max) return false;
    } else {
        var min = rect.top;
        var max = min + rangeBox.offsetHeight;
        if (event.clientY < min || event.clientY > max) return false;
    }
    return true;
}

function updateProgress() {
    var current = player.currentTime;
    var percent = current / player.duration * 100;
    progress.style.width = percent + '%';

    currentTime.textContent = formatTime(current);
}

function updateVolume() {
    volumeProgress.style.height = player.volume * 100 + '%';
    if (player.volume >= 0.5) {
        speaker.attributes.d.value = 'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z';
    } else if (player.volume < 0.5 && player.volume > 0.05) {
        speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z';
    } else if (player.volume <= 0.05) {
        speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667';
    }
}

function getRangeBox(event) {
    var rangeBox = event.target;
    var el = currentlyDragged;
    if (event.type == 'click' && isDraggable(event.target)) {
        rangeBox = event.target.parentElement.parentElement;
    }
    if (event.type == 'mousemove') {
        rangeBox = el.parentElement.parentElement;
    }
    return rangeBox;
}

function getCoefficient(event) {
    var slider = getRangeBox(event);
    var rect = slider.getBoundingClientRect();
    var K = 0;
    if (slider.dataset.direction == 'horizontal') {

        var offsetX = event.clientX - slider.offsetLeft;
        var width = slider.clientWidth;
        K = offsetX / width;
    } else if (slider.dataset.direction == 'vertical') {

        var height = slider.clientHeight;
        var offsetY = event.clientY - rect.top;
        K = 1 - offsetY / height;
    }
    return K;
}

function rewind(event) {
    if (inRange(event)) {
        player.currentTime = player.duration * getCoefficient(event);
    }
}

function changeVolume(event) {
    if (inRange(event)) {
        player.volume = getCoefficient(event);
    }
}

function formatTime(time) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return min + ':' + (sec < 10 ? '0' + sec : sec);
}

function togglePlay() {
    if (player.paused) {
        playPause.attributes.d.value = "M0 0h6v24H0zM12 0h6v24h-6z";
        player.play();
    } else {
        playPause.attributes.d.value = "M18 12L0 24V0";
        player.pause();
    }
}

function makePlay() {
    playpauseBtn.style.display = 'block';
    loading.style.display = 'none';
}

function directionAware() {
    if (window.innerHeight < 250) {
        volumeControls.style.bottom = '-54px';
        volumeControls.style.left = '54px';
    } else if (audioPlayer.offsetTop < 154) {
        volumeControls.style.bottom = '-164px';
        volumeControls.style.left = '-3px';
    } else {
        volumeControls.style.bottom = '52px';
        volumeControls.style.left = '-3px';
    }
}