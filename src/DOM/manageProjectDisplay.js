import { Todos } from "../todo";
import { showTodos } from "./populateTodos";
import { formElemnents, heading } from "./dom_elements";
import { format } from "date-fns";



function showProjectTodos(project){
    updateTitle(project);
    const filtered = {};
    for(let id in Todos){
        if(Todos[id].project == project.toLowerCase()){
            filtered[id] = Todos[id];
        }
    }
    showTodos(filtered);
}

function updateTitle(project){
    heading.textContent = project[0].toUpperCase() + project.slice(1);
}

function showTodayTodos(){
    updateTitle('Today');
    const filtered = {}
    for(let id in Todos){
        let dueStr = Todos[id].due.slice(0, 10);
        let today = format(new Date(), 'yyyy-MM-dd');
        if( dueStr == today){
            filtered[id] = Todos[id];
        }
    }
    showTodos(filtered);
}

export {showProjectTodos, showTodayTodos} ;