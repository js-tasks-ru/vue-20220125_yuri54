import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
  const Root = defineComponent({
    name: 'Root',

    data() {
      return {
        operator: '',
        firstNum: 0,
        secondNum: 0,
      }
    },
    computed: {
      result(){
        return !Number.isNaN(this.handleResult()) && this.handleResult() !== Infinity ? this.handleResult() : 0   // исключение в result Infinity и NaN ( при 0 / 0 )
      }
    },
    methods: {
      handleResult() {
         let firstNum = this.firstNum;
         let secondNum = this.secondNum;
        if (this.operator === "sum") {
          return firstNum + secondNum
        } else if (this.operator === "subtract") {
          return firstNum - secondNum
        } else if (this.operator === "multiply") {
          return firstNum * secondNum
        } else if (this.operator === "divide") {
          return firstNum / secondNum
        }
      }
    }
  })

  const app = createApp(Root)

  const vm = app.mount('#app')
  window.vm = vm;
