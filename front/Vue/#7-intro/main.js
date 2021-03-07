new Vue({
  el:"#app1",
  data:{
    width:800,
    height:400
  },
  computed:{
    halfWidth:{
      get: function(){
        return this.width / 2
      },
      set: function(val){
        this.width = val * 2
      }
      // return this.width / 2
    },
    halfHeight: function(){
      return this.height / 2
    },
    halfPoint: function(){
      return{
        x: this.halfWidth,
        y: this.halfHeight
      }
    },
    randomCompute: function(){
      return Math.random()
    }
  },
  methods:{
    randomMethod: function(){
      return Math.random()
    }
  }
})

new Vue({
  el: '#app2',
  data: {
    // フォームの入力と紐付けるデータ
    budget: 300,
    // 表示件数
    limit: 2,
    // もとになるリスト
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 400 },
      { id: 4, name: 'おれんじ', price: 300 },
      { id: 5, name: 'めろん', price: 500 }
    ]
  },
  computed: {

    // budget以下のリストを返す算出プロパティ
    matched: function () {
      return this.list.filter(function (el) {
        return el.price <= this.budget
      }, this)
    },
    // matchedで返ったデータをlimit件返す算出プロパティ
    limited: function () {
      return this.matched.slice(0, this.limit)
    },

  }
})

new Vue({
  el:"#app3",
  data:{
    number:1,
    numbers:1
  },
  watch:{
    number: function(newData, oldData){
      console.log(newData);
      console.log(oldData);
    },
    numbers: {
      handler: function(newData, oldData){
        console.log(newData);
        console.log(oldData);
      },
      deep: true,
      immediate:true
    }
  }
})

new Vue({
  el: '#app4',
  data: {
    list: [],
    current: '',
    topics: [
      { value: 'vue', name: 'Vue.js' },
      { value: 'jQuery', name: 'jQuery' }
    ]
  },
  watch: {
    current: function (val) {
      // GitHubのAPIからトピックのリポジトリを検索
      axios.get('https://api.github.com/search/repositories', {
        params: {
          q: 'topic:' + val
        }
      }).then(function (response) {
        this.list = response.data.items
      }.bind(this))
    }
  },
})

new Vue({
  el: '#app5',
  filters: {
    // 小数点以下を第2位に丸めるフィルタ
    round: function (val) {
      return Math.round(val * 100) / 100
    },
    // 度からラジアンに変換するフィルタ
    radian: function (val) {
      return val * Math.PI / 180
    }
  }
})
