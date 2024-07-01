import { formElemnents} from './dom_elements';
import { format } from 'date-fns';

//gets the task-details from DOM
function resetTask(){
    formElemnents.title.value = "";
    formElemnents.desc.value = "";
    formElemnents.due.value = format(new Date(), "yyyy-MM-dd");;
}

function getTask (){
    const todoDetails = {};
    todoDetails.title = formElemnents.title.value;
    todoDetails.desc = formElemnents.desc.value;
    todoDetails.due = new Date(formElemnents.due.value);
    todoDetails.priority = formElemnents.priority.value;
    todoDetails.project = formElemnents.project.value;

    resetTask();

    return todoDetails;
}

export {getTask, resetTask};