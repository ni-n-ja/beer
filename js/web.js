var canvas;
var context;
var x, y;

var absolute = 0;
var alpha = 0;
var beta = 0;
var gamma = 0;

var abs;
var alp;
var bet;
var gam;

function handleOrientation(event) {
    absolute = event.absolute;
    alpha = event.alpha;
    beta = event.beta;
    gamma = event.gamma;
}

function animate(timestamp) {
    context.clearRect(0, 0, 200, 200);

    context.fillStyle = 'rgba(255,0,135,64)';
    context.fillRect(0, 0, 50, absolute);

    context.fillStyle = 'rgba(0,0,255,64)';
    context.fillRect(50, 0, 50, alpha);

    context.fillStyle = 'rgba(255,0,0,64)';
    context.fillRect(100, 0, 50, beta);

    context.fillStyle = 'rgba(0,255,0,64)';
    context.fillRect(150, 0, 50, gamma);

    abs.innerHTML = "abosolute: " + absolute;
    alp.innerHTML = "alpha: " + alpha;
    bet.innerHTML = "beta: " + beta;
    gam.innerHTML = "gumma: " + gamma;

    requestAnimationFrame(animate);
}

window.onload = function() {

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    abs = document.getElementById("abs");
    alp = document.getElementById("alp");
    bet = document.getElementById("bet");
    gam = document.getElementById("gam");

    window.addEventListener("deviceorientation", handleOrientation, true);
    console.log(absolute, alpha, beta, gamma);
    animate();

}
