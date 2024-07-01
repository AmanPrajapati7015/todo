
import {todoContainer} from './dom_elements';
import { delTodo } from './curd';
import { showEditor } from './manageFormDisplay';

import red from '../icons/flag-red.svg';
import yellow from '../icons/flag-yellow.svg';
import green from '../icons/flag-green.svg'
import editIcon from '../icons/edit.svg';
import delIcon from '../icons/delete.svg';


const colorMap = {'low':green, 'medium':yellow, 'high':red};


function makeTodo(id, todo){
    const todoDiv = document.createElement('div');

    todoDiv.classList.add('todo');
    todoDiv.setAttribute('data-id', id);
    
    const status = document.createElement('input');
    status.setAttribute('type', 'checkbox');
    
    const title = document.createElement('p');
    title.classList.add('todo-title');
    
    const edit = new Image();
    const img = new Image();
    const del = new Image();
    
    edit.classList.add('icon');
    img.classList.add('icon');
    del.classList.add('icon');
    
    edit.src = editIcon;
    img.src = colorMap[todo.priority];
    del.src = delIcon;
    
    status.checked = false;
    title.textContent = todo.title;
    
    status.addEventListener('click', (e)=>{
        e.stopPropagation();
        setTimeout(()=>delTodo(e), 500);
    })
    edit.addEventListener('click', showEditor);
    del.addEventListener('click', delTodo);

    todoDiv.appendChild(status);
    todoDiv.appendChild(title);
    todoDiv.appendChild(edit);
    todoDiv.appendChild(img);
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