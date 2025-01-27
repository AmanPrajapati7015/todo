let Todos = {};


class Todo{
    constructor(title, desc, dueDate, priority, project,isDone){
        let id = Date.now()+Math.random();
        this.title = title;
        this.desc = desc;
        this.project = project;
        this.isDone = isDone;
        this.priority = priority;
        let dueStr = JSON.stringify(dueDate);
        this.due = dueStr.slice(1,dueStr.length-1);
        Todos[id] = this;
    }

    static edit(id, title, desc, dueDate, priority, project){
        Todos[id].desc = desc;
        Todos[id].desc = desc;
        Todos[id].title = title;
        Todos[id].project = project;
        Todos[id].priority = priority;
        let dueStr = JSON.stringify(dueDate);
        Todos[id].due = dueStr.slice(1,dueStr.length-1);
        console.table(Todos);
    }

    static delete(id){
        delete Todos[id];
    }
}

const todo1 = new Todo("drink water","this is my desc", Date(),'low', 'inbox', false);
const todo4 = new Todo("wake up 5 am","this is my desc5", new Date(),'medium', 'gym', false);
const todo5 = new Todo("Drink protein shake","this is my desc5", new Date(),'high', 'gym', false);
const todo2 = new Todo("drink more water","this is my desc 2", new Date(), 'medium', 'inbox', false);
const todo3 = new Todo("drink water","this is my desc5", new Date(),'high', 'inbox', false);
const todo6 = new Todo("Go to Gym at 6","this is my desc5", new Date(),'high', 'gym', false);


if(localStorage.getItem('todos')){
    Todos = {};
    const todos = JSON.parse(localStorage.getItem('todos'));
    for(let id in todos){
        Todos[id] = todos[id];
    }
    console.log(todos);
}


console.table(Todos)

export {Todo, Todos};

