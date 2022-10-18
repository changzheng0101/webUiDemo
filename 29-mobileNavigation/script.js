const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item,idx)=>{
    item.addEventListener("click",()=>{
        contents.forEach(item => item.classList.remove("show"))
        listItems.forEach(item=> item.classList.remove("active"))
        contents[idx].classList.add("show")
        item.classList.add("active")
    })
})