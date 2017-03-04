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

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext;
var buffer;
var source;
var request;

var flag = 0;
var timter;

var beer;

function handleOrientation(event) {
    absolute = event.absolute;
    alpha = event.alpha;
    beta = event.beta;
    gamma = event.gamma;
}

function animate(timestamp) {
    context.clearRect(0, 0, 200, 360);

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

    if (flag === 0 && beta < 0) {
        beer.add("deg");
        timer = window.setInterval(function() {
            window.navigator.vibrate(100);
        }, 200);

        flag = 1;
        source = audioContext.createBufferSource();
        audioContext.decodeAudioData(buffer, function(buf) {
            source.buffer = buf;
            source.connect(audioContext.destination);
            source.start(0);
        });
    }
    if (flag === 1 && beta > 1) {
        beer.remove("deg");
        clearInterval(timer);
        source.stop(0);
        flag = 0;
    }

    requestAnimationFrame(animate);
}

window.onload = function() {
    beer = document.getElementById("beer").classList;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    abs = document.getElementById("abs");
    alp = document.getElementById("alp");
    bet = document.getElementById("bet");
    gam = document.getElementById("gam");

    window.addEventListener("deviceorientation", handleOrientation, true);
    console.log(absolute, alpha, beta, gamma);

    audioContext = new AudioContext();
    buffer = null;
    source = audioContext.createBufferSource();
    request = new XMLHttpRequest();
    request.open('GET', 's2.mp3', true);
    request.responseType = 'arraybuffer';
    request.send();
    request.onload = function() {
        buffer = request.response;
        animate();
    };

    document.body.onclick = function() {
        if (flag === 0) {
            timer = window.setInterval(function() {
                window.navigator.vibrate(100);
            }, 200);
            beer.add("deg");
            flag = 1;
            source = audioContext.createBufferSource();
            audioContext.decodeAudioData(buffer, function(buf) {
                source.buffer = buf;
                source.connect(audioContext.destination);
                source.start(0);
            });
        } else if (flag === 1) {
            beer.remove("deg");
            clearInterval(timer);
            source.stop(0);
            flag = 0;
        }
    };
}
