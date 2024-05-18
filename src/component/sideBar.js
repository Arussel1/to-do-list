import AddImage from '../images/addTask.svg';
import AllImage from '../images/allTask.svg';
import nextWeekImage from '../images/nextWeek.svg';
import overdueImage from '../images/overdue.svg';
import projectImage from '../images/project.svg';
import todayImage from '../images/today.svg';

// Function to create a button with image and text
function createButton(imageSrc, textContent) {
    const button = document.createElement('button');
    const img = document.createElement('img');
    const text = document.createElement('p');
    img.src = imageSrc;
    text.textContent = textContent;
    button.appendChild(img);
    button.appendChild(text);
    return button;
}

export default function addImageAndTextToSidebar(sidebar) {
    sidebar.innerHTML = "";

    const buttonsConfig = [
        { imageSrc: AllImage, textContent: "All Task" },
        { imageSrc: AddImage, textContent: "Add Task" },
        { imageSrc: todayImage, textContent: "Today" },
        { imageSrc: nextWeekImage, textContent: "Next Week" },
        { imageSrc: overdueImage, textContent: "Overdue" },
        { imageSrc: projectImage, textContent: "My Project" },
    ];

    buttonsConfig.forEach(config => {
        const button = createButton(config.imageSrc, config.textContent);
        sidebar.appendChild(button);
    });
}