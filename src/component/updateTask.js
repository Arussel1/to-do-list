export default function updateTask(projectList, dialog, task = null) {
    dialog.innerHTML = "";
    let form = dialog.querySelector('#updateTaskForm');
    if (!form) {
        form = document.createElement('form');
        form.name = "updateTaskForm";
        form.id = "updateTaskForm"; 
        const br = document.createElement('br');

        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title');
        titleLabel.textContent = 'Title:';
        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('name', 'title');
        titleInput.required = true;
        titleInput.value = task.title;
        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        form.appendChild(br.cloneNode());

        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        descriptionLabel.textContent = 'Description:';
        const descriptionTextarea = document.createElement('textarea');
        descriptionTextarea.setAttribute('name', 'description');
        descriptionTextarea.required = true;
        descriptionTextarea.value = task.description;
        form.appendChild(descriptionLabel);
        form.appendChild(descriptionTextarea);
        form.appendChild(br.cloneNode());

        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'date');
        dateLabel.textContent = 'Date:';
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('name', 'date');
        dateInput.required = true;
        dateInput.value = task.date;
        form.appendChild(dateLabel);
        form.appendChild(dateInput);
        form.appendChild(br.cloneNode());

        const priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = 'Priority:';
        const prioritySelect = document.createElement('select');
        prioritySelect.setAttribute('name', 'priority');
        const priorityOptions = ['low', 'medium', 'high'];
        priorityOptions.forEach(optionValue => {
            const priorityOption = document.createElement('option');
            priorityOption.setAttribute('value', optionValue);
            priorityOption.textContent = optionValue.charAt(0).toUpperCase() + optionValue.slice(1);
            prioritySelect.appendChild(priorityOption);
        });
        prioritySelect.value = task.priority;

        form.appendChild(priorityLabel);
        form.appendChild(prioritySelect);
        form.appendChild(br.cloneNode());

        const projectLabel = document.createElement('label');
        projectLabel.setAttribute('for', 'project');
        projectLabel.textContent = 'Project:';
        const projectSelect = document.createElement('select');
        projectSelect.setAttribute('name', 'project');
        projectList.forEach(optionValue => {
            const projectOption = document.createElement('option');
            projectOption.setAttribute('value', optionValue);
            projectOption.textContent = optionValue.charAt(0).toUpperCase() + optionValue.slice(1);
            projectSelect.appendChild(projectOption);
        });
        projectSelect.value = task.project;

        form.appendChild(projectLabel);
        form.appendChild(projectSelect);
        form.appendChild(br.cloneNode());

        const updateButton = document.createElement('button');
        updateButton.classList.add("updateTaskButton");
        updateButton.setAttribute('type', 'button');
        updateButton.setAttribute('autofocus', true);
        updateButton.textContent = 'Update';
        form.appendChild(updateButton);
    }
    dialog.appendChild(form);
}