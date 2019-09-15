<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
    
    <TabBar v-if="$route.meta.tabBar"/>
    
  </div>
</template>

<script>
import TabBar from "common/tabBar";

export default {
  name: "App",
  components: {
    TabBar,
  }

};
</script>


<style lang="scss">
</style>
