<template>
  <div class="mt-4">
    <Page v-bind:pages="pages" />
  </div>
</template>


<script>
import Page from "./Page/Page.vue";
import uuid from "uuid/v4";
export default {
  components: {
    Page
  },
  data() {
    return {
      pages: [
        {
          id: uuid()
        }
      ]
    };
  }
};
</script>