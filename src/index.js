import "./style.css";
import addImageAndTextToSidebar from "./component/sideBar.js";
import Task from "./component/taskConstructor.js";
import taskClasstoHTML from "./component/allTask.js";
import addTask from "./component/addTask.js";
import addProject from "./component/addProject.js";
import createButton from "./component/createButton.js";
import today from "./component/today.js";
import nextWeek from "./component/nextWeek.js";
import overdue from "./component/overdue.js";
import project from "./component/project.js";
import File from "./images/file.svg";
import updateTask from "./component/updateTask.js";

const sidebar = document.querySelector(".sidebar");
const taskContainer = document.querySelector(".taskContainer");
const addTaskDialog = document.querySelector(".addTaskDialog");
const addProjectDialog = document.querySelector(".addProjectDialog");
const updateTaskDialog = document.querySelector(".updateTaskDialog");

let taskArray = [];
let projectArray = [];

function saveToLocalStorage() {
  const taskArrayToSave = taskArray.map((task) => [
    task.title,
    task.description,
    task.date,
    task.project,
    task.priority,
  ]);
  localStorage.setItem("taskArray", JSON.stringify(taskArrayToSave));
  localStorage.setItem("projectArray", JSON.stringify(projectArray));
}

function loadFromLocalStorage() {
  let loadedTasks = JSON.parse(localStorage.getItem("taskArray"));
  const loadedProjects = JSON.parse(localStorage.getItem("projectArray")) || [
    "General",
  ];

  if (!Array.isArray(loadedTasks)) {
    loadedTasks = [];
  }

  taskArray = loadedTasks
    .map((taskProps) => {
      if (Array.isArray(taskProps)) {
        return new Task(...taskProps);
      } else {
        console.error("Task properties are not an array:", taskProps);
        return null;
      }
    })
    .filter((task) => task !== null);

  projectArray = loadedProjects;
}

loadFromLocalStorage();
addImageAndTextToSidebar(sidebar, projectArray);
taskClasstoHTML(taskArray, taskContainer);
addTask(projectArray, addTaskDialog);
addProject(addProjectDialog);

function setDataIndexForTask() {
  let taskHTMLList = document.querySelectorAll(".task");
  for (let i = 0; i < taskArray.length; i++) {
    taskHTMLList[i].setAttribute("data-index", i);
  }
}

function deleteButtonEventListener() {
  document.querySelectorAll(".deleteButton").forEach((button) => {
    button.addEventListener("click", () => {
      const taskDiv = button.closest(".task");
      const dataIndex = taskDiv.getAttribute("data-index");
      taskArray.splice(dataIndex, 1);
      taskClasstoHTML(taskArray, taskContainer);
      setDataIndexForTask();
      deleteButtonEventListener();
      editButtonEventListener();
      saveToLocalStorage();
    });
  });
}

function editButtonEventListener() {
  document.querySelectorAll(".editButton").forEach((button) => {
    button.addEventListener("click", () => {
      const taskDiv = button.closest(".task");
      const dataIndex = taskDiv.getAttribute("data-index");
      const selectedTask = taskArray[dataIndex];
      updateTask(projectArray, updateTaskDialog, selectedTask);
      updateTaskDialog.showModal();
      const updateTaskForm = document.querySelector("#updateTaskForm");
      const updateTaskButton =
        updateTaskForm.querySelector(".updateTaskButton");
      updateTaskButton.addEventListener("click", function (event) {
        if (updateTaskForm.checkValidity()) {
          event.preventDefault();

          selectedTask.title = updateTaskForm.title.value;
          selectedTask.description = updateTaskForm.description.value;
          selectedTask.date = updateTaskForm.date.value;
          selectedTask.project = updateTaskForm.project.value;
          selectedTask.priority = updateTaskForm.priority.value;

          taskArray[dataIndex] = selectedTask;
          taskClasstoHTML(taskArray, taskContainer);
          updateTaskDialog.close();
          updateTaskForm.reset();
          setDataIndexForTask();
          deleteButtonEventListener();
          editButtonEventListener();
          saveToLocalStorage();
        } else {
          updateTaskForm.reportValidity();
        }
      });
    });
  });
}

const allTaskButton = document.querySelector(".allTask");
const todayButton = document.querySelector(".today");
const nextWeekButton = document.querySelector(".nextWeek");
const overdueButton = document.querySelector(".overdue");
const projectSidebar = document.querySelector(".projectSidebar");

allTaskButton.addEventListener("click", () => {
  taskClasstoHTML(taskArray, taskContainer);
});

todayButton.addEventListener("click", () => {
  today(taskArray, taskContainer);
});

nextWeekButton.addEventListener("click", () => {
  nextWeek(taskArray, taskContainer);
});

overdueButton.addEventListener("click", () => {
  overdue(taskArray, taskContainer);
});

function projectEventListener() {
  const projectButtons = document.querySelectorAll(".myProjectName");
  projectButtons.forEach((projectButton) => {
    if (projectButton.getAttribute("data-listener") !== "true") {
      projectButton.addEventListener("click", () => {
        project(taskArray, taskContainer, projectButton.id);
      });
      projectButton.setAttribute("data-listener", "true");
    }
  });
}
projectEventListener();

const addTaskForm = document.forms["addTaskForm"];
const addTaskButton = document.querySelector(".addTask");
const addTaskSubmitButton = document.querySelector(".addTaskSubmitButton");
addTaskButton.addEventListener("click", () => {
  addTaskDialog.showModal();
});

addTaskSubmitButton.addEventListener("click", function (event) {
  if (addTaskForm.checkValidity()) {
    event.preventDefault();
    const newTask = new Task(
      addTaskForm.title.value,
      addTaskForm.description.value,
      addTaskForm.date.value,
      addTaskForm.project.value,
      addTaskForm.priority.value,
    );

    taskArray.push(newTask);
    taskClasstoHTML(taskArray, taskContainer);
    addTaskDialog.close();
    addTaskForm.reset();
    setDataIndexForTask();
    editButtonEventListener();
    deleteButtonEventListener();
    saveToLocalStorage();
  } else {
    addTaskForm.reportValidity();
  }
});

const addProjectForm = document.forms["addProjectForm"];
const addProjectButton = document.querySelector(".addProject");
const addProjectSubmitButton = document.querySelector(
  ".addProjectSubmitButton",
);
addProjectButton.addEventListener("click", () => {
  addProjectDialog.showModal();
});

addProjectSubmitButton.addEventListener("click", function (event) {
  if (addProjectForm.checkValidity()) {
    event.preventDefault();
    const newName = addProjectForm.title.value;
    if (!projectArray.includes(newName)) {
      const newButton = createButton(File, newName, "myProjectName");
      newButton.id = newName;
      projectArray.push(newName);
      projectSidebar.appendChild(newButton);
      addTask(projectArray, addTaskDialog);
      projectEventListener();
    }
    addProjectDialog.close();
    addProjectForm.reset();
    saveToLocalStorage();
  } else {
    addProjectForm.reportValidity();
  }
});

deleteButtonEventListener();
setDataIndexForTask();
editButtonEventListener();