import Task from './taskConstructor.js';

export default function addTask(projectList){

const dialog = document.createElement('dialog');
dialog.className = 'formContainer';


const form = document.createElement('form');

const titleLabel = document.createElement('label');
titleLabel.setAttribute('for', 'title');
titleLabel.textContent = 'Title:';
const titleInput = document.createElement('input');
titleInput.setAttribute('type', 'text');
titleInput.setAttribute('name', 'title');
titleInput.required = true;
form.appendChild(titleLabel);
form.appendChild(titleInput);
form.appendChild(document.createElement('br'));

const descriptionLabel = document.createElement('label');
descriptionLabel.setAttribute('for', 'description');
descriptionLabel.textContent = 'Description:';
const descriptionInput = document.createElement('input');
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('name', 'description');
descriptionInput.required = true;
form.appendChild(descriptionLabel);
form.appendChild(descriptionInput);
form.appendChild(document.createElement('br'));

const dateLabel = document.createElement('label');
dateLabel.setAttribute('for', 'date');
dateLabel.textContent = 'Date:';
const dateInput = document.createElement('input');
dateInput.setAttribute('type', 'date');
dateInput.setAttribute('name', 'date');
dateInput.required = true;
form.appendChild(dateLabel);
form.appendChild(dateInput);
form.appendChild(document.createElement('br'));

const priorityLabel = document.createElement('label');
priorityLabel.setAttribute('for', 'priority');
priorityLabel.textContent = 'Priority:';
const prioritySelect = document.createElement('select');
prioritySelect.setAttribute('name', 'priority');
const options = ['low', 'medium', 'high'];
options.forEach(optionValue => {
    const option = document.createElement('option');
    option.setAttribute('value', optionValue);
    option.textContent = optionValue.charAt(0).toUpperCase() + optionValue.slice(1);
    prioritySelect.appendChild(option);
});
form.appendChild(priorityLabel);
form.appendChild(prioritySelect);
form.appendChild(document.createElement('br'));

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('autofocus', true);
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

dialog.appendChild(form);

document.body.appendChild(dialog);
}