//Selectors
const todoInputs = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');



//Event Listeners
todoButton.addEventListener('click', addTodo)






//Functions
function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
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
  trashBtn.classList.add('complete-btn');
  todoDiv.appendChild(trashBtn)
  //APPEND TO LIST
  todoList.appendChild(todoDiv)
}