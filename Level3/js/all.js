const app = new Vue({
  el: '#app',
  data: {
    result: '',
    resultSmall: '1280 × 30 - 200 ÷ 20',
    cacheResult: 0
  },
  methods: {
    addNumber: function (number) {
      this.resultSmall += number
      this.result += number
    },
    reduceNumber: function () {
      let leng = this.result.length
      this.result = this.result.substr(0, leng - 1)
    },
    operation: function (item) {
      if ('+' || '-' || '×' || '÷' === item) {
        this.resultSmall += item
        this.result = 0
      }
    },
    resultFu: function () {
      let vm = this
      let str = vm.resultSmall.replace(/×/g, '*').replace(/÷/g, '/').replace(/-/g, '-')
      console.log(str)
      this.result = eval(str)
    },
    removeNumber: function () {
      this.result = ''
      this.resultSmall = ''
    }
  }
})
