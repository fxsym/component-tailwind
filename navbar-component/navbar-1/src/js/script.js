console.log('OK')
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#navMenu')
const navMenuContain = document.querySelector('#navMenuContain')
const coba = document.querySelector('#coba')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('max-h-100');
})
