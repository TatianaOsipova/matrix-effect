import { Column } from "./column.js";

const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 16;

context.font = `bold ${FONT_SIZE}px monospace`;

const column = new Column(100, FONT_SIZE, canvas.height, context);

function animate() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'green';
    column.drawSymbol();


    // context.fillText('M', 100, y);
    // y += FONT_SIZE;

    setTimeout(() => requestAnimationFrame(animate), 50);
}

animate();
