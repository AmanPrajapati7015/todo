import { formElemnents} from './dom_elements';

//gets the task-details from DOM
function getTask (){
    const todoDetails = {};
    todoDetails.title = formElemnents.title.value;
    todoDetails.desc = formElemnents.desc.value;
    todoDetails.due = new Date(formElemnents.due.value);
    todoDetails.priority = formElemnents.priority.value;
    todoDetails.project = formElemnents.project.value;

    formElemnents.title.value = "";
    formElemnents.desc.value = "";
    formElemnents.due.value = "";

    return todoDetails;
}

export {getTask};