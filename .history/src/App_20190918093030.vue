<template>
  <div>
    <div class="content-page">
      <LeftMenu />
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
import "./theme/css/app.css";
import LeftMenu from "./components/common/LeftMenu";

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


