const body = document.querySelector('body');

const dotOne = document.getElementById('dot-one');
const dotTwo = document.getElementById('dot-two');

const switchOne = document.getElementById('switch-one');
const switchTwo = document.getElementById('switch-two');

switchOne.addEventListener('click', () => {
    switchOne.classList.toggle('flex-end');
    body.classList.toggle('dark-mode');
})

switchTwo.addEventListener('click', () => {
    switchTwo.classList.toggle('flex-end');
    body.classList.toggle('star-mode');
    dotTwo.classList.toggle('star-mode');
})