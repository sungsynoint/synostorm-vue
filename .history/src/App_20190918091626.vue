<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import "./theme/css/app.css";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>


