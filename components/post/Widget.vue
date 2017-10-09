<template>
  <div class="c-post-widget">
    <app-headline class="c-post-widget__headline" :level="2" :size="3">
      {{ post.title }}
    </app-headline>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import AppHeadline from '../app/Headline.vue';

export default {
  name: `PostWidget`,
  props: {
    post: {
      type: Object,
    },
  },
  components: {
    AppHeadline,
  },
};
</script>
