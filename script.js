const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 16;

contex.font = `bold ${FONT_SIZE}px monospace`;
contex.fillStyle = 'green';

let y = 0;

function animate() {
    contex.fillText('M', 100, y);
    y += FONT_SIZE;

    setTimeout(() => requestAnimationFrame(animate), 50);
}

animate();
