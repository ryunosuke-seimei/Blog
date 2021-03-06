const vm = new Vue({
  el:"#app1",
  data:{
    message:"ddddddddddd"
  }
})

const vm1 = new Vue({
  el:"#app2",
  data:{
    count:0
  },
  methods:{
    increment:function(){
      this.count ++;
    }
  }
});

const vm2 = new Vue({
  el:"#app3",
  data:{
    item:{
      id:1,
      src:"image.jpeg",
      alt:"images"
    }
  }
})

const vm3 = new Vue({
  el:"#app4",
  data:{
    ok:false
  }
})

const vm4 = new Vue({
  el:"#app5",
  data:{
    type:"A"
  }
})

const vm5 = new Vue({
  el:"#app6",
  data:{
    name:"キマイラ",
    list:[
      {id:1, name:"スライム", hp:300},
      {id:2, name:"スライム1", hp:200},
      {id:3, name:"スライム3", hp:500},
    ]
  },
  methods:{
    doAdd: function(){
      let max = this.list.reduce(function(a, b){
        return a.id > b.id ? a.id : b.id;
      }, 0)
      this.list.push({
        id: max + 1,
        name: this.name,
        hp:500
      })
    },
    doRemove: function(index){
      this.list.splice(index, 1);
    },
    doAttack: function(index){
      this.list[index].hp -= 10;
    }
  },
  created: function(){
    this.list.forEach(function(item){
      this.$set(item, "active", false)
    }, this);
  }
})
