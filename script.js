const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

contex.font = 'bold 16px monospace';
contex.fillStyle = 'green';

contex.fillText('M', 100, 100);
