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
        <form-element>
          <app-label slot="label" for="post-id">Post ID</app-label>
          <app-input
            id="post-id"
            v-model="postId"
            @input="$v.postId.$touch()">
          </app-input>
          <app-message slot="message" v-if="$v.postId.$error" type="error">
            <p v-if="!$v.postId.$required">Field is required.</p>
            <p v-if="!$v.postId.$numeric">Field must be numeric.</p>
          </app-message>
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

import AppHeadline from '../components/app/AppHeadline.vue';
import AppInput from '../components/app/AppInput.vue';
import AppButton from '../components/app/AppButton.vue';
import AppMessage from '../components/app/AppMessage.vue';
import AppLabel from '../components/app/AppLabel.vue';
import FormElement from '../components/molecules/form/FormElement.vue';
import PostList from '../components/post/PostList.vue';
import PostWidget from '../components/post/PostWidget.vue';

const { mapState, mapActions } = createNamespacedHelpers(`post`);

export default {
  mixins: [validationMixin],
  components: {
    AppHeadline,
    AppInput,
    AppButton,
    AppMessage,
    AppLabel,
    FormElement,
    PostList,
    PostWidget,
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
