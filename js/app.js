// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');

// navbar 
let header = document.querySelector('header')
window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0)
})

// menu of navbar 
function toggleMenu(){
    let menuBtn = document.querySelector('.menuToggle')
    let navigation = document.querySelector('.navigation')
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
}


