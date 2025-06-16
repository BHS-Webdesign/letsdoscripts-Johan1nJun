const frames = document.querySelectorAll('.frame');
let current = 0;

frames.forEach((frame, i) => {
    frame.style.display = i === 0 ? 'block' : 'none';
});


document.body.addEventListener('click', () => {
    frames[current].style.display = 'none';
    current = (current + 1) % frames.length; 
    frames[current].style.display = 'block';
});