import './style.css';
import addImageAndTextToSidebar from './component/sideBar.js';
import Task from './component/taskConstructor.js';
import taskClasstoHTML from './component/allTask.js';
import addTask from './component/addTask.js';
import { format } from "date-fns";

const sidebar = document.querySelector(".sidebar");
const taskContainer = document.querySelector(".taskContainer");
const addTaskDialog = document.querySelector('.addTaskDialog');
let taskArray = [new Task("Find internship","Prepare for next winter",format(new Date(2014, 0, 11), "yyyy-MM-dd"),"General",'low'),new Task("Find internship","Prepare for next winter",format(new Date(2014, 0, 11), "yyyy-MM-dd"),"General",'high')];
let projectArray = ["General"];
addImageAndTextToSidebar(sidebar,projectArray);
taskClasstoHTML(taskArray,taskContainer);
addTask(projectArray,addTaskDialog);

const form = document.forms["addTaskForm"];
const addTaskButton = document.querySelector('.addTask');
addTaskButton.addEventListener('click', () => {
    addTaskDialog.showModal();
});

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const newTask = new Task(
        form.title.value, 
        form.description.value, 
        form.date.value, 
        form.project.value, 
        form.priority.value
    );
    
    taskArray.push(newTask);
    taskClasstoHTML(taskArray, taskContainer);
    addTaskDialog.close(); 
});