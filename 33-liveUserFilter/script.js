const search = document.getElementById('search')
const listItems = document.getElementById('user-list')
const userData = []

getData()
search.addEventListener('input', e => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    listItems.innerHTML = ''
    results.forEach(user => {
        const li = document.createElement('li')
        userData.push(li)
        li.innerHTML = `
        <li>
        <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        </li>
        `
        listItems.appendChild(li)
    })
}

function filterData(value) {
    userData.forEach(item => {
        console.log(item.innerText.toLowerCase());
        if (item.innerText.toLowerCase().includes(value.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}