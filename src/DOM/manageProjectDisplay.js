import { Todos } from "../todo";
import { showTodos } from "./populateTodos";
import { projectContainer } from "./projects_Dom";
import { heading, formElemnents } from "./dom_elements";


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


const inbox = document.querySelector('#inbox');
const projectBtns = [inbox, ...projectContainer.childNodes]


projectBtns.forEach((projectBtn)=>{
    projectBtn.addEventListener('click', (e)=>{
        e.stopPropagation();
        let project = projectBtn.getAttribute('data-project');
        showProjectTodos(project);
        formElemnents.project.value = project;
    })
})



export {showProjectTodos} ;