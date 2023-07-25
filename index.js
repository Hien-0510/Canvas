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
        pen.arc(dx, dy, size, Math.PI/2, 3 * Math.PI/2);
        pen.fillStyle = skin;
        pen.stroke();
        pen.fill();
        pen.closePath();
    }

    drawSmileFace(W/2, H/2, 200, "red");

    function loop(){
        const FPS = 60;
        let timeLoop = 1000/FPS; // Thời gian 1 frame
        let size = 200;
        setInterval(() => {
            
        }, timeLoop);
    }
    loop();