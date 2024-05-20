import AddImage from '../images/addTask.svg';
import AllImage from '../images/allTask.svg';
import nextWeekImage from '../images/nextWeek.svg';
import overdueImage from '../images/overdue.svg';
import projectImage from '../images/project.svg';
import todayImage from '../images/today.svg';
import fileImage from '../images/file.svg';

// Function to create a button with image and text
function createButton(imageSrc, textContent,className) {
    const button = document.createElement('button');
    const img = document.createElement('img');
    const text = document.createElement('p');
    img.src = imageSrc;
    text.textContent = textContent;
    button.classList.add(className);
    button.appendChild(img);
    button.appendChild(text);
    return button;
}

export default function addImageAndTextToSidebar(sidebar,projectArray,addTaskDialog, addProjectDialog) {
    sidebar.innerHTML = "";

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
        if (config.className == "addProject") {
            button.addEventListener('click', () => {
                addProjectDialog.showModal();
            });
        }else if (config.className == "addTask"){
            button.addEventListener('click', () => {
                addTaskDialog.showModal();
            });
        }
        sidebar.appendChild(button);
    });

    projectArray.forEach(projectName => {
        const button = createButton(fileImage,projectName,"myProjectName");
        sidebar.appendChild(button);
    })

    
}