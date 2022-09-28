const toggle = document.querySelector('.toggle')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', () => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        toggle.innerHTML = "Dark Mode"
    } else {
        html.classList.add('dark')
        toggle.innerHTML = "Light Mode"
    }
})

updateTime()

function updateTime() {
    const time = new Date()
    const hour = time.getHours()
    const hoursForClock = hour >= 13 ? hour % 12 : hour;
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const month = time.getMonth()
    const day = time.getDay() // 星期几
    const date = time.getDate()  // 几号


    hourEl.style.transform = ` translateY(-100%) rotate(${hour * 30 + minute * 0.5}deg)`
    minuteEl.style.transform = ` translateY(-100%) rotate(${minute * 6}deg)`
    secondEl.style.transform = ` translateY(-100%) rotate(${second * 6}deg)`

    timeEl.innerHTML = `${hoursForClock >= 10 ? hoursForClock : '0' + hoursForClock}:${minute >= 10 ? minute : '0' + minute}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setInterval(updateTime, 1000);