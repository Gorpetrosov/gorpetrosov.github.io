
document.onmousemove = function moveBlock(event) {
    var x = event.clientX;
    var y = event.clientY;
    var d= document.getElementById('block');
    d.style.top = y + 'px';
    d.style.left = x + 'px';

}
moveBlock(event);

