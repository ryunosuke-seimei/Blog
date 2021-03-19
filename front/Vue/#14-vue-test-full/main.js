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

new Vue({
  el:"#left",
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
      // this.SendApi(data);

    },
    SendApi: function(data){
      console.log(data);
      axios.post(this.link, {data:data}).then(function(response){

        console.log(response);
        location.reload();

      }.bind(this)).catch(function(e){
        console.log(e);
      });
    }
  }
});

new Vue({
  el:"#right",
  data:{
    id: 0,
    title:"title",
    form_list:[
      {id:0,value:""},
      {id:1,value:""},
      {id:2,value:""},
      {id:3,value:""},
      {id:4,value:""},
      {id:5,value:""},
      {id:6,value:""},
      {id:7,value:""},
      {id:8,value:""},
      {id:9,value:""},
    ],
    edit_value: "編集",
    delete_value: "削除",
    link: "http://127.0.0.1:5000/rin_jin/item-api",
    data_list:[],
    show_flag:false,
  },
  created: function(){
    this.data_list = this.ApiGetAll();
  },
  methods:{
    clickItem: function(id){
      this.ApiGetOne(id);
      this.show_flag = true;
    },
    ConnectEdit: function(temp_data){
      this.id = temp_data[0];
      this.title = temp_data[1];
      for(let i=2;i<temp_data.length;i++){
        this.form_list[i-2].value = temp_data[i];
      }
    },
    sendEdit:function(){
      let send_data = {
        id: this.id,
        title: this.title,
        data: this.form_list
      }
      console.log(send_data);
      this.ApiUpdate(JSON.stringify(send_data));
      // this.ApiUpdate(send_data);
    },
    sendDelete: function(){
      let send_data = {
        id: this.id
      }
      console.log(send_data);
      this.ApiDelete(JSON.stringify(send_data));
      // this.ApiDelete(send_data);
    },
    ApiGetAll: function(){
      let temp_data = [];
      axios.get(this.link,{
        params: {
          flag: 0
        }
      }).then(function(response){
        console.log(response.data);
        response.data.forEach(function(key){
          let data = {id:key[0], value:key[1]};
          temp_data.push(data);
        });
      }.bind(this)).catch(function(e){
        console.log(e);
      });
      return temp_data;

    },
    ApiGetOne: function(id){
      let temp_data;
      axios.get(this.link,{
        params: {
          flag: 1,
          id: id
        }
      }).then(function(response){
        temp_data = response.data;
        this.ConnectEdit(temp_data);
      }.bind(this)).catch(function(e){
        console.log(e);
      });
    },
    ApiUpdate: function(data){
      axios.put(this.link, {data:data}).then(function(response){
        // location.reload();
        this.data_list.find((v) => v.id === this.id).value = this.title;

      }.bind(this)).catch(function(e){
        console.log(e);
      });
    },
    ApiDelete: function(data){
      console.log({data: data});
      axios.delete(this.link, {data:data}).then(function(response){
        location.reload();
      }.bind(this)).catch(function(e){
        console.log(e);
      });
    }
  }

});
