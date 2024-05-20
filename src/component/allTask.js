import taskTransform from './taskTransform.js'
export default function taskClasstoHTML(taskArray, taskContainer, options = {}) {
    taskContainer.innerHTML = "";
    for (const task of taskArray) {
        taskContainer.appendChild(taskTransform(task, options));
    }
}