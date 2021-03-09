new Vue({
  el: '#app',
  data: {
    show: true
  }
})

new Vue({
  el: '#app1',
  data: {
    show: true
  }
})

new Vue({
  el: '#app2',
  data: {
    count: 0
  }
})

new Vue({
  el: '#app3',
  data: {
    order: false,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 300 }
    ]
  },
  computed: {
    // orderの値でリストの順番を反転する算出プロパティ
    sortedList: function () {
      // LodashのorderByメソッドを使用
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
    }
  }
})

new Vue({
  el: '#app4',
  data: {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  methods: {
    doShuffle: function () {
      this.list = _.shuffle(this.list)
    },
    doAdd: function() {
      var newNumber = Math.max.apply(null, this.list) + 1
      var index = Math.floor(Math.random() * (this.list.length + 1))
      this.list.splice(index, 0, newNumber)
    },
    doRemove: function (index) {
      this.list.splice(index, 1)
    }
  }
})

let ttt = Vue.component('my-circle', {
  template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill"/>',
  props: {
    fill: String
  }
})
new Vue({
  el: '#app5',
  data: {
    toggle: false
  },
  computed: {
    fill: function () {
      return this.toggle ? 'lightpink' : 'skyblue'
    }
  },
  templates:{
    ttt
  }
})
