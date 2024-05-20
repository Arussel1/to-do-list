import './style.css';
import addImageAndTextToSidebar from './component/sideBar.js';
import Task from './component/taskConstructor.js';
import taskClasstoHTML from './component/allTask.js';
import { compareAsc, format } from "date-fns";

const sidebar = document.querySelector(".sidebar");
const taskContainer = document.querySelector(".taskContainer")
let taskArray = [new Task("Find internship","Prepare for next winter",format(new Date(2014, 0, 11), "yyyy-MM-dd"),"#General",'low'),new Task("Find internship","Prepare for next winter",format(new Date(2014, 0, 11), "yyyy-MM-dd"),"#General",'high')];
let projectArray = ["General"];
addImageAndTextToSidebar(sidebar,projectArray);
taskClasstoHTML(taskArray,taskContainer);