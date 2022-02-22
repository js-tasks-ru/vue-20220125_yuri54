import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
      required: true,
    }
  },
  emits: {'update:count': null},
  methods: {
    countPlusOne() {
      this.$emit('update:count', this.count+1 )
    }
  },

  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать  $emit('update:modelCount', count+=1 )
  template: `<button type="button" @click="countPlusOne()">{{ count }}</button>`,
});
