<template>
  <div id="title">
    <div class="title">
      Demo sample
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
}
</script>

<style>
#title{
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
#title .title{
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


  border: 5px solid rgba(0, 0, 0, 0.4);
  font-size: 50px;
}
a{
  color: black;
  border: none;
  text-decoration: none;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 80px;
}

</style>
