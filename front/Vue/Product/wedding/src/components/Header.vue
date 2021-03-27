<template>
  <div id="header">
    <div class="title">
      <router-link to="/">Demo Sample</router-link>
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
  name: 'Header',

}
</script>

<style>
#header{
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;

  box-sizing: content-box;
  border-bottom: 2.5px solid black;

}
.title{
  display: inline-flex;
  width: 120px;
  height: 100%;
  align-items:center;
  justify-content: center;

}
.sub-links{
  display: inline-flex;
  width: 240px;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}
.sub-links li{
  display: inline-flex;
  width: 100px;
  height: 100%;;
  justify-content: center;
  align-items: center;

}
a{
  color: black;
  border: none;
  text-decoration: none;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
