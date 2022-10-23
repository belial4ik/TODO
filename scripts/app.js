//Selectors
const todoInputs = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');



//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)



//Functions
function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInputs.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //addto localStorage
  saveLocalTodo(todoInputs.value)
  //CHECK BUTTON
  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = `<i class='fas fa-check'></i>`;
  completeBtn.classList.add('complete-btn');
  todoDiv.appendChild(completeBtn)
  //CHECK trash BUTTON
  const trashBtn = document.createElement('button');
  trashBtn.innerHTML = `<i class='fas fa-trash'></i>`;
  trashBtn.classList.add('btn-trash');
  todoDiv.appendChild(trashBtn)
  //APPEND TO LIST
  todoList.appendChild(todoDiv)
  //clear input value
  todoInputs.value = '';
}

function deleteCheck(e) {
  const item = e.target;
  //DELETE ITEM
  if(item.classList[0] === 'btn-trash') {
    const todo = item.parentElement;
    //ANIMATION
    todo.classList.add("fall")
    removeFromLocalStorage(todo)
    todo.addEventListener('transitionend', function() {
      todo.remove()
    })
  }
  //CHECK MARK
  if(item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle("completed")
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch(e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  })
}

function saveLocalTodo(todo) {
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
  let todos;

  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.forEach( function(todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK BUTTON
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = `<i class='fas fa-check'></i>`;
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn)
    //CHECK trash BUTTON
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = `<i class='fas fa-trash'></i>`;
    trashBtn.classList.add('btn-trash');
    todoDiv.appendChild(trashBtn)
    //APPEND TO LIST
    todoList.appendChild(todoDiv)
  })
}

function removeFromLocalStorage(todo) {
  let todos;
    if(localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem('todos',JSON.stringify(todos))
} 