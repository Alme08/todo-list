import { addUlTodo } from "./todo";
const container = document.querySelector('.container');
export const projects = [];

function Project(title){
    this.title = title;
    this._todoItems = [];
}
Project.prototype.addTodoProject = function (todo){
    this._todoItems.push(todo);
}
Project.prototype.getTodoProject = function (){
    return this._todoItems;
}
Project.prototype.getTitle = function(){
    return this.title;
}
const defaultProject = new Project('Default');
projects.push(defaultProject);

export const addNewProject = (title)=>{
    let item = new Project(title);
    projects.push(item)
    addUlProject();
}

export const addNewTodo = (todo, index) =>{
    projects[index].addTodoProject(todo)
}
export const getTodo = (index) =>{
   return projects[index].getTodoProject()
}

export const displayProjects = () =>{
    container.innerHTML = `
        <section class="project">
            <div>
                <h1>Projects</h1>
                <button id="addProject"><i class="fa-solid fa-plus"></i> Add project</button>
            </div>
            <hr>
            <ul id="ulList">
            </ul>
        </section>
    `
    addUlProject();
}
const addUlProject = () => {
    const uls = document.querySelectorAll('#ulList')
    uls.forEach(ul=>{
        ul.textContent = '';
        for (let i = 0; i < projects.length; i++) {
            ul.innerHTML += `<li data-index="${i}" id="projectLi"><i class="fa-solid fa-circle"></i>${projects[i].getTitle()}</li>` 
        }
    })
}

export const displayProject = (index)=> {
    container.innerHTML = `
        <section class="">
            <div>
                <h1>${projects[index].getTitle()}</h1>
                <button id="addTodo" data-indexproject="${index}"><i class="fa-solid fa-plus"></i> Add Todo</button>
            </div>
            <ul id="todoList">
            </ul>
        </section>
    `
    addUlTodo(getTodo(index));
}