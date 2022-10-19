const add = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))
if (notes) {
    notes.forEach(text => addNewNote(text))
}


add.addEventListener('click', () => {
    addNewNote()
})


function addNewNote(text = '') {
    const noteEl = document.createElement('div')
    noteEl.classList.add('note')
    noteEl.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}">${marked(text)}</div>
    <textarea class="textarea ${text ? "hidden" : ""} id="textarea">${text}</textarea>
    `
    const deleteEl = noteEl.querySelector('.delete')
    deleteEl.addEventListener('click', () => {
        noteEl.remove()
        updateLocalStorage()
    })

    const mainEl = noteEl.querySelector('.main')
    const textareaEl = noteEl.querySelector('textarea')

    const editEl = noteEl.querySelector('.edit')
    editEl.addEventListener('click', () => {
        mainEl.classList.toggle('hidden')
        textareaEl.classList.toggle('hidden')
    })

    textareaEl.addEventListener('input', (e) => {
        text = e.target.value
      
        updateLocalStorage()
        mainEl.innerHTML = marked(text)
        textareaEl.innerText = text
    })
    document.body.appendChild(noteEl)
}


function updateLocalStorage(){
    const textareaEls = document.querySelectorAll('textarea')
    const notes = []
    textareaEls.forEach(item => notes.push(item.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}