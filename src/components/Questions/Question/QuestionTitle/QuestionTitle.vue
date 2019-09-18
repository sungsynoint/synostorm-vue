<template>
  <div class="mx-2">
    <p class="text-dark mt-0 mb-0 font-13">Q{{index + 1}}</p>
    <span class="card-subtitle text-muted font-11">{{question.id.toString().substring(0,5)}}</span>
  </div>
</template>


<script>
export default {
  name: "QuestionTitle",
  props: ["question", "index"]
};
</script>

<style scoped>
.font-11 {
  font-size: 11px;
}
</style>