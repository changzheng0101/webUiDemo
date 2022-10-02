const canvas = document.getElementById('canvas')
const colorEl = document.getElementById('color')
const increaseEl = document.getElementById('increase')
const decreaseEl = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const clearEl = document.getElementById('clear')

const ctx = canvas.getContext('2d')


let color = colorEl.value
let size = sizeEl.innerText
let isPressed = false
let x, y

increaseEl.addEventListener('click', () => {
    let newSize = +size + 5
    if (newSize <= 30) {
        sizeEl.innerText = newSize
        size = newSize
    }
})

decreaseEl.addEventListener('click', () => {
    let newSize = +size - 5
    if (newSize >= 5) {
        sizeEl.innerText = newSize
        size = newSize
    }
})

colorEl.addEventListener('change',(e)=>{
    color = e.target.value
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

document.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', () => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawLine(x, y, x2, y2)
        drawCircle(x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size / 2, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}


function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size
    ctx.stroke()
}