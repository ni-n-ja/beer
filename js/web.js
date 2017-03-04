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
    context.beginPath();
    context.moveTo(1, 0);
    context.lineTo(1, absolute);
    context.stroke();

    context.strokeStyle = 'rgba(255,0,135,64)';
    context.beginPath();
    context.moveTo(3, 0);
    context.lineTo(3, alpha);
    context.stroke();

    context.strokeStyle = 'rgba(255,0,135,64)';
    context.beginPath();
    context.moveTo(4, 0);
    context.lineTo(4, beta);
    context.stroke();

    context.strokeStyle = 'rgba(255,0,135,64)';
    context.beginPath();
    context.moveTo(6, 0);
    context.lineTo(6, gamma);
    context.stroke();

    requestAnimationFrame(animate);
}

window.onload = function() {

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    window.addEventListener("deviceorientation", handleOrientation, true);
    console.log(absolute, alpha, beta, gamma);
    animate();

}
