const vm = new Vue({
  el:"#app",
  data:{
    list:[]
  },
  created: function(){
    axios.get("https://www.reina-ryu-f.xyz/sword/HIIT/main.php").then(function(response){
      console.log(response.data);
    }.bind(this)).catch(function(e){
      console.log(e);
    });
  }
})
