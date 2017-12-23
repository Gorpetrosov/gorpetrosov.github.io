var eye = document.getElementById('eye');
var eye1 = document.getElementById('eye1');
var pass = document.getElementById('password');
var rePass = document.getElementById('repassword');
var email = document.getElementById('email');
var username = document.getElementById('username');
var check = document.getElementById('checks');
var alertMsg = document.getElementById('alert');
var send = document.getElementById('sub');
var image = document.getElementById('avatar');
var emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var passTest = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/;
// This regex can be used to restrict passwords to a
// length of 8 to 20 aplhanumeric characters and select
// special characters. The password also can not start
// with a digit, underscore or special character and
// must contain at least one digit.
var userTest = /^\w+$/;

// function to show/hide password
eye.onmousedown = function () {
   pass.type = "text"
};
eye.onmouseup = function () {
    pass.type = "password"
};

eye1.onmousedown = function () {
    rePass.type = "text"
};
eye1.onmouseup = function () {
    rePass.type = "password"
};
send.onclick = function () {
    // testing inputs for username
    if(!userTest.test(username.value)) {
        alertMsg.innerHTML = "Incorect Username!";
        alertMsg.style.display = "block";
        username.focus();
        return false;
    }else if(!emailTest.test(email.value)) {
        alertMsg.innerHTML = "Incorect Email!";
        alertMsg.style.display = "block";
        send.setAttribute("disabled");
        email.focus();
        return false;
    }else if(!passTest.test(pass.value)) {
        alertMsg.innerHTML = "Incorect Password!";
        alertMsg.style.display = "block";
        pass.focus();
        return false;
    }else if(pass.value !== rePass.value) {
        alertMsg.innerHTML = "Incorect Confirm Password!";
        alertMsg.style.display = "block";
        rePass.focus();
        return false;
    }else if(image.value == "") {
        alertMsg.innerHTML = "Choose avatar photo please!";
        alertMsg.style.display = "block";
        image.focus();
        return false;
    }else if(!check.checked){
        alertMsg.innerHTML = "Please check that you are agree with Terms and conditions";
        alertMsg.style.display = "block";
        check.focus();
        return false;
    }else {
        alertMsg.style.display = "none";
        window.location = "http://localhost:63342/RegForm/user.html";
        return true;
    }

};
