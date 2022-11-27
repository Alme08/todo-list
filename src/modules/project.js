const container = document.querySelector('.container');
export const projects = [];
function Project(title){
    this.title = title;
    let _todoItems = [];
}
Project.prototype.addTodoProject = function (todo){
    _todoItems.push(todo);
}
Project.prototype.getTitle = function(){
    return this.title
}
export const addNewProject = (title)=>{
    let item = new Project(title);
    projects.push(item)
    addUlProject();
}

export const displayProject = () =>{
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
            console.log(projects[i].getTitle());
            ul.innerHTML += `<li data-set="${i}"><i class="fa-solid fa-circle"></i>${projects[i].getTitle()}</li>`
            
        }

    })
}