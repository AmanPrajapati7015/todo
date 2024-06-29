
import {todoContainer} from './dom_elements';
import { delTodo } from './curd';
import { showEditor } from './manageFormDisplay';



function makeTodo(id, todo){
    const todoDiv = document.createElement('div');

    todoDiv.classList.add('todo');
    todoDiv.setAttribute('data-id', id);
    
    const status = document.createElement('input');
    status.setAttribute('type', 'checkbox');
    const title = document.createElement('p');
    title.classList.add('todo-title')
    const edit = document.createElement('button');
    const priority = document.createElement('p');
    const del = document.createElement('button');
    
    status.checked = false;
    title.textContent = todo.title;
    edit.textContent = 'edit';
    edit.addEventListener('click', showEditor);


    priority.textContent = todo.priority;
    del.textContent = "delete"
    del.addEventListener('click', delTodo);

    // del add event listener

    todoDiv.appendChild(status);
    todoDiv.appendChild(title);
    todoDiv.appendChild(edit);
    todoDiv.appendChild(priority);
    todoDiv.appendChild(del);

    return todoDiv;
}


function addTodo(id, todo){
    todoContainer.appendChild(makeTodo(id, todo));
}


function showTodos(todos){
    todoContainer.innerHTML = '';
    for (let id in todos){
        addTodo(id, todos[id]);
    }
}


export  {addTodo, showTodos};