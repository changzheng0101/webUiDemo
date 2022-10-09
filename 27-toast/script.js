const button = document.getElementById("toast-btn")
const toastContainer = document.querySelector(".toast-container")

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => {
    const toast = document.createElement('div');
    toast.classList.add('toast')
    toast.classList.add(getRandomType())
    toast.innerText = getRandomMessage()
    toastContainer.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 2000);
})


function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}


function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}