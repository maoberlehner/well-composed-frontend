<template>
  <label :class="$options.name">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: `FormLabel`,
};
</script>
