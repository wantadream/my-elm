<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 25.875px !important;
}
</style>

<template>
  <div id="app">
    <keep-alive exclude="shop">
      <router-view />
    </keep-alive>
  </div>
</template>


