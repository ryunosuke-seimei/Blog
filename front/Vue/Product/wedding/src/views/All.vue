<template>
  <div id="all">
    <Header />
    <section class="bord">
      <div class="left">
        <li v-for="item in items" v-bind:key="item" v-on:click="clickEvent(item)">
          <img v-bind:src="item" alt="">
        </li>
      </div>
      <div class="right">
        <div class="box">
          <img v-bind:src="link" alt="左の画像をクリックしてください">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import axios from 'axios'

export default {
  name: 'All',
  components: {
    Header,
  },
  data(){
    return{
      message: "message",
      items: [],
      link:"links"
    }
  },
  methods:{
    clickEvent: function(item){
      console.log(item);
      let big_path = item.replace("small_", "");
      this.link = big_path
    }
  },
  created(){
    axios.get("https://www.reina-ryu-f.xyz/Wedding/PHP/all.php")
      .then(function(response){
        response.data.forEach(link=>{
          this.items.push("https://www.reina-ryu-f.xyz/Wedding"+link.slice(2));
        })
      }.bind(this)).catch(function(e){
        console.log(e);
      });
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#all{
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
#all .bord{
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 60px);
}
#all .left, #all .right{
  display: inline-flex;
  width: 50%;
  height: 100%;
  overflow: scroll;
  flex-wrap: wrap;
}
#all .left li{
  display: inline-block;
  width: 120px;
  height: 160px;
  margin: 10px;
}
#all .left li img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}
#all .right .box {
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 100%;
}
#all .right .box img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}



</style>
