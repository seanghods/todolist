import TaskList from './list.js';
import Task from './task.js';

const masterTaskList = new TaskList();

function DOMLoad() {

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('create')) {
            const modal = document.querySelector(".create-modal")
            modal.classList.toggle("hidden");
        } 
        else if (e.target.id == 'submit') {
            const newTask = UI.createTask();
            masterTaskList.addTask(newTask);
            UI.showTask(newTask);
        }
        else if (e.target.classList.contains('preview')) {
            const modal = document.querySelector(".create-modal")
            modal.classList.add("hidden");
            UI.showPageTask(e.target);
        }
        else if (e.target.id == 'delete') {
            // e.target.parentNode.parentNode
        }
    })
}

class UI {
    static createTask() {
        const title = document.querySelector('#title');
        const dueDate = document.querySelector('#due-date');
        const priority = document.querySelector('#priority');
        const description = document.querySelector('#description');

        const newTask = new Task(title.value, dueDate.value, priority.value, description.value)
        this.createFieldReset();
        this.messageCreated();
        return newTask;
    }
    static deleteTask() {

    }
    static showTask(task) {
        const divArea = document.querySelector(`.${task.priority}`);
        const taskDiv = document.createElement('div');
        taskDiv.innerHTML = `&#x2022; ${task.title}`;
        taskDiv.classList.add('preview');
        divArea.appendChild(taskDiv);
    }

    static createFieldReset() {
        const fieldIds = ['#title', '#due-date', '#priority', '#description'];
        fieldIds.forEach(id => {
            document.querySelector(id).value = '';
        })
    }
    static messageCreated() {
        const messageModal = document.querySelector('.create-message');
        messageModal.classList.remove('hidden');
        setTimeout(() => {
            messageModal.classList.add('hidden');
        },1500);
    }
    static showPageTask(target) {
        const pageTask = document.querySelector(".show-task")
        pageTask.classList.toggle("hidden");

        const title = document.querySelector(".titleshow");
        const dueDate = document.querySelector(".duedateshow");
        const priority = document.querySelector(".priorityshow");
        const description = document.querySelector(".descriptionshow");
        for (const each of masterTaskList.list) {
            if (target.innerHTML.substring(2) == each.title) {
                const titleDiv = document.createElement('div');
                titleDiv.innerHTML = each.title;
                title.appendChild(titleDiv);

                const dueDateDiv = document.createElement('div');
                dueDateDiv.innerHTML = each.dueDate;
                dueDate.appendChild(dueDateDiv);
                
                const priDiv = document.createElement('div');
                priDiv.innerHTML = each.priority;
                priority.appendChild(priDiv);
                
                const descDiv = document.createElement('div');
                descDiv.innerHTML = each.description;
                description.appendChild(descDiv);
            }
        }
    }
}

export {DOMLoad, UI}