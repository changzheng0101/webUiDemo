const background = document.getElementById("background")
const passwordEl = document.getElementById("password")

passwordEl.addEventListener("input", (e) => {
    const length = e.target.value.length;
    background.style.filter = `blur(${20 - length * 2}px)`
})