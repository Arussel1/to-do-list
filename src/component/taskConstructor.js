export default class Task {
    constructor(title, description, date, project, priority) {
        this._title = title;
        this._description = description;
        this._date = date;
        this._project = project;
        this._priority = priority;
    }   

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get date() {
        return this._date;
    }

    get project() {
        return this._project;
    }

    get priority() {
        return this._priority;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    set date(newDate) {
        this._date = newDate;
    }

    set project(newProject) {
        this._project = newProject;
    }

    set priority(newPriority) {
        this._priority = newPriority;
    }
}