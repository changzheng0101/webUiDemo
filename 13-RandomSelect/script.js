const tags = document.querySelector('.tags')
const textarea = document.querySelector('#textarea')


textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)


    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 100);

        randomSelect()
    }
})

function createTags(value) {
    const results = value.split(',')
        .map(item => item.trim())
        .filter(item => item.length > 0)

    tags.innerHTML = ''

    results.forEach(item => {
        const tag = document.createElement('span')
        tag.classList.add('tag')
        tag.innerHTML = item
        tags.appendChild(tag)
    })
}


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const tag = pickRandomTag()
        highLightTag(tag)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const tag = pickRandomTag()
            tag.classList.add('highlight')
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag(tag) {
    tag.classList.add('highlight')
    setTimeout(() => {
        tag.classList.remove('highlight')
    }, 100);
}