<template>
  <div class="o-vertical-spacing o-vertical-spacing--l">
    <app-headline :level="1">About</app-headline>
    <p>Lorem Ipsum dolor sit amet.</p>
  </div>
</template>

<script>
import AppHeadline from '../../components/app/AppHeadline.vue';

export default {
  components: {
    AppHeadline,
  },
};
</script>

<style lang="scss" scoped>
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--l
} from ~@avalanche/object-vertical-spacing';
</style>
