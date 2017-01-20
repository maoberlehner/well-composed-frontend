<style lang="scss">
  @import '{ .o-grid } from ~@avalanche/object-grid';

  .u-width-4\/12 {
    width: 33.3333333% !important;
  }

  .u-width-8\/12 {
    width: 66.6666666% !important;
  }
</style>

<template>
  <div id="app" class="c-app">
    <div class="o-grid">
      <nav class="o-grid__item u-width-4/12">
        <ul>
            <li><router-link to="/foo">Foo</router-link></li>
            <li><router-link to="/bar">Bar</router-link></li>
        </ul>
      </nav>
      <main class="o-grid__item u-width-8/12">
        <router-view class="view"></router-view>
      </main>
    </div>
  </div>
</template>
