window.addEventListener('load', () => {
  renderTodos(document.getElementById('todoList'))
  document.getElementById('todoList').addEventListener('click', e => removeTodo(e, todoList))
  document.getElementById('new').addEventListener('click', () => addTodo(todoList))
})

function addTodo(todoList) {
  let todoDaAggiungere = document.getElementById('inputTodo')
  todoDaAggiungere.value ? (renderTodos(todoList, todoDaAggiungere.value, null), todoDaAggiungere.value = '') : null
}

function removeTodo(e, todoList) {
  let todoDaRimuovere;
  e.target.tagName === 'BUTTON' ? (todoDaRimuovere = e.target.parentNode.innerText.split(/\r?\n/)[0], renderTodos(todoList, null, todoDaRimuovere)) : null
}

function renderTodos(todoList, todoDaAggiungere, todoDaRimuovere) {
  while (todoList.firstChild) todoList.removeChild(todoList.firstChild)
  todos = todoDaAggiungere ? [...todos, todoDaAggiungere] : todoDaRimuovere ? todos.filter(item => item !== todoDaRimuovere) : JSON.parse(localStorage.getItem('todos')) || []
  localStorage.setItem('todos', JSON.stringify(todos))
  const liClasses = 'w-full px-4 py-2 dark:bg-gray-700 border-gray-200 rounded-lg dark:border-gray-600 flex items-center justify-between glass opacity-90 hover:opacity-100'
  const removeButtonClasses = 'bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-80 hover:opacity-95 hover:scale-95 glass'
  todos && todos.forEach(todo =>
    todoList.insertAdjacentHTML('beforeend', `<li class="${liClasses}">${todo}<button class="${removeButtonClasses}">Elimina</button></li>`)
  )
}