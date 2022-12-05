import { projects, Project, addNewProject, deleteProject, displayProjects, displayProject, getTitleProject, setTitleProject, getTodo, deleteTodo} from "./modules/project.js";
import { TodoItem, addTodoItem, addUlTodo } from "./modules/todo.js";

const addProjectScreen = document.querySelector('.addProject');
const editProjectScreen = document.querySelector('.editProject');
const nameProject = document.querySelector('#nameProject');
const editNameProject = document.querySelector('#editNameProject');
const todoInfoScreen = document.querySelector('.infoTodo');

const addTodoScreen = document.querySelector('.addTodo');
const editTodoScreen = document.querySelector('.editTodo');

let nameT = document.querySelector('#nameTodo');
let editNameT = document.querySelector('#editNameTodo');
let descriptionT = document.querySelector('#descriptionTodo');
let editDescriptionT = document.querySelector('#editDescriptionTodo');
let dueDateT = document.querySelector('#dueDateTodo');
let editDueDateT = document.querySelector('#editDueDateTodo');
let priorityT = document.getElementsByName('priority');
let editPriorityT = document.getElementsByName('editPriority');
let priorityTValue;
let indexProject;
let indexTodo;
let editProjectIndex;

window.addEventListener('click', e =>{
    // e.preventDefault();
    switch (e.target.id) {
        case 'project-nav':
            displayProjects();
            break;
        case 'addProject':
            addProjectScreen.classList.remove('display-none');
            nameProject.value = '';
            break;

        case 'deleteProject':
            deleteProject(e.target.dataset.index)
            break;
            
        case 'cancelP':
            addProjectScreen.classList.add('display-none');
            break;
                
        case 'addP':
            e.preventDefault();
            if (nameProject.value != '') {
                addNewProject(nameProject.value);
                addProjectScreen.classList.add('display-none');
            }
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
            nameT.value = '';
            descriptionT.value = '';
            dueDateT.value = '';
            priorityTValue = '';
            for(let i = 0; i < priorityT.length; i++){
                priorityT[i].checked = false;
            }
            break;
        
        case 'cancelT':
            addTodoScreen.classList.add('display-none');
            break;

        case 'addT':
            e.preventDefault();
            
            for(let i = 0; i < priorityT.length; i++){
                if(priorityT[i].checked){
                    priorityTValue = priorityT[i].value;
                    break;
                }
            }
            if (nameT.value && descriptionT.value && dueDateT.value && priorityTValue) {
                addTodoItem(nameT.value, descriptionT.value, dueDateT.value, priorityTValue, indexProject);
                addTodoScreen.classList.add('display-none');
            }
            break;

        case 'editTodo':
            indexProject = e.target.dataset.indexproject;
            indexTodo = e.target.dataset.index;
            editTodoScreen.classList.remove('display-none');
            editNameT.value = getTodo(indexProject)[indexTodo].getTitle();
            editDescriptionT.value = getTodo(indexProject)[indexTodo].getDescription();
            editDueDateT.value = getTodo(indexProject)[indexTodo].getDueDate();
            for (let i = 0; i < editPriorityT.length; i++) {
                if(editPriorityT[i].value == getTodo(indexProject)[indexTodo].getPriority()){
                    editPriorityT[i].checked = true;
                    break;
                }
            }
            break;

        case 'addTE':
            e.preventDefault();
            getTodo(indexProject)[indexTodo].setTitle(editNameT.value);
            getTodo(indexProject)[indexTodo].setDescription(editDescriptionT.value);
            getTodo(indexProject)[indexTodo].setDueDate(editDueDateT.value);
            for (let i = 0; i < editPriorityT.length; i++) {
                if(editPriorityT[i].checked){
                    getTodo(indexProject)[indexTodo].setPriority(editPriorityT[i].value);
                    break;
                }
            }
            populateStorage();
            addUlTodo(getTodo(indexProject));
            editTodoScreen.classList.add('display-none');
            break;
        
        case 'cancelTE':
            editTodoScreen.classList.add('display-none');
            break;

        case 'deleteTodo':
            deleteTodo(e.target.dataset.index, e.target.dataset.indexproject)
            break;

        case 'todoLi':
            indexProject = e.target.dataset.indexproject;
            indexTodo = e.target.dataset.index;
            todoInfoScreen.classList.remove('display-none');
            let todoTitleInfo = document.querySelector('#todoTitleInfo');
            let todoDescriptionInfo = document.querySelector('#todoDescriptionInfo');
            let todoDueDateInfo = document.querySelector('#todoDueDateDescription');
            let todoPriorityInfo = document.querySelector('#todoPriorityDescription');

            todoTitleInfo.textContent = getTodo(indexProject)[indexTodo].getTitle();
            todoDescriptionInfo.textContent = getTodo(indexProject)[indexTodo].getDescription();
            todoDueDateInfo.textContent = getTodo(indexProject)[indexTodo].getDueDate();
            switch (getTodo(indexProject)[indexTodo].getPriority()) {
                case 'priority0':
                    todoPriorityInfo.textContent = 'None'
                    todoPriorityInfo.style.color = "#434343"
                    break;
            
                case 'priority1':
                    todoPriorityInfo.textContent = 'Low'
                    todoPriorityInfo.style.color = "#44a9e4"
                    break;

                case 'priority2':
                    todoPriorityInfo.textContent = 'Medium'
                    todoPriorityInfo.style.color = "#EB8909"
                    break;

                case 'priority3':
                    todoPriorityInfo.textContent = 'High'
                    todoPriorityInfo.style.color = "#eb0909"
                    break;

                default:
                    break;
            }
            break;
        
        case 'infoTodo':
            todoInfoScreen.classList.add('display-none');
            break;
        default:
            break;
    }
})
export const populateStorage = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
  
    setLocalStorage();
}
const setLocalStorage = () =>{
    let currentProjects = JSON.parse(localStorage.getItem('projects'));

    for (let i = 0; i < currentProjects.length; i++) {
        let todoArray = currentProjects[i]._todoItems;
        currentProjects[i] = new Project(currentProjects[i].title);
        currentProjects[i]._todoItems = todoArray
        for (let j = 0; j < currentProjects[i]._todoItems.length; j++) {
            currentProjects[i]._todoItems[j] = new TodoItem(currentProjects[i]._todoItems[j].title, currentProjects[i]._todoItems[j].description, currentProjects[i]._todoItems[j].dueDate, currentProjects[i]._todoItems[j].priority, currentProjects[i]._todoItems[j].indexProject)
        }
    }
    for (let i = 0; i < currentProjects.length; i++) {
        projects[i] = currentProjects[i];
    }
}

if (!localStorage.getItem('projects')) {
    populateStorage();
} else {
    setLocalStorage();
}
                
displayProjects();

