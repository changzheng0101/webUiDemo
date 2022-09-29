const button = document.querySelector('button')

button.addEventListener('click', function (e) {
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = `${e.offsetY}px`
    circle.style.left = `${e.offsetX}px`
    this.appendChild(circle)
    setTimeout(() => {
        circle.remove()
    }, 300);
})