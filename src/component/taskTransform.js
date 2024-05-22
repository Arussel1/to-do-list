export default function taskTransform(task, options = {}) {
    const taskDiv = document.createElement('div');
    const taskCheckbox = document.createElement('input');
    const textDiv = document.createElement('div');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const project = document.createElement('p');
    const date = document.createElement('p');

    taskCheckbox.type = "checkbox";
    if(taskCheckbox.checked == true){
        taskDiv.style.textDecoration = "lineThrough";
    }

    title.classList.add("title");
    title.textContent = task.title;
    description.textContent = task.description;
    textDiv.appendChild(title);
    textDiv.appendChild(description);

    project.classList.add("project");
    switch (task.priority) {
        case "low":
            project.style.backgroundColor = "var(--low-priority)";
            break;
        case "medium":
            project.style.backgroundColor = "var(--medium-priority)";
            break;
        case "high":
            project.style.backgroundColor = "var(--high-priority)";
            break;
    }
    project.textContent = task.project;

    date.classList.add("date");
    date.textContent = task.date;

    taskDiv.classList.add("task");
    taskDiv.appendChild(taskCheckbox);
    taskDiv.appendChild(textDiv);
    taskDiv.appendChild(project);
    taskDiv.appendChild(date);

    taskCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            taskDiv.style.textDecoration = "line-through";
        } else {
            taskDiv.style.textDecoration = "none";
        }
    });
    
    if (options.customizeTaskDiv) {
        options.customizeTaskDiv(taskDiv);
    }
    
    taskDiv.appendChild(createDeleteButton());
    taskDiv.appendChild(createEditButton());;



    return taskDiv;
}

function updateTaskDisplay(taskArray, taskContainer) {
    taskContainer.innerHTML = '';
    taskArray.forEach(task => {
        const taskElement = taskTransform(task);
        taskContainer.appendChild(taskElement);
    });
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = 'Delete';
    return deleteButton;
}

function createEditButton() {
    const editButton = document.createElement('button');
    editButton.classList.add("editButton");
    editButton.textContent = 'Edit';
    return editButton;
}