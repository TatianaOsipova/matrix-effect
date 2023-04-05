const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 16;

contex.font = `bold ${FONT_SIZE}px monospace`;
contex.fillStyle = 'green';

contex.fillText('M', 100, 100);
contex.fillText('M', 100, 100 + 16);
