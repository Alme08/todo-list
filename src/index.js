import { addNewProject, displayProjects, displayProject } from "./modules/project.js";
import { addTodoItem } from "./modules/todo.js";

const addProjectScreen = document.querySelector('.addProject');
const addTodoScreen = document.querySelector('.addTodo');
const nameProject = document.querySelector('#nameProject');

window.addEventListener('click', e =>{
    switch (e.target.id) {
        case 'project-nav':
            displayProjects();
            break;
        case 'addProject':
            addProjectScreen.classList.remove('display-none');
            break;
            
        case 'cancelP':
            addProjectScreen.classList.add('display-none');
            break;
                
        case 'addP':
            e.preventDefault();
            addNewProject(nameProject.value);
            addProjectScreen.classList.add('display-none');
            break;
        
        case 'projectLi':
            displayProject(e.target.dataset.index);
            break;

        case 'addTodo':
            addTodoScreen.classList.remove('display-none');
            break;
        
        case 'cancelT':
            addTodoScreen.classList.add('display-none');
            break;

        case 'addT':
            e.preventDefault();
            let nameT = document.querySelector('#nameTodo');
            let descriptionT = document.querySelector('#descriptionTodo');
            let dueDateT = document.querySelector('#dueDateTodo');
            let priorityT = document.querySelector('#priorityTodo');

            addTodoItem(nameT, descriptionT, dueDateT, priorityT, e.target.dataset.indexProject)

            addTodoScreen.classList.add('display-none');
            break;

        default:
            break;
    }
})
                
displayProjects();

