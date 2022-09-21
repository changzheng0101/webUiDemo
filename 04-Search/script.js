const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

let flag = true;

btn.addEventListener('click', () => {
    if (flag) {
        console.log(flag);
        search.classList.add('active')
        input.focus()
        flag = false
    }
    setTimeout(() => {
        flag = true
    }, 100);
})

input.addEventListener('blur', () => {
    if (flag) {
        console.log(flag);
        search.classList.remove('active')
        flag = false
    }
    setTimeout(() => {
        flag = true
    }, 100);
})