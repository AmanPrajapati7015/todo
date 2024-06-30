import {Todos, Todo} from "../todo";
import { showProjectTodos } from "./manageProjectDisplay";
import { getTask } from "./getTask";
import { toogleView } from "./manageFormDisplay";


function delTodo(e){
    const id = +e.target.parentElement.getAttribute('data-id');
    e.target.parentElement.remove();
    Todo.delete(id);
}



function addTask(){
    const newTask = getTask();
    const newTodo = new Todo (newTask.title, newTask.desc, newTask.due, newTask.priority, newTask.project, false);
    showProjectTodos(newTask.project);
    toogleView();
}

function editTask(e){
    let id = +e.target.getAttribute('data-id');
    const newTask = getTask();
    Todos[id].edit(id, newTask.title, newTask.desc, newTask.due, newTask.priority, newTask.project);
    showProjectTodos(newTask.project);
    toogleView();
}





export {delTodo, addTask, editTask}