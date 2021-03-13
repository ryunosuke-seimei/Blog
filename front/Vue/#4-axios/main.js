const vm = new Vue({
  el:"#app",
  data:{
    list:[]
  },
  created: function(){
    // axios.get("https://www.reina-ryu-f.xyz/sword/HIIT/main.php").then(function(response){
    //   console.log(response.data);
    // }.bind(this)).catch(function(e){
    //   console.log(e);
    // });

    axios.get("http://127.0.0.1:5000/rin_jin/item-api",{
      params: {
        id: 'xxxx'
      }
    }).then(function(response){
      console.log(response.data);
    }.bind(this)).catch(function(e){
      console.log(e);
    });

    axios.post('http://127.0.0.1:5000/rin_jin/item-api', JSON.stringify("ok"))
      .then(function (response) {
        console.log(response.data);
      })

  }
})
