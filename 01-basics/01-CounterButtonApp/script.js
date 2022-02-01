 // import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const Counter = {
   data() {
     return {
       count: 0,
     }
   },
   methods: {
     plusOneCount () {
       this.count ++
     }
   }
   }

   Vue.createApp(Counter).mount('#app')
