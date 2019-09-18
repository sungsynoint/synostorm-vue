<template>
  <div>
    <leftMenu />
    <div class="content-page">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
import "./theme/css/app.css";
import leftMenu from "./components/common/LeftMenu";

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


