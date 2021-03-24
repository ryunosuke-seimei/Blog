new Vue({
  el:"#header",
  data:{
    title: "title",
    links:[
      {id: 0, title: "links1", link:"A_ link"},
      {id: 1, title: "links2", link:"B_ link"}
    ],
    pc_or_mobile_show: true,
    box_open_flag: false,
  },
  mounted:function(){
    window.addEventListener('resize', this.resizeEventCalculate);
    this.resizeEventCalculate();
  },
  destroyed: function () {
    window.removeEventListener('resize', this.resizeEventCalculate);
  },
  methods:{
    resizeEventCalculate: function(){
      let flag = window.innerWidth > 500 ? true : false;
      this.pc_or_mobile_show = flag;
    },
    clickSubBox: function(){
      this.box_open_flag = !this.box_open_flag;
      console.log(this.box_open_flag);
    },
    clickLink: function(index){
      console.log(this.links[index].link);
    }
  },
});
let app = new Vue({
  el:"#roulette",
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

new Vue({
  el: "#timer",
  data:{
    param_min:1,
    param_sec:0,
    min: 1,
    sec: 0,
    timerOn: false,
    timerObj: null,
    timeupflag: false,
  },
  methods: {
    count: function() {
      if (this.sec <= 0 && this.min >= 1) {
        this.min --;
        this.sec = 59;
      } else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } else {
        this.sec --;
      }
    },
    start: function() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      this.timerOn = true;
      this.timeupflag = false;
    },
    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false;
      this.timeupflag = false;
    },
    reset: function(){
      this.stop();
      this.min = this.param_min;
      this.sec = this.param_sec;
    },
    complete: function() {
      clearInterval(this.timerObj);
      this.timeupflag = true;
    }
  },
  computed: {
    formatTime: function() {
      let timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1]
    }
  }
})
