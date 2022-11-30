import { addNewTodo, getTodo } from "./project.js";

function TodoItem(title, description, dueDate, priority, indexProject){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.indexProject = indexProject;
}
TodoItem.prototype.getTitle = function(){
    return this.title
}
TodoItem.prototype.getDueDate = function(){
    return this.dueDate
}
TodoItem.prototype.getPriority = function(){
    return this.priority
}
TodoItem.prototype.getIndexProject = function(){
    return this.indexProject
}
export const addTodoItem = (title, description, dueDate, priority, indexP) =>{
    let item = new TodoItem(title, description, dueDate, priority, indexP);
    addNewTodo(item, indexP);
    addUlTodo(getTodo(indexP));
}


export const addUlTodo = (todo) => {
    const ul = document.querySelector('#todoList')    
    ul.textContent = '';
    for (let i = 0; i < todo.length; i++) {
        ul.innerHTML += `<li class="${todo[i].getPriority()}" data-index="${i}" id="todoLi"><span>${todo[i].getTitle()} / ${todo[i].getDueDate()}</span> 
        <span><button id="editTodo" data-index="${i}"><i id="editTodo" data-index="${i}" class="fa-solid fa-pen-to-square"></i></button> <button id="deleteTodo" data-index="${i}" data-indexProject="${todo[i].getIndexProject()}"><i class="fa-solid fa-trash" id="deleteTodo" data-index="${i}" data-indexProject="${todo[i].getIndexProject()}"></i></button></span></li>` 
    }
}