document.onclick = function (e) {
    var ball = document.createElement('div');
    ball.className = 'ball';
    document.body.appendChild(ball);
    ball.style.left = e.clientX-150 + 'px';
    ball.style.top = e.clientY-150 + 'px';
    ball.style.backgroundColor = getRandomInt()   ;
    console.log(e.clientX);

};

function getRandomInt() {
    var r,g,b,result;
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    result = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return result;
}