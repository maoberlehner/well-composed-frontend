<template>
  <div class="c-block-media">
    <div class="c-block-media__figure" v-if="$slots.figure">
      <slot name="figure"></slot>
    </div>
    <div class="c-block-media__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: `BlockMedia`,
};
</script>
