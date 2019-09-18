<template>
  <div>
    <LeftMenu />
    <div class="content-page">
      <Pages />
    </div>
  </div>
</template>

<script>
import "./theme/css/app.css";
import "./theme/css/icons.css";

import LeftMenu from "./components/common/LeftMenu.vue";
import Pages from "./components/Pages/Pages.vue";

export default {
  name: "app",
  components: {
    LeftMenu,
    Pages
  }
};
</script>


