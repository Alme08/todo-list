import { addNewProject, projects, displayProject } from "./modules/project.js";
const addProject = document.querySelector('.addProject');
const nameProject = document.querySelector('#nameProject')

window.addEventListener('click', e =>{
    switch (e.target.id) {
        case 'addProject':
            addProject.classList.remove('display-none');
            break;
            
        case 'cancel':
            addProject.classList.add('display-none');
            break;
                
        case 'addP':
            e.preventDefault();
            addNewProject(nameProject.value);
            addProject.classList.add('display-none');
            break;
                    
        default:
            break;
    }
})
                
displayProject();
function TodoItem(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}
const addTodoItem = (title, description, dueDate, priority) =>{
    let item = new TodoItem(title, description, dueDate, priority);
}
