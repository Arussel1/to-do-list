import { format, addDays, isWithinInterval } from "date-fns";
import taskTransform from './taskTransform.js';

export default function nextWeek(taskArray, taskContainer, options = {}) {
    const today = new Date();
    const nextWeekDate = addDays(today, 7);
    taskContainer.innerHTML = "";
    for (const task of taskArray) {
        const taskDate = new Date(task.date);
        if (isWithinInterval(taskDate, { start: today, end: nextWeekDate })) {
            taskContainer.appendChild(taskTransform(task, options));
        }
    }
}