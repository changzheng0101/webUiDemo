const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')


let val = 0
let loading = setInterval(update, 30);

function update() {
    val++

    if (val > 99) {
        clearInterval(loading)
    }
    loadingText.innerHTML = `${val}%`
    loadingText.style.opacity = scale(val, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(val, 0, 100, 20, 0)}px)`
}

// 缩放映射
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}