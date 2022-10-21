const form = document.getElementById('form')
const todosEl = document.getElementById('todos')
const inputEl = document.getElementById('input')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = inputEl.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.complete) {
            todoEl.classList.add('complete')
        }
        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('complete')
            updateLS()
        })
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })
        todosEl.appendChild(todoEl)
        updateLS()
        inputEl.value = ''
    }
}

function updateLS() {
    const todoList = []

    const todoLi = document.querySelectorAll('li')
    todoLi.forEach(todoEl => todoList.push({ text: todoEl.innerText, complete: todoEl.classList.contains('complete') }))

    localStorage.setItem("todos", JSON.stringify(todoList))
}