new Vue({
  el:"#main",
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
  },
  created: function(){
    this.data_list = this.ApiGetAll();
  },
  methods:{
    clickItem: function(id){
      this.ApiGetOne(id);
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
        "id": this.id,
        "title": this.title,
        "data": this.form_list
      }
      console.log(send_data);
      this.ApiUpdate(JSON.stringify(send_data));
    },
    sendDelete: function(){
      let send_data = {
        "id": String(this.id),
      }
      console.log(send_data);
      this.ApiDelete(JSON.stringify(send_data));
    },
    ApiGetAll: function(){
      let temp_data = [];
      axios.get("http://127.0.0.1:5000/rin_jin/item-api",{
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
      axios.get("http://127.0.0.1:5000/rin_jin/item-api",{
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
      axios.put(this.link, {data}).then(function(response){
        // location.reload();
      }.bind(this)).catch(function(e){
        console.log(e);
      });
    },
    ApiDelete: function(data){
      axios.delete(this.link, {data}).then(function(response){
        console.log(response);
      }.bind(this)).catch(function(e){
        console.log(e);
      });
    }
  }

});
