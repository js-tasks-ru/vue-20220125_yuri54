 import {defineComponent, createApp } from './vendor/vue.esm-browser.js';



const MeetupTitle = defineComponent( {
  name: 'MeetupTitle',
  data() {
    return {
      meetupId: '',
      meetupTitle: ''
    }
  },
  watch: {
    meetupId(newValue, oldValue) {
      this.fetchMeetupById(newValue)
    }
 },
  methods: {
    fetchMeetupById(meetupId) {
      const API_URL = 'https://course-vue.javascript.ru/api';
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json().then((result) => {
            this.meetupTitle = result.title;
          });
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    }
  }

})

const app = createApp(MeetupTitle)

const vm = app.mount('#app')
 window.vm = vm;

// Требуется создать Vue приложение
