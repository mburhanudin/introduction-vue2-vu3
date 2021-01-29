const app = Vue.createApp({
    data() {
        return { message: 'Berjalan di Vue2' };
    },
    methods: {
        changeMessage() {
            this.message = 'Apakah jalan di Vue 3?';
        },
    },
});

app.component('the-button', {
    emits: ['update'],
    template: '<button @click="updateMessage">Click me</button>',
    methods: {
        updateMessage() {
            this.$emit('update');
        },
    },
});

app.mount('#app');