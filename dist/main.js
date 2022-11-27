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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project.js */ \"./src/modules/project.js\");\n\nconst addProject = document.querySelector('.addProject');\nconst nameProject = document.querySelector('#nameProject')\n\nwindow.addEventListener('click', e =>{\n    switch (e.target.id) {\n        case 'addProject':\n            addProject.classList.remove('display-none');\n            break;\n            \n        case 'cancel':\n            addProject.classList.add('display-none');\n            break;\n                \n        case 'addP':\n            e.preventDefault();\n            (0,_modules_project_js__WEBPACK_IMPORTED_MODULE_0__.addNewProject)(nameProject.value);\n            addProject.classList.add('display-none');\n            break;\n                    \n        default:\n            break;\n    }\n})\n                \n;(0,_modules_project_js__WEBPACK_IMPORTED_MODULE_0__.displayProject)();\nfunction TodoItem(title, description, dueDate, priority){\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n}\nconst addTodoItem = (title, description, dueDate, priority) =>{\n    let item = new TodoItem(title, description, dueDate, priority);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\nconst container = document.querySelector('.container');\nconst projects = [];\nfunction Project(title){\n    this.title = title;\n    let _todoItems = [];\n}\nProject.prototype.addTodoProject = function (todo){\n    _todoItems.push(todo);\n}\nProject.prototype.getTitle = function(){\n    return this.title\n}\nconst addNewProject = (title)=>{\n    let item = new Project(title);\n    projects.push(item)\n    addUlProject();\n}\n\nconst displayProject = () =>{\n    container.innerHTML = `\n        <section class=\"project\">\n            <div>\n                <h1>Projects</h1>\n                <button id=\"addProject\"><i class=\"fa-solid fa-plus\"></i> Add project</button>\n            </div>\n            <hr>\n            <ul id=\"ulList\">\n            </ul>\n        </section>\n    `\n    addUlProject();\n}\nconst addUlProject = () => {\n    const uls = document.querySelectorAll('#ulList')\n    uls.forEach(ul=>{\n        ul.textContent = '';\n        for (let i = 0; i < projects.length; i++) {\n            console.log(projects[i].getTitle());\n            ul.innerHTML += `<li data-set=\"${i}\"><i class=\"fa-solid fa-circle\"></i>${projects[i].getTitle()}</li>`\n            \n        }\n\n    })\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

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