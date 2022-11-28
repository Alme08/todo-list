import { addNewProject, displayProjects, displayProject } from "./modules/project.js";
import { addTodoItem } from "./modules/todo.js";

const addProjectScreen = document.querySelector('.addProject');
const addTodoScreen = document.querySelector('.addTodo');
const nameProject = document.querySelector('#nameProject');
// const addT = document.querySelector('#addT');
let indexProject;

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
            // addT.setAttribute('data-indexProject', e.target.dataset.indexproject)
            indexProject = e.target.dataset.indexproject;
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

            addTodoItem(nameT.value, descriptionT.value, dueDateT.value, priorityT.value, indexProject)

            addTodoScreen.classList.add('display-none');
            break;

        default:
            break;
    }
})
                
displayProjects();

