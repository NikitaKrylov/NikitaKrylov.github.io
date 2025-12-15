const draggables = document.querySelectorAll('.draggable');


let active = null;


function onMouseMove(e) {
if (!active) return;
active.style.left = e.clientX - active.offsetWidth / 2 + 'px';
active.style.top = e.clientY - active.offsetHeight / 2 + 'px';
}


function onMouseUp() {
if (!active) return;
active.style.cursor = 'grab';
active = null;
document.removeEventListener('mousemove', onMouseMove);
document.removeEventListener('mouseup', onMouseUp);
}


draggables.forEach(el => {
el.addEventListener('mousedown', e => {
e.preventDefault();
active = el;


const rect = el.getBoundingClientRect();
el.style.position = 'absolute';
el.style.left = rect.left + 'px';
el.style.top = rect.top + 'px';
el.style.zIndex = 1000;
el.style.cursor = 'grabbing';


document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
});
});
