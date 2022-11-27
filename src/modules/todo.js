import { addNewTodo } from "./project.js";

function TodoItem(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}
export const addTodoItem = (title, description, dueDate, priority, indexP) =>{
    let item = new TodoItem(title, description, dueDate, priority);
    addNewTodo(item, indexP)
}
