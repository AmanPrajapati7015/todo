const addBtn = document.querySelector('.add-todo');

const form_display = document.querySelector('.add-todo-wrapper');
const form = form_display.querySelector('.todo-form')
const closeBtns = form_display.querySelectorAll('.close')

const addTaskBtn = form.querySelector('#add-task');
const editTaskBtn = form.querySelector('#edit-task');


const formElemnents = {};
formElemnents.title = form.querySelector('#title');
formElemnents.desc = form.querySelector('#desc');
formElemnents.due = form.querySelector('#due');
formElemnents.priority = form.querySelector('#priority');
formElemnents.project = form.querySelector('#project');


const todoContainer = document.querySelector('div.todos');

const heading = document.querySelector('h2.todos-heading');

export {addBtn,editTaskBtn, addTaskBtn, form_display, form,closeBtns, todoContainer, formElemnents, heading};
