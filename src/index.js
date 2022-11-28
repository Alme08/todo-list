import { addNewProject, displayProjects, displayProject, getTitleProject, setTitleProject } from "./modules/project.js";
import { addTodoItem } from "./modules/todo.js";

const addProjectScreen = document.querySelector('.addProject');
const nameProject = document.querySelector('#nameProject');
const editProjectScreen = document.querySelector('.editProject');
const editNameProject = document.querySelector('#editNameProject')
const addTodoScreen = document.querySelector('.addTodo');
// const addT = document.querySelector('#addT');
let indexProject;
let editProjectIndex;

window.addEventListener('click', e =>{
    // e.preventDefault();
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

        case 'editProject':
            editProjectIndex = e.target.dataset.index;
            editProjectScreen.classList.remove('display-none');
            editNameProject.value = getTitleProject(e.target.dataset.index);
            break;

        case 'addPE':
            e.preventDefault();
            setTitleProject(editProjectIndex, editNameProject.value)
            editProjectScreen.classList.add('display-none');
            break;

        case 'cancelPE':
            editProjectScreen.classList.add('display-none');
            break;
                 
        case 'addTodo':
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
            let priorityT = document.getElementsByName('priority');
            let priorityTValue;
            for(let i = 0; i < priorityT.length; i++){
                if(priorityT[i].checked){
                    priorityTValue = priorityT[i].value;
                    break;
                }
            }
            if (nameT.value && descriptionT.value && dueDateT.value && priorityTValue) {
                console.log(si);
            }
            addTodoItem(nameT.value, descriptionT.value, dueDateT.value, priorityTValue, indexProject);
            addTodoScreen.classList.add('display-none');
            break;

        default:
            break;
    }
})
                
displayProjects();

