let myComponent = {
  template: `
    <p>
    message
    <slot></slot>
    <slot name="one"></slot>
    <slot name="two"></slot>
    </p>
    `
}
new Vue({
  el:"#app1",
  components:{
    "my-component": myComponent
  }
})

let test = Vue.component('comp-child', {
  // テンプレートで受け取ったvalを使用
  template: '<p>{{ val }}</p>',
  // 受け取る属性名を指定
  // props: ['val']
  props: {
    val: String,
  }
})

new Vue({
  el: '#app2',
  data: {
    valueA: 'これは子A',
    valueB: 'これは子B'
  },
  templates:{
    test
  }
})

let test2 = Vue.component('comp-child', {
  template: '<button v-on:click="handleClick">イベント発火</button>',
  methods: {
    // ボタンのクリックイベントのハンドラでchilds-eventを発火する
    handleClick: function () {
      this.$emit('childs-event');
      console.log("child");
    }
  }
})
new Vue({
  el: '#app3',
  methods: {
    // childs-eventが発生した！
    parentsMethod: function () {
      // alert('イベントをキャッチ！ ');
      console.log("parent");
    }
  }
})

new Vue({
  el:"#app4",
  components:{
    "my-component": myComponent
  }
})


let mixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

let a = Vue.component('my-component-a', {
  mixins: [mixin], // ミックスインを登録
  template: '<div class="my-component-a">component A</div>'
})
// コンポーネントB
let b = Vue.component('my-component-b', {
  mixins: [mixin], // ミックスインを登録
  template: '<div class="my-component-b">component B</div>'
})
new Vue({
  el: '#app5',
  data: {
    // コンポーネントのリスト
    componentTypes: ['my-component-a', 'my-component-b'],
    // 描画するコンポーネントを選択するためのindex
    current: 0
  },
  templates:{
    a, b
  },
  computed: {
    component: function () {
      // currentと一致するindexのコンポーネントを使用
      return this.componentTypes[this.current]
      // 別に `return current ? 'my-component-b' : 'my-component-a'` とかでもよい
    }
  }
})
