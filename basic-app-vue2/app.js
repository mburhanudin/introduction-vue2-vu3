Vue.component('the-button', {
    template: '<button @click="updateMessage">Click me</button>',
    methods: {
        updateMessage() {
            this.$emit('update');
        },
    },
});

new Vue({
    el: '#app',
    data: {
        message: 'Jalan di Vue2',
    },
    methods: {
        changeMessage() {
            this.message = 'Apakah jalan di Vue 3?';
        },
    },
});