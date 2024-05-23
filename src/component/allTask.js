import taskTransform from './taskTransform.js'
export default function taskClasstoHTML(taskArray, taskContainer) {
    taskContainer.innerHTML = "";
    for (const task of taskArray) {
        taskContainer.appendChild(taskTransform(task, {taskArray,taskContainer}));
    }
}