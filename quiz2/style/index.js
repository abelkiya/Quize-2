const color = document.getElementById('color');
const position = document.getElementById('position');





color.addEventListener('mouseover', () => {
    color.style.borderColor = 'red';
});

color.addEventListener('mouseout', () => {
    color.style.borderColor = 'black';
});

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    position.textContent = `X ${x}, Y: ${y}`;
    createMouseTrail(x, y);
});


function createMouseTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('mouse-trail');
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 200);
}


