<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  font-family: "微软雅黑";
  box-sizing: border-box;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
