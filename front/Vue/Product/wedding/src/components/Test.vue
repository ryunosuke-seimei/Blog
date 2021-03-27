<template>
  <div id="test">
    {{message}}
    <div v-on:click="clickEvent">
      ddd
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'test',
  data(){
    return{
      message: "message"
    }
  },
  methods:{
    clickEvent: function(){
      console.log("data")
    }
  },
  created(){
    axios.get("https://www.reina-ryu-f.xyz/Wedding/PHP/all.php")
      .then(function(response){
        console.log(response.data);
      }.bind(this)).catch(function(e){
        console.log(e);
      });
  }
}


</script>
