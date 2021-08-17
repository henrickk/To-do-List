loadEvents()
//Carregando todos os eventos da pagina
function loadEvents() {
  document.querySelector('form').addEventListener('submit', submit)
  //
  document.getElementById('clear').addEventListener('click', clearList)
  //
  document.querySelector('ul').addEventListener('click', deleteOrTike)
}

//Enviar função de dados
function submit(e) {
  e.preventDefault()
  let input = document.querySelector('input')
  if (input.value != '') addTask(input.value)
  input.value = ''
}

// Adicionando tasks
function addTask(task) {
  let ul = document.querySelector('ul')
  let li = document.createElement('li')
  li.innerHTML = `<span class="delet">x</span> 
  <input type = "checkbox">
  <label>${task}</label>`
  ul.appendChild(li)
  document.querySelector('.tasksBoard').style.display = 'block'
}

// Limpar a lista
function clearList(e) {
  // configurando o ul innerHTML para uma string vazia
  let ul = (document.querySelector('ul').innerHTML = '')
}

//deleteOrTike
function deleteOrTike(e) {
  if (e.target.className == 'delete') deleteTask(e)
  else {
    tickTask(e)
  }
}
//delete task         CONSERTAR!!!!
function deleteTask(e) {
  let remove = e.target.parentNode
  let parentNode = remove.parentNode
  parentNode.removeChild(remove)
}

//tick a task
function tickTask(e) {
  const task = e.target.nextSibling
  if (e.target.checked) {
    task.style.textDecoratin = 'line-through'
    task.style.color = 'ff0000'
  } else {
    task.style.textDecoratin = 'none'
    task.style.color = '#2f4f4f'
  }
}
