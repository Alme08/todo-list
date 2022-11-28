/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo.js */ \"./src/modules/todo.js\");\n\n\n\nconst addProjectScreen = document.querySelector('.addProject');\nconst nameProject = document.querySelector('#nameProject');\nconst editProjectScreen = document.querySelector('.editProject');\nconst editNameProject = document.querySelector('#editNameProject')\nconst addTodoScreen = document.querySelector('.addTodo');\n// const addT = document.querySelector('#addT');\nlet indexProject;\nlet editProjectIndex;\n\nwindow.addEventListener('click', e =>{\n    // e.preventDefault();\n    switch (e.target.id) {\n        case 'project-nav':\n            (0,_modules_project_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\n            break;\n        case 'addProject':\n            addProjectScreen.classList.remove('display-none');\n            break;\n            \n        case 'cancelP':\n            addProjectScreen.classList.add('display-none');\n            break;\n                \n        case 'addP':\n            e.preventDefault();\n            (0,_modules_project_js__WEBPACK_IMPORTED_MODULE_0__.addNewProject)(nameProject.value);\n            addProjectScreen.classList.add('display-none');\n            break;\n        \n        case 'projectLi':\n            (0,_modules_project_js__WEBPACK_IMPORTED_MODULE_0__.displayProject)(e.target.dataset.index);\n            break;\n\n        case 'editProject':\n            editProjectIndex = e.target.dataset.index;\n            editProjectScreen.classList.remove('display-none');\n            editNameProject.value = (0,_modules_project_js__WEBPACK_IMPORTED_MODULE_0__.getTitleProject)(e.target.dataset.index);\n            break;\n\n        case 'addPE':\n            e.preventDefault();\n            (0,_modules_project_js__WEBPACK_IMPORTED_MODULE_0__.setTitleProject)(editProjectIndex, editNameProject.value)\n            editProjectScreen.classList.add('display-none');\n            break;\n\n        case 'cancelPE':\n            editProjectScreen.classList.add('display-none');\n            break;\n                 \n        case 'addTodo':\n            indexProject = e.target.dataset.indexproject;\n            addTodoScreen.classList.remove('display-none');\n            break;\n        \n        case 'cancelT':\n            addTodoScreen.classList.add('display-none');\n            break;\n\n        case 'addT':\n            e.preventDefault();\n            let nameT = document.querySelector('#nameTodo');\n            let descriptionT = document.querySelector('#descriptionTodo');\n            let dueDateT = document.querySelector('#dueDateTodo');\n            let priorityT = document.getElementsByName('priority');\n            let priorityTValue;\n            for(let i = 0; i < priorityT.length; i++){\n                if(priorityT[i].checked){\n                    priorityTValue = priorityT[i].value;\n                    break;\n                }\n            }\n            if (nameT.value && descriptionT.value && dueDateT.value && priorityTValue) {\n                console.log(si);\n            }\n            (0,_modules_todo_js__WEBPACK_IMPORTED_MODULE_1__.addTodoItem)(nameT.value, descriptionT.value, dueDateT.value, priorityTValue, indexProject);\n            addTodoScreen.classList.add('display-none');\n            break;\n\n        default:\n            break;\n    }\n})\n                \n;(0,_modules_project_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"addNewTodo\": () => (/* binding */ addNewTodo),\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"getTitleProject\": () => (/* binding */ getTitleProject),\n/* harmony export */   \"getTodo\": () => (/* binding */ getTodo),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"setTitleProject\": () => (/* binding */ setTitleProject)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n\nconst container = document.querySelector('.container');\nconst projects = [];\n\nfunction Project(title){\n    this.title = title;\n    this._todoItems = [];\n}\nProject.prototype.addTodoProject = function (todo){\n    this._todoItems.push(todo);\n}\nProject.prototype.getTodoProject = function (){\n    return this._todoItems;\n}\nProject.prototype.getTitle = function(){\n    return this.title;\n}\nProject.prototype.setTitle = function(title){\n    this.title = title;\n}\nconst defaultProject = new Project('Default');\nprojects.push(defaultProject);\n\nconst addNewProject = (title)=>{\n    let item = new Project(title);\n    projects.push(item)\n    addUlProject();\n}\nconst addNewTodo = (todo, index) =>{\n    projects[index].addTodoProject(todo)\n}\nconst getTodo = (index) =>{\n   return projects[index].getTodoProject()\n}\nconst getTitleProject = (index) =>{\n   return projects[index].getTitle()\n}\nconst setTitleProject = (index, title) =>{\n    projects[index].setTitle(title)\n    addUlProject();\n}\n\n\nconst displayProjects = () =>{\n    container.innerHTML = `\n        <section class=\"project\">\n            <div>\n                <h1>Projects</h1>\n                <button id=\"addProject\"><i class=\"fa-solid fa-plus\"></i> Add project</button>\n            </div>\n            <hr>\n            <ul id=\"ulList\">\n            </ul>\n        </section>\n    `\n    addUlProject();\n}\nconst addUlProject = () => {\n    const uls = document.querySelectorAll('#ulList')\n    uls.forEach(ul=>{\n        ul.textContent = '';\n        for (let i = 0; i < projects.length; i++) {\n            ul.innerHTML += `<li data-index=\"${i}\" id=\"projectLi\"><span data-index=\"${i}\" id=\"projectLi\"><i class=\"fa-solid fa-circle\"></i>${projects[i].getTitle()}</span><button id=\"editProject\" data-index=\"${i}\"><i id=\"editProject\" data-index=\"${i}\" class=\"fa-solid fa-pen-to-square\"></i></button><button><i class=\"fa-solid fa-trash\"></i></button></li>` \n        }\n    })\n}\n\nconst displayProject = (index)=> {\n    container.innerHTML = `\n        <section class=\"\">\n            <div>\n                <h1>${projects[index].getTitle()}</h1>\n                <button id=\"addTodo\" data-indexproject=\"${index}\"><i class=\"fa-solid fa-plus\"></i> Add Todo</button>\n            </div>\n            <ul id=\"todoList\">\n            </ul>\n        </section>\n    `\n    ;(0,_todo__WEBPACK_IMPORTED_MODULE_0__.addUlTodo)(getTodo(index));\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoItem\": () => (/* binding */ addTodoItem),\n/* harmony export */   \"addUlTodo\": () => (/* binding */ addUlTodo)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/modules/project.js\");\n\n\nfunction TodoItem(title, description, dueDate, priority){\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n}\nTodoItem.prototype.getTitle = function(){\n    return this.title\n}\nTodoItem.prototype.getDueDate = function(){\n    return this.dueDate\n}\nTodoItem.prototype.getPriority = function(){\n    return this.priority\n}\nconst addTodoItem = (title, description, dueDate, priority, indexP) =>{\n    let item = new TodoItem(title, description, dueDate, priority);\n    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.addNewTodo)(item, indexP);\n    addUlTodo((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getTodo)(indexP));\n}\n\nconst addUlTodo = (todo) => {\n    const ul = document.querySelector('#todoList')    \n    ul.textContent = '';\n    for (let i = 0; i < todo.length; i++) {\n        ul.innerHTML += `<li class=\"${todo[i].getPriority()}\" data-index=\"${i}\" id=\"todoLi\"><span>${todo[i].getTitle()}</span> <span>${todo[i].getDueDate()}</span></li>` \n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;