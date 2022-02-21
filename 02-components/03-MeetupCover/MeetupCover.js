import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props:{
    title: {
      type: String
    },
    image: {
      type: String
    }
  },
  methods:{
    handleUrlImage(){
      return this.image ? 'url(' + this.image + ')' : ''
    }
  },

  template: `
    <div class="meetup-cover" :style="{ '--bg-url': handleUrlImage() } ">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
