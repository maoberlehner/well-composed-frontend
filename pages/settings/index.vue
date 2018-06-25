<template>
  <div class="o-vertical-spacing o-vertical-spacing--l" data-qa="main content">
    <text-headline :level="1">Settings</text-headline>
    <div>
      <label>
        Theme:
        <select v-model="theme">
          <option value="default">Default</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

import TextHeadline from '../../components/text/TextHeadline.vue';

export default {
  components: {
    TextHeadline,
  },
  computed: {
    ...mapFields([`theme`]),
  },
};
</script>

<style lang="scss" scoped>
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--l
} from ~@avalanche/object-vertical-spacing';
</style>
