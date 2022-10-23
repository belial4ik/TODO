//Selectors
const todoInputs = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');



//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)






//Functions
function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInputs.value;
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