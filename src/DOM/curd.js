import {Todos, Todo} from "../todo";
import { showProjectTodos } from "./manageProjectDisplay";
import { getTask } from "./getTask";
import { toogleView } from "./manageFormDisplay";

function updateState(){
    localStorage.setItem('todos', JSON.stringify(Todos));
}

function delTodo(e){
    const id = +e.target.parentElement.getAttribute('data-id');
    e.target.parentElement.remove();
    Todo.delete(id);
    updateState();
}



function addTask(){
    const newTask = getTask();
    const newTodo = new Todo (newTask.title, newTask.desc, newTask.due, newTask.priority, newTask.project, false);
    showProjectTodos(newTask.project);
    updateState();
    toogleView();
}

function editTask(e){
    let id = +e.target.getAttribute('data-id');
    const newTask = getTask();
    Todo.edit(id, newTask.title, newTask.desc, newTask.due, newTask.priority, newTask.project);
    showProjectTodos(newTask.project);
    updateState();
    toogleView();
}





export {delTodo, addTask, editTask}