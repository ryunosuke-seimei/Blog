const vm = new Vue({
  el:"#app",
  mounted: function(){
    console.log(this.$el);
    console.log(this.$refs.hello);
  }
})

const vm1 = new Vue({
  el:"#app1",
  data:{
    message:"Hello Vue.js"
  }
})

const vm2 = new Vue({
  el:"#app2",
  data:{
    message:"<strong>Hello Vue.js</strong>"
  }
})

const vm3 = new Vue({
  el:"#app3",
  data:{
    message:"Hello"
  }
})
