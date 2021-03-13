new Vue({
  el:"#header",
  data:{
    title: "title",
    links:[
      {title: "links1"},
      {title: "links2"}
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
    }
  },
})
