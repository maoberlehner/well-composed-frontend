<template>
  <div :class="$options.name">
    <block-media>
      <text-headline :level="2" :size="3">
        {{ title }}
      </text-headline>
      <p>{{ body }}</p>
    </block-media>
  </div>
</template>

<script>
import BlockMedia from './BlockMedia.vue';
import TextHeadline from '../text/TextHeadline.vue';

export default {
  name: `BlockMediaPost`,
  components: {
    BlockMedia,
    TextHeadline,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
};
</script>
