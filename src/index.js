import './style.css';
import addImageAndTextToSidebar from './component/sideBar.js';
import Task from './component/taskConstructor.js';
import taskClasstoHTML from './component/allTask.js';
import addTask from './component/addTask.js';
import addProject from './component/addProject.js';
import { format } from "date-fns";

/*Inital page */
const sidebar = document.querySelector(".sidebar");
const taskContainer = document.querySelector(".taskContainer");
const addTaskDialog = document.querySelector('.addTaskDialog');
const addProjectDialog = document.querySelector('.addProjectDialog');
let taskArray = [new Task("Find internship","Prepare for next winter",format(new Date(2014, 0, 11), "yyyy-MM-dd"),"General",'high')];
let projectArray = ["General"];
addImageAndTextToSidebar(sidebar,projectArray,addTaskDialog, addProjectDialog);
taskClasstoHTML(taskArray,taskContainer);
addTask(projectArray,addTaskDialog);
addProject(addProjectDialog);

/* Add task form value handler */
const addTaskForm = document.forms["addTaskForm"];

addTaskForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const newTask = new Task(
        addTaskForm.title.value, 
        addTaskForm.description.value, 
        addTaskForm.date.value, 
        addTaskForm.project.value, 
        addTaskForm.priority.value
    );
    
    taskArray.push(newTask);
    taskClasstoHTML(taskArray, taskContainer);
    addTaskDialog.close(); 
});

/* Add project form value handler */

const addProjectForm = document.forms["addProjectForm"];

addProjectForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    projectArray.push(addProjectForm.title.value);
    addImageAndTextToSidebar(sidebar,projectArray,addTaskDialog, addProjectDialog);
    addProjectDialog.close(); 
});