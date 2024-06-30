let Projects = ['Todo', 'Gym'];

if(localStorage.getItem('projects')){
    Projects = JSON.parse(localStorage.getItem('projects'));
    console.log(Projects);
}

export {Projects};