import { addNewTodo, getTodo } from "./project.js";

function TodoItem(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
export const addTodoItem = (title, description, dueDate, priority, indexP) =>{
    let item = new TodoItem(title, description, dueDate, priority);
    addNewTodo(item, indexP);
    addUlTodo(getTodo(indexP));
}

export const addUlTodo = (todo) => {
    const ul = document.querySelector('#todoList')    
    ul.textContent = '';
    for (let i = 0; i < todo.length; i++) {
        ul.innerHTML += `<li class="${todo[i].getPriority()}" data-index="${i}" id="todoLi"><span>${todo[i].getTitle()}</span> <span>${todo[i].getDueDate()}</span></li>` 
    }
}