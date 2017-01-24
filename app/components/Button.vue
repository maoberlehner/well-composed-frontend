<script>
  export default {
    methods: {
      handleClickEvent() {
        this.$emit('cButtonClick');
      },
    },
  };
</script>

<template>
  <button class="c-button" @click="handleClickEvent">
    <div class="c-button__icon c-button__icon--before" v-if="this.$slots['icon-before']">
      <slot name="icon-before"></slot>
    </div>
    <slot></slot>
    <div class="c-button__icon c-button__icon--after" v-if="this.$slots['icon-after']">
      <slot name="icon-after"></slot>
    </div>
  </button>
</template>
