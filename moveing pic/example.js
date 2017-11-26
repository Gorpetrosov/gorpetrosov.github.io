function change() {
    var photo = document.getElementById('photo');
    photo.src = "img/2.jpg";
}





function movePic() {
    var pic = document.getElementById('photo');
    var pos = 0;
    var timeInt = setInterval(setInt,10);
   function setInt() {
       if (pos === 750) {
           clearInterval(timeInt);
       } else {
           pos++;
           pic.style.left = pos + "px";
       }
   }
 }
