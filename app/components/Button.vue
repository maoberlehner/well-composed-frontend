<script>
  export default {
    methods: {
      emitClickEvent() {
        this.$emit('buttonClick');
      },
    },
  };
</script>

<template>
  <button class="c-button" @click="emitClickEvent">
    <div class="c-button__icon" v-if="this.$slots['icon']">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </button>
</template>
