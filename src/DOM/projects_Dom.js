import { Projects } from "../projects";
import { formElemnents } from "./dom_elements";
import { showProjectTodos } from "./manageProjectDisplay";



const showAddProjectBtn = document.querySelector('.display-add-project');
const cancleBtn = showAddProjectBtn.previousElementSibling.querySelector('.cancel');
const addProjectBtn = cancleBtn.nextElementSibling;
const projectInput = showAddProjectBtn.previousElementSibling.firstElementChild;
const projectContainer = showAddProjectBtn.parentElement.previousElementSibling;

const optionsContainer = document.querySelector('select#project');


function toggleView(){
    showAddProjectBtn.previousElementSibling.classList.toggle('active');
    showAddProjectBtn.textContent = (showAddProjectBtn.textContent =='Add')? 'Close' :'Add'
}

cancleBtn.addEventListener('click', toggleView);
showAddProjectBtn.addEventListener('click', toggleView);

//usd as callback fn to delete project
function delProject(e){
    e.stopPropagation();
    let i = +e.target.getAttribute('data-i');
    Projects.splice(i, 1);
    localStorage.setItem('projects', JSON.stringify(Projects));
    showProjecs(Projects)
}

//return a project div element to be places in sidebar
function makeProject(project, i){
        const title = document.createElement('p');
        title.textContent = project;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'X';
        delBtn.setAttribute('data-i', i);
        delBtn.addEventListener('click', delProject);
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.setAttribute('data-project', project.toLowerCase())
        projectDiv.appendChild(title);
        projectDiv.appendChild(delBtn);

        return projectDiv;
}

//adds the projets to the select element in new/edit todo form
function addProjectOptions(projects){
    optionsContainer.innerHTML = '';
    projects.forEach((project)=>{
        const option = document.createElement('option');
        option.value = project.toLowerCase();
        option.textContent= project;
        optionsContainer.appendChild(option);
    })
}

//puts all projects inside sidebaar 
//also adds eventListerner to open that project
function showProjecs(Projects){
    projectContainer.innerHTML = '';
    for(let i = 0; i<Projects.length; i++){
        const projectDiv = makeProject(Projects[i], i);
        projectDiv.addEventListener('click', ()=>{
            let p = Projects[i];
            showProjectTodos(p);
            formElemnents.project.value = p.toLowerCase();
        });
        projectContainer.appendChild(projectDiv);
    }
    const allProjects = ['inbox', ...Projects];
    addProjectOptions(allProjects);
}
showProjecs(Projects);


addProjectBtn.addEventListener('click', ()=>{
    let newProject = projectInput.value;
    Projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(Projects));
    showProjecs(Projects);
    projectInput.value = '';
    toggleView();

})





document.querySelector('#inbox').addEventListener('click', ()=>{
    showProjectTodos('inbox');
    formElemnents.project.value = 'inbox';
})





export {projectContainer};