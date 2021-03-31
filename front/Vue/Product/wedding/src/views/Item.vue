<template>
  <div id="item">
    <Header />
    <section class="bord">
      <div class="sub controller">
        <li v-for="BordNumber in BordList" v-bind:key="BordNumber" v-on:click="JumpContent(BordNumber)" v-bind:class="{ SubActive: BordNumber == number}">{{BordNumber}}</li>
      </div>
      <div class="main">
        <li v-for="item in items" v-bind:key="item">
          <img v-bind:src="item" alt="">
        </li>
      </div>
      <div class="controller">
        <button type="button" name="button" v-on:click="BackContent" v-if="BackFlag">BACK</button>
        <button type="button" name="button" v-on:click="NextContent" v-if="NextFlag">NEXT</button>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

import axios from 'axios'

export default {
  name: 'Item',
  components: {
    Header,
  },
  data(){
    return{
      items: [],
      number:0,
      Max_count:0,
      path:"https://www.reina-ryu-f.xyz/Wedding/"
     }
  },
  created(){
    this.MaxCount();
    this.ChangeContent();
  },
  computed: {
    NextFlag: function () {
      return this.Max_count <= this.number ? false:true
    },
    BackFlag: function(){
      return this.number == 0 ? false:true
    },
    BordList: function(){
      let result = [];
      for(let i=0;i<=this.Max_count;i++){
        result.push(i);
      }
      return result;
    }
  },
  methods:{
    MaxCount: function(){
      axios.get(this.path + "PHP/count.php",{
      }).then(function(response){
        this.Max_count = parseInt(response.data/12);

      }.bind(this)).catch(function(e){
        console.log(e);
      });
    },
    ChangeContent: function(){
      axios.post(this.path + "PHP/search_new.php",{
        number: this.number
      }).then(function(response){
        this.items = [];
        response.data.forEach(link=>{
          this.items.push(this.path+link.slice(3));
        })
      }.bind(this)).catch(function(e){
          console.log(e);
      });
    },
    NextContent: function(){
      this.number++;
      console.log(this.number);
      this.ChangeContent();
    },
    BackContent: function(){
      this.number--;
      this.ChangeContent();
    },
    JumpContent: function(number){
      this.number = number;
      this.ChangeContent();
    },
  }
}
</script>

<style>
#item{
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(244, 174, 228, 0.4);

}
#item  .bord{
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 60px);
}
#item .controller{
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
}
#item .sub li{
  display: inline-flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid rgba(244, 174, 228, 0.2);
  background-color: white;
  transition: .5s;
}
#item .sub li:hover{
  background-color: rgba(244, 174, 228, 0.2);
  border: 1px solid rgba(244, 174, 228, 0.2);
  width: 45px;
  height: 45px;
}
#item .sub .SubActive{
  background-color: rgba(244, 174, 228, 0.2);
  border: 5px solid rgba(244, 174, 228, 0.2);
  width: 45px;
  height: 45px;
}

#item .main{
  border-top: 2.5px solid rgba(244, 174, 228, 0.2);
  border-bottom: 2.5px solid rgba(244, 174, 228, 0.2);

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;

  width: 100%;
  height: calc(100% - 160px);

  overflow: scroll;


}
#item .main li{
  display: inline-block;
  box-sizing: border-box;
  padding: 0 20px;
  flex: 0 0 auto;
  height: 90%;
  width: calc(calc(100vh - 160px) / 2);
}
#item .main li img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}
#item .controller button{
  display: inline-flex;
  width: 200px;
  height: 60px;
  justify-content: center;
  align-items: center;

  border: 4px solid rgba(244, 174, 228, 0.2);
  background-color: inherit;

  font-size: 25px;
  
  color: #2c3e50;
}

</style>
