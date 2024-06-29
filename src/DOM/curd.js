import { Todos, Todo} from "../todo";
import { showTodos } from "./populateTodos";
import { getTask } from "./getTask";
import { toogleView } from "./manageFormDisplay";


function delTodo(e){
    const id = +e.target.parentElement.getAttribute('data-id');
    Todo.delete(id);
    showTodos(Todos)
}



function addTask(){
    const newTask = getTask();
    const newTodo = new Todo (newTask.title, newTask.desc, newTask.due, newTask.priority, newTask.project, false);
    showTodos(Todos);
    toogleView();
}

function editTask(e){
    let id = +e.target.getAttribute('data-id');
    const newTask = getTask();
    Todos[id].edit(id, newTask.title, newTask.desc, newTask.due, newTask.priority, newTask.project);
    showTodos(Todos);
    toogleView();
}





export {delTodo, addTask, editTask}