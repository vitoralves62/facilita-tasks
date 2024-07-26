import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        nextId: 1
    }),
    actions: {
        addTask(task) {
            task.id = this.nextId;
            this.nextId += 1; // Incrementa o próximo ID
            this.tasks.push(task);
            this.saveTasks();
        },
        saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            localStorage.setItem('nextId', JSON.stringify(this.nextId));
        },
        loadTasks() {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            this.tasks = tasks;
            const maxId = tasks.reduce((max, task) => task.id > max ? task.id : max, 0);
            this.nextId = maxId + 1;
        },
    },
    getters: {
        totalTasks: (state) => state.tasks.length,
        urgentTasks: (state) => state.tasks.filter(task => task.categorie.toLowerCase() === 'urgente').length,
        importantTasks: (state) => state.tasks.filter(task => task.categorie.toLowerCase() === 'importante').length,
    }
});
