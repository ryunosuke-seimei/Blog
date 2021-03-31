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

  background-color: rgba(244, 174, 228, 0.2);
  color: #2c3e50;
}
#header .title{
  display: inline-flex;
  width: auto;
  height: 100%;
  align-items:center;
  justify-content: center;
  margin-left: 20px;
}
#header .title a{
  font-size: 25px;
}

#header .sub-links{
  display: inline-flex;
  width: 240px;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}
#header .sub-links li{
  display: inline-flex;
  width: 100px;
  height: 100%;;
  justify-content: center;
  align-items: center;

}
#header a{
  font-size: 20px;
  border: none;
  text-decoration: none;
  text-align: center;
}
</style>
