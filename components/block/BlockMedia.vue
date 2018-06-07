<template>
  <div :class="$options.name">
    <div v-if="$slots.figure" :class="`${$options.name}__figure`">
      <slot name="figure"></slot>
    </div>
    <div :class="`${$options.name}__body`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: `BlockMedia`,
};
</script>
