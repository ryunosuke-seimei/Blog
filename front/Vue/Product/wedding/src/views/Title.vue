<template>
  <div id="title">
    <div class="img">
      <img src="../assets/back.jpg" alt="">
    </div>
    <div class="title">
      {{title}}
    </div>
    <div class="sub-links">
      <li>
        <router-link to="/item">Item</router-link>
      </li>
      <li>
        <router-link to="/all">All</router-link>
      </li>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  computed:{
      title(){
          return this.$store.state.title
      }
  }
}
</script>

<style>
#title{
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(244, 174, 228, 0.2);

}
#title .img{
  display: inline-block;
  position: absolute;
  top: 10%;
  bottom: 10%;
  left: 0;
  z-index: -9;

  width: 100%;
  height: 80%;
}
#title .img img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}

#title .title{
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 50%;
  align-items: flex-end;
  justify-content: center;

  font-size: 100px;
}


#title .sub-links{
  display: inline-flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-around;
}
#title .sub-links li{
  display: inline-flex;
  width: 200px;
  height: 80px;
  justify-content: center;
  align-items: center;

  font-size: 50px;

}

#title .sub-links li a{
  color: #2c3e50;
  border: none;
  text-decoration: none;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 80px;
}

</style>
