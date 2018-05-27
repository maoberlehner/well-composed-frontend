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
        }"
      >
        <text-headline :level="2">Post list</text-headline>
        <list-media :items="posts" data-qa="post list">
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
        }"
      >
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
            data-qa="post id"
            @input="$v.postId.$touch()"
          >
          </form-input>
          <form-message v-if="$v.postId.$error" slot="end" type="error">
            <p v-if="!$v.postId.$required">Field is required.</p>
            <p v-if="!$v.postId.$numeric">Field must be numeric.</p>
          </form-message>
        </form-element>
        <app-button data-qa="load post button" @click.native="fetchPost(postId)">
          Load
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { numeric, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

import post from '../store/modules/post';
import registerStoreModule from '../utils/register-store-module';

import AppButton from '../components/app/AppButton.vue';
import BlockMediaPost from '../components/block/BlockMediaPost.vue';
import FormElement from '../components/form/FormElement.vue';
import FormInput from '../components/form/FormInput.vue';
import FormLabel from '../components/form/FormLabel.vue';
import FormMessage from '../components/form/FormMessage.vue';
import ListMedia from '../components/list/ListMedia.vue';
import TextHeadline from '../components/text/TextHeadline.vue';

const { mapState, mapActions } = createNamespacedHelpers(`post`);

export default {
  components: {
    AppButton,
    BlockMediaPost,
    FormElement,
    FormInput,
    FormLabel,
    FormMessage,
    ListMedia,
    TextHeadline,
  },
  mixins: [validationMixin],
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
  beforeCreate() {
    registerStoreModule({ module: post, moduleName: `post`, store: this.$store });
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
    registerStoreModule({ module: post, moduleName: `post`, store });

    return Promise.all([
      store.dispatch(`post/fetchPosts`),
      store.dispatch(`post/fetchPost`, 1),
    ]);
  },
};
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
