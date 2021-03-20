let app = new Vue({
  el:"#app",
  data:{
    data_list:[
      {title:"人", value:["男", "女", "男の子", "女の子", "男の娘","おじさん", "おばさん", "お爺さん","お婆さん", "馬"]},
      {title:"形容詞", value:["面白い", "不思議な", "頭のおかしい", "マッドサイエンティストな", "ドMな","ドSな", "普通の", "かっこいい","ダンディな", "走力Sな"]}
    ],
    left_id:1,
    right_id:0,
    left_display:"",
    right_display:"",
    roulette_obj:null,
    roulette_flag: false,

    change_flag: false,
    change_target: false,
    change_detail:false,


  },
  computed:{
    left_title:function(){
      return this.data_list[this.left_id].title
    },
    right_title:function(){
      return this.data_list[this.right_id].title
    },
  },
  methods:{
    random:function(){
      let random = Math.floor(Math.random() * 10);
      return random;
    },
    roulette:function(){
      let random;
      random = this.random();
      this.left_display = this.data_list[this.left_id].value[random];
      random = this.random();
      this.right_display = this.data_list[this.right_id].value[random];
    },
    start:function(){
      let self = this;
      this.roulette_obj = setInterval(function() {self.roulette()}, 50)
      this.roulette_flag = true;
    },
    stop:function(){
      clearInterval(this.roulette_obj);
      this.roulette_flag = false;
    },
    change_title:function(){
      this.change_detail = true;
    },
    select_title:function(index){
      if(this.change_target){
        this.left_id = index;
      }else{
        this.right_id = index;
      }
      this.change_detail = false;
    }
  },
  created:function(){
    let self = this;
    axios.get("http://127.0.0.1:5000/rin_jin/item-api",{
      params: {
        flag: 2,
      }
    }).then(function(response){
      response.data.forEach(function(key){
        self.data_list.push({title:key.title, value:key.value});
      });
    }.bind(this)).catch(function(e){
      console.log(e);
    });
  },

});
