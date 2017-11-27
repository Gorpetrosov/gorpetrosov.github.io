

function func() {
    var valLeft = document.getElementById("ran1").value;
    document.getElementById("t1").value = valLeft;
    var valRight = document.getElementById("ran2").value;
    document.getElementById("t2").value = valRight;
    var valUp = document.getElementById("ran3").value;
    document.getElementById("t3").value = valUp;
    var valBotton = document.getElementById("ran4").value;
    document.getElementById("t4").value = valBotton;

    var div = document.getElementById("gen");
   div.style.borderRadius = valLeft+ "%"+ " "+ valRight + "%"+ " "+ valUp + "%"+ " " + valBotton + "%";
}


