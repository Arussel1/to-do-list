function taskTransform(task, options = {}) {
    const taskDiv = document.createElement('div');
    const taskCheckbox = document.createElement('input');
    const textDiv = document.createElement('div');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const project = document.createElement('p');
    const date = document.createElement('p');

    taskCheckbox.type = "checkbox";

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

    if (options.customizeTaskDiv) {
        options.customizeTaskDiv(taskDiv);
    }

    return taskDiv;
}

export default function (taskArray, taskContainer, options = {}) {
    taskContainer.innerHTML = "";
    for (const task of taskArray) {
        taskContainer.appendChild(taskTransform(task, options));
    }
}