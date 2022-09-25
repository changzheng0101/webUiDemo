const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
    counter.innerText = "0"
    const update = () => {
        const numTarget = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = numTarget / 200
        if (c < numTarget) {
            counter.innerHTML = `${Math.floor(c + increment)}`
            setTimeout(update, 1)
        } else {
            counter.innerHTML = numTarget
        }
    }
    update()
})