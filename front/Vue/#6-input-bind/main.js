new Vue({
  el:"#app",
  data:{
    item:"123"
  },
  methods:{
    handleClick: function(){
      alert("message");
    }
  }
})

new Vue({
  el:"#app1",
  data:{
    message:"message"
  },
  methods:{
    handleInput: function(event){
      this.message = event.target.value + "123";
      // 入力前の処理感　
    }
  }
})

new Vue({
  el:"#app2",
  data:{
    message:"message"
  },
  methods:{
    handleInput: function(){
      console.log(event.target.value);
    }
  }
})

new Vue({
  el:"#app3",
  data:{
    message:"message"
  },
  methods:{

  }
})

new Vue({
  el: '#app4',
  data: {
    scrollY: 0,
    timer: null
  },
  created: function () {
    // ハンドラを登録
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function () {
    // ハンドラを解除（コンポーネントやSPAの場合忘れずに！）
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 違和感のない程度に200ms間隔でscrollデータを更新する例
    handleScroll: function () {
      if (this.timer === null) {
        this.timer = setTimeout(function () {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this), 200)
      }
    }
  }
})
