import taskTransform from './taskTransform.js'

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export default function nextWeek(taskArray, taskContainer, options = {}) {
    const today = format(new Date(),"yyyy-MM-dd");
    taskContainer.innerHTML = "";
    for (const task of taskArray) {
        if(today < task.date <= addDays(today,7)){
            taskContainer.appendChild(taskTransform(task, options));
        }
        
    }
}