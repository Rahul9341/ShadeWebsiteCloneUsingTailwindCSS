const hamburger = document.querySelector('#hamburger');

const hiddenContent = document.querySelector('#hiddenContent');

const cross = document.querySelector('#cross');

cross.addEventListener('click', () => {
    hiddenContent.classList.toggle('hidden');
})

hamburger.addEventListener('click', () => {
    hiddenContent.classList.toggle('hidden');
})

