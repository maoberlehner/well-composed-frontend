<template>
  <label class="c-form-label" :for="id">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: `AppLabel`,
  props: {
    id: {
      type: String,
    },
  },
};
</script>
