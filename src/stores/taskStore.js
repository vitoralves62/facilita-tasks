import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        nextId: 1
    }),
    actions: {
        addTask(task) {
            task.id = this.nextId;
            task.completed = false;
            this.nextId += 1;
            this.tasks.push(task);
            this.saveTasks();
        },
        updateTask(updatedTask) {
            const index = this.tasks.findIndex(task => task.id === updatedTask.id);
            if (index !== -1) {
                this.tasks.splice(index, 1, updatedTask);
                this.saveTasks();
            }
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
        deleteTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
            this.saveTasks();
        },
        toggleTaskCompletion(taskId) {
            console.log('entrei na toggleTask do taskStore')
            const task = this.tasks.find(task => task.id === taskId);
            if (task) {
                task.completed = !task.completed;
                this.saveTasks();
            }
        }
    },
    getters: {
        totalTasks: (state) => state.tasks.length,
        urgentTasks: (state) => state.tasks.filter(task => (task.categorie.toLowerCase() === 'urgente') && !task.completed).length,
        importantTasks: (state) => state.tasks.filter(task => (task.categorie.toLowerCase() === 'importante') && !task.completed).length,
        normalTasks: (state) => state.tasks.filter(task => !['urgente', 'importante'].includes(task.categorie.toLowerCase()) && !task.completed).length,
        completedTasks: (state) => state.tasks.filter(task => task.completed).length,
        pendenceTasks: (state) => state.tasks.filter(task => !task.completed).length,
    }
});
