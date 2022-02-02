import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
  const Root = defineComponent({
    name: 'Root',

    data() {
      return {
        elementsCalculator: {
          firstNum: 0,
          secondNum: 0,
          operations: {
            sum: true,
            subtract: false,
            multiply: false,
            divide: false,
          },
        },
      }
    },
    computed: {
      result(){
        return this.handleResult() > 0 && this.handleResult() !== Infinity ? this.handleResult() : 0
      }
    },
    methods: {
      handleResult() {
         let firstNum = this.elementsCalculator.firstNum;
         let secondNum = this.elementsCalculator.secondNum;
         if (this.elementsCalculator.operations.sum) {
           return firstNum + secondNum
         } else if (this.elementsCalculator.operations.subtract) {
           return firstNum - secondNum
         } else if (this.elementsCalculator.operations.multiply) {
           return firstNum * secondNum
         } else if (this.elementsCalculator.operations.divide) {
           return firstNum / secondNum
         }
      },
      changeOperation(opName) {
        this.elementsCalculator.operations.sum = opName === 'sum'
        this.elementsCalculator.operations.subtract = opName === 'subtract'
        this.elementsCalculator.operations.multiply = opName === 'multiply'
        this.elementsCalculator.operations.divide = opName === 'divide'
      }
    }
  })

  const app = createApp(Root)

  const vm = app.mount('#app')
  window.vm = vm;
