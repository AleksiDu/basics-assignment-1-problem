const app = Vue.createApp({
    data() {
        return {
            name: 'Aleksi',
            age: '31',
            imgLink: 'https://cdn.pixabay.com/photo/2022/09/25/23/28/android-7479380_960_720.png'
        }
    },
    methods: {
        agePlusFive() {
            return Number(this.age) + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment')