
var log = document.getElementById('login');
var pass = document.getElementById('password');
var output = document.getElementById('output');
var eye = document.getElementById('btn');

log.onblur = function () {
    if(!this.value){
        this.nextElementSibling.innerHTML = "Input value in login field";

    }
};

log.onfocus = function () {
    this.nextElementSibling.innerHTML = "";
};

pass.onfocus = function () {
    this.nextElementSibling.innerHTML = "";
};


pass.onblur = function () {
    if(!this.value){
        this.nextElementSibling.innerHTML = "Input value in login field";

    }
};
log.oninput = function () {
    output.innerText = this.value;
};

eye.onmousedown = function () {
   pass.type = "text";
};

eye.onmouseup = function () {
    pass.type = "password";
};
