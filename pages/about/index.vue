<template>
  <div class="o-vertical-spacing o-vertical-spacing--l">
    <wcf-headline :level="1">About</wcf-headline>
    <p>Lorem Ipsum dolor sit amet.</p>
  </div>
</template>

<script>
import WcfHeadline from '../../components/Headline.vue';

export default {
  components: {
    WcfHeadline,
  },
};
</script>

<style lang="scss" scoped>
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--l
} from ~@avalanche/object-vertical-spacing';
</style>
