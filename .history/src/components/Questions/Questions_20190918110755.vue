<template>
  <Question />
</template>

<script>
import Question from "./Question/Question";

export default {
  name: "Questions",
  components: {
    Question
  }
};
</script>


<style scoped>
.dashed {
  border: 2px dashed rgb(238, 239, 245);
}

.font-11 {
  font-size: 11px;
}
</style>