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
})
