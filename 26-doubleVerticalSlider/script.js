const rightEl = document.querySelector('.slide-right')
const leftEl = document.querySelector('.slide-left')
const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const slideLength = rightEl.querySelectorAll('div').length

let activeIndex = 1;

leftEl.style.transform = `translateY(-${(slideLength - 1) * 100}%)`
function changeActive(direction) {
    if (direction == 'up') {
        activeIndex++
        if (activeIndex > slideLength - 1) {
            activeIndex = 0
        }
    } else {
        activeIndex--
        if (activeIndex < 0) {
            activeIndex = slideLength - 1
        }
    }
    rightEl.style.transform = `translateY(-${activeIndex * 100}%)`
    leftEl.style.transform = `translateY(-${(slideLength - 1 - activeIndex) * 100}%)`
}

upButton.addEventListener('click', () => changeActive('up'))
downButton.addEventListener('click', () => changeActive('down'))

