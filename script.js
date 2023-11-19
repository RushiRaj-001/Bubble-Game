var hitrn;
var score = 0;
function makeBubble() {
    var cluster = "";
    for (i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10);
        cluster += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".btmPanCont").innerHTML = cluster;
}

function runTimer() {

    var timer = 60;
    var time = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeVal").textContent = timer;
        }
        else {
            clearInterval(time);
            document.getElementById("pan").classList.add("btmPanBox");
            document.querySelector(".btmPanCont").innerHTML = `<h1>Game Over </br> Your Score : ${score}</h1>`;
        }
    }, 1000)

}

function setHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function incScr() {

    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function scoreVal() {
    document.querySelector(".btmPanCont").addEventListener('click', function (details) {
        var check = Number(details.target.textContent);

        if (check === hitrn) {
            incScr();
            makeBubble();
            setHit();
        }
    })
}

makeBubble();
runTimer();
setHit();
scoreVal();
