const main = document.getElementById('main');
const todoList = document.getElementById('todoList');
const btnAdd = document.querySelector('.btn-add');
const textAdd = document.querySelector('.text-add');
const todoCount = document.querySelector('.todo-count');
const dropdown = document.getElementById('dropdown');

const allTaskBtn = document.querySelector('.todoActions .all-task');
const showActiveBtn = document.querySelector('.todoActions .btn-show-active');
const showCompleteBtn = document.querySelector(
  '.todoActions .btn-show-complete'
);
const clearBtn = document.querySelector('.todoActions .btn-clear');

const renderTodoItem = label => {
  return `<div id="todo-${countTodos}" class="todoItem">
  <p>${label}</p>
  <div class="actions">
    <button class="btn btn-complete" data-index=${countTodos}>
      complete
    </button>
    <button class="btn btn-delete" data-index=${countTodos}>
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
  //   dropdown.insertAdjacentHTML += `<option value=${index}>${item}</option>`;
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
  todoList.insertAdjacentHTML('beforeend', renderTodoItem(todoText));
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

btnAdd.addEventListener('click', e => {
  countTodos += 1;
  addTodoItem(textAdd.value);
  setCountValue(countTodos);
});

todoList.addEventListener('click', event => {
  const element = event.target;
  const dataIndex = element.dataset;

  if (element.classList.contains('btn-complete')) {
    const index = dataIndex.index;
    const todo = document.querySelector(`#todo-${index}`);
    todo.classList.toggle('finished');
  }
  if (element.classList.contains('btn-delete')) {
    const index = dataIndex.index;
    const todo = document.querySelector(`#todo-${index}`);
    countTodos -= 1;
    setCountValue(countTodos);
    todo.remove();
  }
});

allTaskBtn.addEventListener('click', e => {
  for (const element of todoList.children) {
    if (element.classList.contains('invisible')) {
      element.classList.remove('invisible');
    }
  }
  setCountValue(todoList.children.length);
});

showActiveBtn.addEventListener('click', e => {
  countTodos = 0;
  for (const element of todoList.children) {
    if (element.classList.contains('finished')) {
      element.classList.add('invisible');
    } else {
      countTodos += 1;
      element.classList.remove('invisible');
    }
  }
  setCountValue(countTodos);
});

showCompleteBtn.addEventListener('click', e => {
  countTodos = 0;
  for (const element of todoList.children) {
    if (element.classList.contains('finished')) {
      element.classList.remove('invisible');
      countTodos += 1;
    } else {
      element.classList.add('invisible');
    }
  }
  setCountValue(countTodos);
});

clearBtn.addEventListener('click', e => {
  todoList.innerHTML = '';
  countTodos = 0;
  setCountValue(countTodos);
});

startTodo(todos);
