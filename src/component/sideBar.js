import AddImage from '../images/addTask.svg';
import AllImage from '../images/allTask.svg';
import nextWeekImage from '../images/nextWeek.svg';
import overdueImage from '../images/overdue.svg';
import projectImage from '../images/project.svg';
import todayImage from '../images/today.svg';

export default function addImageAndTextToSidebar(sidebar){
    sidebar.innerHTML = "";
    const allTask = document.createElement('button');
    const addTask = document.createElement('button');
    const nextWeek = document.createElement('button');
    const overdue = document.createElement('button');
    const project = document.createElement('button');
    const today = document.createElement('button');

    const allTaskImage = document.createElement('img');
    const allTaskText = document.createElement('p');
    allTaskImage.src = AllImage;
    allTaskText.textContent = "All Task";
    allTask.appendChild(allTaskImage);
    allTask.appendChild(allTaskText);
    
    const addTaskImage = document.createElement('img');
    const addTaskText = document.createElement('p');
    addTaskImage.src = AddImage;
    addTaskText.textContent = "Add Task";
    addTask.appendChild(addTaskImage);
    addTask.appendChild(addTaskText);

    const todayTaskImage = document.createElement('img');
    const todayTaskText = document.createElement('p');
    todayTaskImage.src = todayImage;
    todayTaskText.textContent = "Today";
    today.appendChild(todayTaskImage);
    today.appendChild(todayTaskText);

    const nextWeekTaskImage = document.createElement('img');
    const nextWeekTaskText = document.createElement('p');
    nextWeekTaskImage.src = nextWeekImage;
    nextWeekTaskText.textContent = "Next Week";
    nextWeek.appendChild(nextWeekTaskImage);
    nextWeek.appendChild(nextWeekTaskText);
    
    const overdueTaskImage = document.createElement('img');
    const overdueTaskText = document.createElement('p');
    overdueTaskImage.src = overdueImage;
    overdueTaskText.textContent = "Overdue";
    overdue.appendChild(overdueTaskImage);
    overdue.appendChild(overdueTaskText);

    const projectTaskImage = document.createElement('img');
    const projectTaskText = document.createElement('p');
    projectTaskImage.src = projectImage;
    projectTaskText.textContent = "My Project"
    project.appendChild(projectTaskImage);
    project.appendChild(projectTaskText);

    sidebar.appendChild(allTask);
    sidebar.appendChild(addTask);
    sidebar.appendChild(today);
    sidebar.appendChild(nextWeek);
    sidebar.appendChild(overdue);
    sidebar.appendChild(project);
}