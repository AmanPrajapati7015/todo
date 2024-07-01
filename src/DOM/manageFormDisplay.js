import { addBtn,addTaskBtn, editTaskBtn,formElemnents, form_display,form, closeBtns } from './dom_elements';
import { format } from 'date-fns';
import {Todos} from '../todo';
import { addTask, editTask } from './curd';
import { resetTask } from './getTask';

//closing and opening add Todo window
function toogleView(){
    form_display.classList.toggle('active');
    addBtn.classList.toggle('active');
}


function showAddBtn(){
    resetTask();
    addTaskBtn.classList.add('active');
    editTaskBtn.classList.remove('active');
}

addBtn.addEventListener('click', showAddBtn);
addBtn.addEventListener('click', toogleView);

[...closeBtns, form_display].forEach((btn)=>{
    btn.addEventListener('click', toogleView);
})

//to prevent closing on clicking on form element
form.addEventListener('click', (e)=>{
    e.stopPropagation();
})


//for showing edit or add Btn in popup form
function showEditBtn(){
    addTaskBtn.classList.remove('active');
    editTaskBtn.classList.add('active');
}

//show editor
function showEditor(e){
    const id = +e.target.parentElement.getAttribute('data-id');
    toogleView();
    showEditBtn();
    editTaskBtn.setAttribute('data-id', id);
    const todoDetails = Todos[id];
    formElemnents.title.value = todoDetails.title;
    formElemnents.desc.value = todoDetails.desc;
    formElemnents.due.value = format(todoDetails.due, "yyyy-MM-dd");
    formElemnents.priority.value = todoDetails.priority;
    formElemnents.project.value = todoDetails.project;
}



// add task
addTaskBtn.addEventListener('click', addTask);
editTaskBtn.addEventListener('click', editTask);



export  {toogleView, showEditor};