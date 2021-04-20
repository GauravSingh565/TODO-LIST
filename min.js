document.addEventListener("DOMContentLoaded", getTodos);
let todo = document.getElementById("todo");
let input = document.getElementById("input");
let btn = document.getElementById("btn");

// add button code------------------------------

btn.addEventListener("click", function (e) {
  let addtxt = document.createElement("p");
  let value = input.value;
  if (value !== "") {
    let button = document.createElement("button");
    button.classList.add("delete");
    button.innerHTML = `<i class="fas fa-trash"></i> `;

    addtxt.innerHTML = `${value}`;
    addtxt.appendChild(button);

    todo.appendChild(addtxt);

    local(value);

    // remove item------------------------

    button.addEventListener("click", function () {
      removeTodo(value);
      addtxt.remove();
    });

    // ----------------------------------------
  } else {
    alert("please enter some text first");
  }
  input.value = "";
});

// ----------------------------------------------

// local storage---------------------

function local(todo_1) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo_1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// show todo from loca storage-------

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todol) {
    let addtxt = document.createElement("p");
    let button = document.createElement("button");
    button.classList.add("delete");
    button.innerHTML = `<i class="fas fa-trash"></i> `;

    addtxt.innerHTML = todol;
    todo.appendChild(addtxt);

    addtxt.appendChild(button);

    todo.appendChild(addtxt);

    // remove item------------------------
    button.addEventListener("click", function () {
      removeTodo(todol);

      addtxt.remove();
    });
  });
}

// remove todo from local storage---------------------------------

function removeTodo(todo_2) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let todoIndex = todo_2;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// -------------------------------------------------
