const APIURL = 'https://api.github.com/users/'


const main = document.getElementById('main')
const form = document.querySelector('form')
const search = document.getElementById('search')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = search.value
    if (username) {
        const data = getGithubInfoByUsername(username)
        // updateView(data)
        search.value = ''
    }
})

async function getGithubInfoByUsername(username) {
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)
    } catch (error) {
        if (error.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}


function createUserCard(data) {
    const userId = data.name || data.login
    const userBio = data.bio ? `<p>${data.bio}</p>` : ''
    const cardHtml = `
    <div class="left"><img src="${data.avatar_url}" alt="${data.name}"></div>
    <div class="right">
        <h1>${userId}</h1>
        ${userBio}
        <ul>
        <li>${data.followers} <strong>Followers</strong></li>
        <li>${data.following} <strong>Following</strong></li>
        <li>${data.public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos" class="repos"></div>
    </div>
    `
    main.innerHTML = cardHtml
}

function createErrorCard(msg) {
    const cardHTML = `
            <h1>${msg}</h1>
    `
    main.innerHTML = cardHTML
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch(err) {
        createErrorCard('Problem fetching repos')
    }
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name
            reposEl.appendChild(repoEl)
        })
}