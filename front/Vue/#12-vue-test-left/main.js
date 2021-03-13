new Vue({
  el:"#main",
  data:{
    title:"title",
    form_list:[
      {id:0,value:"1"},
      {id:1,value:"2"},
      {id:2,value:"3"},
      {id:3,value:"4"},
      {id:4,value:"5"},
      {id:5,value:"6"},
      {id:6,value:"7"},
      {id:7,value:"8"},
      {id:8,value:"9"},
      {id:9,value:"10"},
    ],
    submit: "送信",
    link: "http://127.0.0.1:5000/rin_jin/item-api",

  },
  methods:{
    valueGather:function(){
      let data = {
        "title": this.title,
        "data": this.form_list
      }
      this.SendApi(JSON.stringify(data));
    },
    SendApi: function(data){
      console.log(data);
      axios.post(this.ink, {data}).then(function(response){

        console.log();

      }.bind(this)).catch(function(e){
        console.log(e);
      });
    }
  }
});
