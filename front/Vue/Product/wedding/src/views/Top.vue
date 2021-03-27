<template>
  <div id="top">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    msg: String
  }
}
</script>

<style>
#top{
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>
