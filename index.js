const TODO_KEY = 'todo';

var todos = new Array;
var todos_string = localStorage.getItem(TODO_KEY);
if (todos_string === null) {
  todos = new Array;
} else {
  try {
    todos = JSON.parse(todos_string);
  }
  catch (e) {
    todos = new Array;
  }
}

function add() {
  var task = document.getElementById('task').value;
  todos.unshift(task);
  var todos_string = JSON.stringify(todos);
  console.log(todos, todos_string);
  localStorage.setItem('todo', todos_string);
  document.getElementById('task').value = '';
}

function remove() {
  var taskToDelete = document.getElementById('task').value;
  todos.splice(taskToDelete, 1);
  var todos_string = JSON.stringify(todos);
  console.log(taskToDelete);
  localStorage.setItem('todo', todos_string);
}

function show() {
  var tasks = todos;
  var html = '<ul>';
    for(var i=0; i<tasks.length; i++) {
      html  += '<li id="' + i +'">' 
            + '<button class="remove" id="' 
            + i  
            + 'a" onClick="remove()">Delete ToDo</button>' 
            + '<button class="done" id="'
            + i
            + 'b" onClick="done()">Done</button>'
            + tasks[i] 
            + '</li>';
    };
    html += '</ul>';

document.getElementById('todos').innerHTML = html;

}

document.addEventListener('click', show);

show();




