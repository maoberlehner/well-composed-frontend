<template>
  <div id="app">
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>
    <router-view class="view"></router-view>
  </div>
</template>

<style lang="scss">
  @import '~@avalanche/object-grid';
  body {
    background: red;
  }
</style>
