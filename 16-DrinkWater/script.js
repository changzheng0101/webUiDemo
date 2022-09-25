const smallCups = document.querySelectorAll('.cup-small')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const liters = document.getElementById('liters')

updateBigCup(-1)

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => {
        updateCups(index)
    })
})

function updateCups(index) {
    if (index === smallCups.length - 1 &&
        smallCups[index].classList.contains('full')) {
        index--
    }
    else if (smallCups[index].classList.contains('full') &&
        !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    smallCups.forEach((cup, idx) => {
        if (idx <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup(index)
}

function updateBigCup(index) {

    const left = 2 - (index + 1) * 0.25
    if (left === 0) {
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${left}L`
    }

    if (index === -1) {
        percentage.style.height = 0
        percentage.style.visibility='hidden'
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height=`${(index+1)/smallCups.length*320}px`
        percentage.innerText = `${(2 - left) / 2 * 100}%`
    }
}