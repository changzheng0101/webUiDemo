const slides = document.querySelectorAll('.slide')
const body = document.body
const left = document.getElementById('left')
const right = document.getElementById('right')

let current = 0

updateSlide()

function updateSlide() {
    body.style.backgroundImage = slides[current].style.backgroundImage
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[current].classList.add('active')
}

left.addEventListener('click', () => {
    if (current - 1 < 0) {
        current = slides.length - 1
    } else {
        current--
    }
    updateSlide()
})

right.addEventListener('click', () => {
    if (current + 1 > slides.length - 1) {
        current = 0
    } else {
        current++
    }
    updateSlide()
})
