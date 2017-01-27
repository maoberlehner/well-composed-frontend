<script>
  import Headline from '../components/Headline.vue';

  export default {
    components: {
      Headline,
    },
  };
</script>

<template>
  <div class="c-about">
    <headline :level="1">About</headline>
    <p>Hello world.</p>
  </div>
</template>
