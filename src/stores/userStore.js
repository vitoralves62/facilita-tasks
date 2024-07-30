import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),
    actions: {
        login(userData) {
            this.user = userData;
            localStorage.setItem('user', JSON.stringify(userData));
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
        },
        loadUser() {
            const user = localStorage.getItem('user');
            if (user) {
                this.user = JSON.parse(user);
            }
        }
    }
});
