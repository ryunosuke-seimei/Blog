const vm1 = new Vue({
  el:"#app1",
  data:{
    message:"Hello Vue.js"
  }
});

const vm2 = new Vue({
  el:"#app2",
  data:{
    list:["A", "B", "C"]
  }
});

const vm3 = new Vue({
  el:"#app3",
  data:{
    message:"初期メッセージ"
  }
});

const vm4 = new Vue({
  el:"#app4",
  methods:{
    handleClick: function(event){
      alert(event.target);
    }
  }
});

const vm5 = new Vue({
  el:"#app5",
  data:{
    show:true
  }
});
