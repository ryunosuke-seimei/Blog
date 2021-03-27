const vm = new Vue({
  el: '#app',
  data: {
    message: 'Hellor Vue.js!',
    isChecked:false
  }
});

const vm2 = new Vue({
  el: '#app2',
  data: {
    items: [
        { title: '項目1', id: 1 },
        { title: '項目2', id: 2 },
        { title: '項目3', id: 3 },
    ]
  },
});

const vm3 = new Vue({
  el: '#app3',
  data: {
    counter: 0
  },
  methods: {
    add: function(){
      this.counter++
    },
  },
});

const vm4 = new Vue({
  el: '#app4',
  data: {
    items: [
        { title: '領収書を準備する', isChecked: true },
        { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
        { title: '参加者の人数を確認する', isChecked: false },
        { title: 'ピザを注文する', isChecked: false },
        { title: '参加費のお釣りを準備する', isChecked: false },
        { title: '会場設営をする', isChecked: false },
    ],
    newItemTitle:""
  },
  methods:{
    addTodo: function(){
      this.items.push({
          title: this.newItemTitle,
          isChecked:false
      });
      this.newItemTitle = '';
      this.saveTodo(); //ブラウザに保存
    },
    deleteTodo: function(){
      this.items = this.items.filter(function (item) {
        return item.isChecked === false; //
      });
      this.saveTodo(); //ブラウザに保存
    },
    saveTodo: function(){
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    loadTodo: function(){
      this.items = JSON.parse( localStorage.getItem('items') );
      if( !this.items ){
        this.items = [];
      }
    },
  },
  mounted: function(){
    this.loadTodo();
  },
})
