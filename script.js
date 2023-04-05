const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 16;

contex.font = `bold ${FONT_SIZE}px monospace`;

let y = 0;

function animate() {
    contex.fillStyle = 'black';
    contex.fillRect(0, 0, canvas.width, canvas.height);

    contex.fillStyle = 'green';

    contex.fillText('M', 100, y);
    y += FONT_SIZE;

    setTimeout(() => requestAnimationFrame(animate), 50);
}

animate();
