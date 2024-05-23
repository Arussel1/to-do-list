import taskTransform from './taskTransform.js';

export default function project(taskArray, taskContainer, id, options = {}) {
    taskContainer.innerHTML = "";
    for (const task of taskArray) {
        if (task.project == id) {
            taskContainer.appendChild(taskTransform(task, options));
        }
    }
}