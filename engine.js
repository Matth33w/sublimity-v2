var particleList = [];

const canvas = document.querySelector("#particle-container");
const context = canvas.getContext("2d");

class Particle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xIncrease = 0;
        this.yIncrease = 0;
    }

    setInitialPosition() {
        this.x = Math.random();
        this.y = Math.random();
    }
}

function particleRender() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for(var i = 0; i < particleList.length; i++) {
        context.beginPath();
        context.fillStyle = "#725AC1";
        context.arc(canvas.width * particleList[i].x, canvas.height * particleList[i].y, 2, 0, 2 * Math.PI);
        context.fill();
    }
}

function init() {
    for(var i = 0; i < 40; i++) {
        const particle = new Particle();
        particle.setInitialPosition();
        var xOrientationChance = Math.random();
        var yOrientationChance = Math.random();

        if(xOrientationChance > 0.5)
            particle.xIncrease = 0.0002;
        else
            particle.xIncrease = -0.0002;

        if(yOrientationChance > 0.5)
            particle.yIncrease = 0.0002;
        else
            particle.yIncrease = -0.0002;

        particleList.push(particle);
    }

    setInterval(() => {
        for(var i = 0; i < particleList.length; i++) {
            particleList[i].x += particleList[i].xIncrease;
            particleList[i].y += particleList[i].yIncrease;

            if(particleList[i].x > 1) {
                particleList[i].x = 0; 
            } else if(particleList[i].x < 0) {
                particleList[i].x = 1; 
            }

            if(particleList[i].y > 1) {
                particleList[i].y = 0; 
            } else if(particleList[i].y < 0) {
                particleList[i].y = 1; 
            }
        }

        particleRender();
    }, 1000 / 60);
}

function resetCanvasSize() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}

init();
resetCanvasSize();
window.addEventListener("resize", ev => { resetCanvasSize(); })