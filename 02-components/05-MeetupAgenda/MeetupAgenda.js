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
        <div>
          <meetup-agenda-item :agenda-item="agenda[0]"></meetup-agenda-item>
        </div>
        <div>
          <meetup-agenda-item :agenda-item="agenda[1]"></meetup-agenda-item>
        </div>
        <div>
          <meetup-agenda-item :agenda-item="agenda[2]"></meetup-agenda-item>
        </div>
      </li>
    </ul>`,
});
