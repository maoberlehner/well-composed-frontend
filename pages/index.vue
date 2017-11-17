<template>
  <div class="o-vertical-spacing o-vertical-spacing--l">
    <text-headline :level="1">Posts</text-headline>
    <div class="o-grid">
      <div
        :class="{
          'o-grid__item': true,
          'o-vertical-spacing': true,
          'o-vertical-spacing--l': true,
          'u-width-12/12': true,
          'u-width-6/12@m': true,
        }">
        <text-headline :level="2">Post list</text-headline>
        <list-media :items="posts">
          <block-media-post
            slot="item"
            slot-scope="post"
            :title="post.title"
            :body="post.body">
          </block-media-post>
        </list-media>
      </div>
      <div
        :class="{
          'o-grid__item': true,
          'o-vertical-spacing': true,
          'o-vertical-spacing--l': true,
          'u-width-12/12': true,
          'u-width-6/12@m': true,
        }">
        <text-headline :level="2">Current post</text-headline>
        <block-media-post
          :title="currentPost.title"
          :body="currentPost.body">
        </block-media-post>

        <text-headline :level="3">Load new post</text-headline>
        <form-element>
          <form-label slot="start" for="post-id">Post ID</form-label>
          <form-input
            id="post-id"
            v-model="postId"
            @input="$v.postId.$touch()">
          </form-input>
          <form-message slot="end" v-if="$v.postId.$error" type="error">
            <p v-if="!$v.postId.$required">Field is required.</p>
            <p v-if="!$v.postId.$numeric">Field must be numeric.</p>
          </form-message>
        </form-element>
        <app-button @click.native="fetchPost(postId)">Load</app-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-use-before-define */
import { createNamespacedHelpers } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, numeric } from 'vuelidate/lib/validators';

import ListMedia from '../components/organisms/list/ListMedia.vue';
import BlockMediaPost from '../components/molecules/block/BlockMediaPost.vue';
import FormElement from '../components/molecules/form/FormElement.vue';
import AppButton from '../components/atoms/app/AppButton.vue';
import FormInput from '../components/atoms/form/FormInput.vue';
import FormMessage from '../components/atoms/form/FormMessage.vue';
import FormLabel from '../components/atoms/form/FormLabel.vue';
import TextHeadline from '../components/atoms/text/TextHeadline.vue';

const { mapState, mapActions } = createNamespacedHelpers(`post`);

export default {
  mixins: [validationMixin],
  components: {
    ListMedia,
    BlockMediaPost,
    FormElement,
    AppButton,
    FormInput,
    FormMessage,
    FormLabel,
    TextHeadline,
  },
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
  validations: {
    postId: {
      required,
      numeric,
    },
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
