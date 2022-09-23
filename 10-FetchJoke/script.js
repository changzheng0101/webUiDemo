const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

updateJoke()
jokeBtn.addEventListener('click', updateJoke)


// async/await
async function updateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    joke.innerText = data.joke
}


// fetch  method
// function updateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then(data => joke.innerText = data.joke)
// }