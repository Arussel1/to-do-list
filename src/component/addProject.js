export default function addProject(dialog) {

    dialog.innerHTML = "";
    const form = document.createElement('form');
    form.name = "addProjectForm";
    const br = document.createElement('br');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.required = true;
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(br);

    const submitButton = document.createElement('button');
    submitButton.classList.add("addProjectSubmitButton");
    submitButton.setAttribute('type', 'button');
    submitButton.setAttribute('autofocus', true);
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    dialog.appendChild(form);
}