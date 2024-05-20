import taskTransform from './taskTransform.js'
export default function overdue(taskArray, taskContainer, options = {}) {
    const today = format(new Date(),"yyyy-MM-dd");
    taskContainer.innerHTML = "";
    for (const task of taskArray) {
        if(task.date < today)
        taskContainer.appendChild(taskTransform(task, options));
    }
}