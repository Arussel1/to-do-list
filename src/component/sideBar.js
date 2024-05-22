import AddImage from '../images/addTask.svg';
import AllImage from '../images/allTask.svg';
import nextWeekImage from '../images/nextWeek.svg';
import overdueImage from '../images/overdue.svg';
import projectImage from '../images/project.svg';
import todayImage from '../images/today.svg';
import fileImage from '../images/file.svg';
import createButton from'./createButton.js'
import addProject from './addProject.js';

export default function addImageAndTextToSidebar(sidebar,projectArray) {
    sidebar.innerHTML = "";
    const taskSidebar = document.createElement("div");
    taskSidebar.classList.add("taskSideBar");
    const buttonsConfig = [
        { imageSrc: AllImage, textContent: "All Task", className: "allTask" },
        { imageSrc: AddImage, textContent: "Add Task", className: "addTask" },
        { imageSrc: todayImage, textContent: "Today", className: "today" },
        { imageSrc: nextWeekImage, textContent: "Next Week", className: "nextWeek" },
        { imageSrc: overdueImage, textContent: "Overdue", className: "overdue" },
        { imageSrc: AddImage, textContent: "Add Project", className: "addProject"},
        { imageSrc: projectImage, textContent: "My Project", className: "myProject" },
    ];

    buttonsConfig.forEach(config => {
        const button = createButton(config.imageSrc, config.textContent, config.className);
        taskSidebar.appendChild(button);
    });
    sidebar.appendChild(taskSidebar);

    sidebar.appendChild(projectSideBar(projectArray));
    
}
function projectSideBar(projectArray){
    const projectSidebar = document.createElement("div");
    projectSidebar.classList.add("projectSidebar")
    projectArray.forEach(projectName => {
        const button = createButton(fileImage,projectName,"myProjectName");
        button.id = projectName;
        projectSidebar.appendChild(button);
    });
    return projectSidebar;
}
