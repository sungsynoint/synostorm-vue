<template>
  <div>
    <LeftMenu />
    <div class="content-page">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
import "./theme/css/app.css";
import LeftMenu from "./components/common/LeftMenu.vue";

export default {
  name: "app",
  components: {},
  data() {
    return {
      title: "Testing data function"
    };
  }
};
</script>


