// document.onclick = function (e) {
//     var photo = document.getElementById('photo');
//     var left = e.clientX-75 ;
//     var top = e.clientY-200;
//     if (left > 1230){
//         left -= 58;
//     } else if(left < -74){
//         left +=65
//     } else if(top < -140){
//         top +=60
//     } else if(top > 265){
//         top -= 180
//     }
//     photo.style.left = left + 'px';
//     photo.style.top = top + 'px';
// };



$(document).ready(function () {
    var XPosition = 0;
    var YPosition = 0;
    var $go = $("#photo");
    $(document).click(function (e) {
        XPosition = e.pageX - 75;
        YPosition = e.pageY - 200;
        if (XPosition > 1230) {
            XPosition -= 58;
        } else if (XPosition < -74) {
            XPosition += 65
        } else if (YPosition < -140) {
            YPosition += 60
        } else if (YPosition > 265) {
            YPosition -= 180
        }
        $go.stop().animate({ top: YPosition, left: XPosition })
    })
});











