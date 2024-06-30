import { Projects } from "../projects";

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

function delProject(e){
    let i = +e.target.getAttribute('data-i');
    Projects.splice(i, 1);
    showProjecs(Projects)
}

function makeProject(project, i){
        const title = document.createElement('p');
        title.textContent = project;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'X';
        delBtn.setAttribute('data-i', i);
        delBtn.addEventListener('click', delProject);
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.appendChild(title);
        projectDiv.appendChild(delBtn);

        return projectDiv;
}

function addProjectOptions(projects){
    optionsContainer.innerHTML = '';
    projects.forEach((project)=>{
        const option = document.createElement('option');
        option.value = project.toLowerCase();
        option.textContent= project;
        optionsContainer.appendChild(option);
    })
}

function showProjecs(Projects){
    projectContainer.innerHTML = '';
    for(let i = 0; i<Projects.length; i++){
        projectContainer.appendChild(makeProject(Projects[i], i));
    }
    const allProjects = ['inbox', ...Projects];
    addProjectOptions(allProjects);
}
showProjecs(Projects);




addProjectBtn.addEventListener('click', ()=>{
    let newProject = projectInput.value;
    Projects.push(newProject);
    showProjecs(Projects);
    projectInput.value = '';
    toggleView();

})


export default null;