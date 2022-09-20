const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')

let activeNum = 1;

next.addEventListener('click', () => {
    activeNum++
    if (activeNum > circles.length) {
        activeNum = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    activeNum--
    if (activeNum < 1) {
        activeNum = 1
    }
    update()
})


function update() {
    circles.forEach((circle, index) => {
        if (index < activeNum) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    progress.style.width =
        ((activeNum - 1) / (circles.length - 1)) * 100 + "%"

    if (activeNum === circles.length) {
        next.disabled = true;
    } else if (activeNum === 1) {
        prev.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}