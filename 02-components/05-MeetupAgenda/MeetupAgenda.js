import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem
  },

  props: {
    agenda: {
      type: Array,
      required: true
    }
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item">
        <div v-for="agendaItem in agenda">
          <meetup-agenda-item :agenda-item="agendaItem"></meetup-agenda-item>
        </div>
      </li>
    </ul>`,
});
