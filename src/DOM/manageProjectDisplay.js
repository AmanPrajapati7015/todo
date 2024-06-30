import { Todos } from "../todo";
import { showTodos } from "./populateTodos";
import { heading } from "./dom_elements";


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


export {showProjectTodos} ;