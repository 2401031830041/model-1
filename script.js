// select dom elements
const Input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const List = document.getElementById('todo-list');

// try to load saved todos from local storage
const saved = localStorage.getItem('todos');
const todos = saved ? JSON.parse(saved) : [];

function savetodos() {
    // save the current todos to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

//  create a dom node for todo object and append it to the list
function createTodoNode(todo, index) {
const li = document.createElement('li');

// checkbox to toogle completion
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked =!!todo.completed;
checkbox.addEventListener('change', () => {
    todo.completed = checkbox.checked;
    
    // visual feedback strike through completed items
    savetodos();
})
}

//text of the todo
const text = document.createElement('span');
text.textContent = todo.text;
textSpan.style.margin = '0 8px';
if (todo.completed) {
    text.style.textDecoration = 'line-through';
}

 // add double click event to edit the todo text
text.addEventListener('dblclick', () => {
    const newText = prompt('Edit todo:', todo.text);
    if (newText !== null) {
        todo.text = newText.trim();
        text.textContent = todo.text;
        savetodos();
         
    }
})

 // delete button to remove the todo
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', () => {
    todos.splice(index, 1);
    savetodos();
    render();
})

 li.appendChild(checkbox);
 li.appendChild(textSpan);
 li.appendChild(delBtn);
    return li;
// render the whole list of todos to the page

function render() {
    list.innerHTML = '';

    //recreate each item
    todos.forEach((todo, index) => {
        const node = createTodoNode(todo, index);
        cpnsole.log(node,todo);
        list.appendChild(node);
    });
}

function addTodo() {
    const text = input.value.trim();  
    if (!text) {
        return; 
    }

    //push a new todo object 
    todos.push({ text, completed: false });
    input.value = '';
    savetodos();
    render();
}

addBtn.addEventListener('click', addTodo);
render();