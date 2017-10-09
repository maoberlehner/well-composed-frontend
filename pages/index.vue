<template>
  <div class="o-vertical-spacing o-vertical-spacing--l">
    <app-headline :level="1">Posts</app-headline>
    <div class="o-grid">
      <div
        class="
          o-grid__item
          o-vertical-spacing
          o-vertical-spacing--l
          u-width-12/12
          u-width-6/12@m">
        <app-headline :level="2">Post list</app-headline>
        <post-list :posts="posts"></post-list>
      </div>
      <div
        class="
          o-grid__item
          o-vertical-spacing
          o-vertical-spacing--l
          u-width-12/12
          u-width-6/12@m">
        <app-headline :level="2">Current post</app-headline>
        <post-widget :post="currentPost"></post-widget>

        <app-headline :level="3">Load new post</app-headline>
        <form-input
          id="post-id"
          data-vv-name="Post ID"
          v-model="postId"
          v-validate="'required|numeric'">
          <form-label slot="top" id="post-id">Post ID</form-label>
          <form-message slot="bottom" v-show="errors.has('Post ID')" type="error">
            {{ errors.first('Post ID') }}
          </form-message>
        </form-input>
        <form-button @click="fetchPost(postId)">Load</form-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-use-before-define */
import { createNamespacedHelpers } from 'vuex';

import AppHeadline from '../components/app/Headline.vue';
import PostList from '../components/post/List.vue';
import PostWidget from '../components/post/Widget.vue';
import FormInput from '../components/form/Input.vue';
import FormButton from '../components/form/Button.vue';
import FormMessage from '../components/form/Message.vue';
import FormLabel from '../components/form/Label.vue';

const { mapState, mapActions } = createNamespacedHelpers(`post`);

export default {
  data() {
    return {
      postId: 1,
    };
  },
  computed: {
    ...mapState({
      posts: state => state.posts,
      currentPost: state => state.current,
    }),
  },
  methods: {
    ...mapActions([
      `fetchPost`,
    ]),
  },
  components: {
    AppHeadline,
    PostList,
    PostWidget,
    FormInput,
    FormButton,
    FormMessage,
    FormLabel,
  },
  fetch({ store }) {
    return Promise.all([
      store.dispatch(`post/fetchPosts`),
      store.dispatch(`post/fetchPost`, 1),
    ]);
  },
};
/* eslint-enable */
</script>

<style lang="scss" scoped>
@import '{ .o-grid } from ~@avalanche/object-grid';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--l
} from ~@avalanche/object-vertical-spacing';
@import '{
  .u-width-12/12,
  .u-width-6/12@m
} from ~@avalanche/utility-width';
</style>
