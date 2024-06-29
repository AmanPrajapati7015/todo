const Todos = {};


class Todo{
    constructor(title, desc, dueDate, priority, project,isDone){
        let id = Date.now()+Math.random();
        this.title = title;
        this.due = dueDate;
        this.desc = desc;
        this.project = project;
        this.isDone = isDone;
        this.priority = priority;
        Todos[id] = this;
    }

    edit(id, title, desc, dueDate, priority, project){
        this.title = title;
        this.desc = desc;
        this.project = project;
        this.priority = priority;
        this.due = dueDate;
        Todos[id] = this;
        console.log(this);
    }

    static delete(id){
        delete Todos[id];
    }
}

const todo1 = new Todo("drink water","this is my desc", Date(12,4,2023),'low', 'inbox', false);
const todo2 = new Todo("drink more water","this is my desc 2", new Date(), 'medium', 'inbox', false);
const todo3 = new Todo("drink water","this is my desc5", new Date(),'high', 'inbox', false);



console.table(Todos)

// console.log(Todos);
export {Todo, Todos};

