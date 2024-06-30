let Projects = ['Project1', 'Gym'];

if(localStorage.getItem('projects')){
    Projects = JSON.parse(localStorage.getItem('projects'));
    console.log(Projects);
}

export {Projects};