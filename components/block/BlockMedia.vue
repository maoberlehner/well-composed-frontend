<template>
  <div class="c-block-media">
    <div v-if="$slots.figure" class="c-block-media__figure">
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
