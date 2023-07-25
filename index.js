const W = 1650;
const H = 890;

/**
 * @type {HTMLCanvasElement}
 */

let canvas = document.getElementById('myCanvas');
let pen = canvas.getContext('2d');
pen.canvas.width = W;
pen.canvas.height = H;
pen.canvas.style.border = '10px solid black';

    function drawSmileFace(dx, dy, size, skin){
        pen.beginPath();
        pen.arc(dx, dy, size, 0,  2*Math.PI);
        pen.fillStyle = skin;
        pen.stroke();
        pen.fill();
        pen.closePath();
    }

    drawSmileFace(W/2, H/2, 200, "red");

    function loop() {
        const FPS = 120; 
        let timeLoop = 1000 / FPS; 
        let size = 200;
        let dy = H / 2;
        let dx = W / 2;
        let colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];
        let currentColorIndex = 0;
        let direction = 1; 
    
        setInterval(() => {
            pen.clearRect(0, 0, W, H); 
            dx += Math.random() * 10 * direction; 
            dy += Math.random() * 10 * direction; 
            pen.beginPath();
            drawSmileFace(dx, dy, size, colors[currentColorIndex]);
            if (dx >= W || dx <= 0) {
                direction *= -1;
                currentColorIndex = (currentColorIndex + 1) % colors.length;
            }
    
            pen.closePath();
        }, timeLoop);
    }
    
    loop();
    
    
    
    
    
    
    