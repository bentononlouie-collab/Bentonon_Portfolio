console.log("Script Loaded");

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = document.documentElement.scrollHeight;

let starsArray = [];

class Star{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2;
        this.opacity = Math.random();
        this.direction = Math.random() * 0.02;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255," + this.opacity + ")";
        ctx.fill();
    }

    update(){
        this.opacity += this.direction;
            if(this.opacity <= 0 || this.opacity >= 1){
                this.direction = -this.direction;
            }
        this.draw();
    }
}

function initStars(){
    starsArray = [];
        for(let i = 0; i<1500; i++){
            starsArray.push(new Star());
        }
}

function animateStars(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    starsArray.forEach(star => {star.update();});
    requestAnimationFrame(animateStars);
}

initStars();
animateStars();

window.addEventListener('resize', () =>{canvas.width = window.innerWidth; canvas.height = window.innerHeight; initStars();});