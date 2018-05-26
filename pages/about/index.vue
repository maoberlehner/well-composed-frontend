<template>
  <div class="o-vertical-spacing o-vertical-spacing--l" data-qa="main content">
    <text-headline :level="1">About</text-headline>
    <p>Lorem Ipsum dolor sit amet.</p>
  </div>
</template>

<script>
import TextHeadline from '../../components/text/TextHeadline.vue';

export default {
  components: {
    TextHeadline,
  },
};
</script>

<style lang="scss" scoped>
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--l
} from ~@avalanche/object-vertical-spacing';
</style>
