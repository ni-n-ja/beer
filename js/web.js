var canvas;
var context;
var x, y;

var absolute = 0;
var alpha = 0;
var beta = 0;
var gamma = 0;


function handleOrientation(event) {
    absolute = event.absolute;
    alpha = event.alpha;
    beta = event.beta;
    gamma = event.gamma;
}

function animate(timestamp) {
    context.clearRect(0, 0, 200, 200);

    context.strokeStyle = 'rgba(255,0,135,64)';
    canvas.fillRect(0, 0, 50, absolute);

    context.strokeStyle = 'rgba(0,0,255,64)';
    canvas.fillRect(50, 0, 50, alpha);

    context.strokeStyle = 'rgba(255,0,0,64)';
    canvas.fillRect(100, 0, 50, beta);

    context.strokeStyle = 'rgba(0,255,0,64)';
    canvas.fillRect(150, 0, 50, gamma);

    requestAnimationFrame(animate);
}

window.onload = function() {

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    window.addEventListener("deviceorientation", handleOrientation, true);
    console.log(absolute, alpha, beta, gamma);
    animate();

}
