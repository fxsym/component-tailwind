console.log('OK')
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#navMenu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('navActive')
})