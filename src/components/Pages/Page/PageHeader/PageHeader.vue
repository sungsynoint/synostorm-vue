<template>
  <div>
    <div v-for="(page) in page" v-bind:key="page.id"></div>
    <div class="card-body pb-0 pt-0">
      <div class="card-widgets">
        <a data-toggle="collapse" href="#" role="button" aria-expanded="false" aria-controls="#">
          <i class="mdi mdi-minus p-0 mx-2"></i>
        </a>
        <span onClick="{onClonePage}">
          <i class="mdi mdi-content-copy btn p-0 mx-1"></i>
        </span>
        <span>
          <i class="mdi mdi-close btn p-0 mx-2"></i>
        </span>
      </div>

      <div class="card-title">
        <h5 class="text-dark mt-0 mb-0">Page {{index + 1}}</h5>
        <span class="text-muted font-11">{{page.id.toString().substring(0,5)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["page", "index"]
};
</script>


<style scoped>
.font-11 {
  font-size: 11px;
}
</style>


