const main = document.getElementById('main');
const todoList = document.getElementById('todoList');
const btnAdd = document.querySelector('.btn-add');
const textAdd = document.querySelector('.text-add');
const todoCount = document.querySelector('.todo-count');
const dropdown = document.getElementById('dropdown');

const renderTodoItem = label => {
  return `<div class="todoItem">
  <p>${label}</p>
  <div class="actions">
    <button class="btn btn-complete" data-index="index">
      complete</button><button class="btn btn-delete">
      delete
    </button>
  </div>
</div>`;
};

let countTodos = 0;
const todos = [];
const categsList = [];

const createCategs = (categs = []) => {
  // categsList.concat(categs).;
  // categs.forEach((item, index) => {
  //   dropdown.innerHTML += `<option value=${index}>${item}</option>`;
  // });
};

const addTodoItem = (text = '') => {
  const todo = text.split('|');
  const todoLabelCateg = todo;
  const todoText = todoLabelCateg[0];
  let todoCategs;
  if (todoLabelCateg[1]) {
    todoCategs = todoLabelCateg[1].split(',');
    createCategs(todoCategs);
  }

  todoList.innerHTML += renderTodoItem(todoText);
};

const setCountValue = count => {
  todoCount.innerHTML = count;
};

const startTodo = (todos = []) => {
  for (let index = 0; index < todos.length; index++) {
    addTodoItem(index);
  }
  countTodos = todos.length;
  setCountValue(countTodos);
};

btnAdd.addEventListener('click', () => {
  countTodos += 1;
  addTodoItem(textAdd.value);
  setCountValue(countTodos);
});

startTodo(todos);
