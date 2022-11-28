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
export const addTodoItem = (title, description, dueDate, priority, indexP) =>{
    let item = new TodoItem(title, description, dueDate, priority);
    addNewTodo(item, indexP);
    console.log(getTodo(indexP));
    addUlTodo(getTodo(indexP));
}

export const addUlTodo = (todo) => {
    const ul = document.querySelector('#todoList')    
    ul.textContent = '';
    for (let i = 0; i < todo.length; i++) {
        ul.innerHTML += `<li data-index="${i}" id="todoLi">${todo[i].getTitle()} ${todo[i].getDueDate()}</li>` 
    }
}