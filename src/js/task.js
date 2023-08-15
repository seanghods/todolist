export default class Task {
    constructor(title, dueDate, priority, description) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
    }

    getTitle () {
        return this.title;
    }
}