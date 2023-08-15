export default class TaskList {
    constructor() {
        this.list = [];
    }
    addTask(task) {
        this.list.push(task);
    }
    removeTask(index) {
        this.list.splice(index, 1);
    }
}
