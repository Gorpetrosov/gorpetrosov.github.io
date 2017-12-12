/********* SELECT *********/

var myCountry = document.getElementById('country');
var myCity = document.getElementById('city');

myCountry.onchange = function (e) {
    var countryValue = e.target.value;
    myCity.value = countryValue;
};

myCity.onchange = function (e) {
    var cityValue = e.target.value;
    myCountry.value = cityValue;
};

/********* END SELECT *********/



/********* MODAL *********/

var modal = document.getElementById('myModal');

document.getElementById('button').onclick = function () {
    modal.style.display = 'block';
};

document.getElementById('close').onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function(e) {
    if(e.target == modal){
        modal.style.display = "none";
    }
};


/********* END MODAL *********/



/********* FORM *********/

var inputLogin = document.getElementById('login');
var inputPassword = document.getElementById('password');
var myOutput = document.getElementById('output');

inputLogin.onfocus = function () {
    this.previousElementSibling.style.transform = 'translateY(0)';
    this.previousElementSibling.style.transition = 'all .3s';
    this.nextElementSibling.nextElementSibling.classList.remove('error');
    this.nextElementSibling.nextElementSibling.innerHTML = ' ';
    this.nextElementSibling.nextElementSibling.style.marginBottom = '34px';

};

inputLogin.onblur = function () {
    if (!this.value) {
        this.previousElementSibling.style.transform = 'translateY(20px)';
        this.nextElementSibling.nextElementSibling.classList.add('error');
        this.nextElementSibling.nextElementSibling.innerHTML = 'Your Input Is Epmty!';
        this.nextElementSibling.nextElementSibling.style.marginLeft = '33px';
        this.nextElementSibling.nextElementSibling.style.marginBottom = '-34px';
    }
};

inputLogin.oninput = function () {
    myOutput.value = this.value;
    myOutput.style.marginLeft = '220px';
};

inputPassword.onfocus = function () {
    this.previousElementSibling.style.transform = 'translateY(0)';
    this.previousElementSibling.style.transition = 'all .3s';
    this.nextElementSibling.classList.remove('error');
    this.nextElementSibling.innerHTML = ' ';

};

inputPassword.onblur = function () {
    if (!this.value) {
        this.previousElementSibling.style.transform = 'translateY(20px)';
        this.nextElementSibling.classList.add('error');
        this.nextElementSibling.innerHTML = 'Your Input Is Epmty!';
        this.nextElementSibling.style.marginLeft = '33px';
    }
};

var myEye = document.getElementById('eye');

myEye.onmousedown = function () {
    inputPassword.type = 'text'
};

myEye.onmouseup = function () {
    inputPassword.type = 'password'
};

/********* END FORM *********/

