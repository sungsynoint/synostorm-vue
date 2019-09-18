<template>
  <div>
    <QuestionHeader />
    <Question />
  </div>
</template>

<script>
import Question from "./Question/Question";
import QuestionHeader from "./QuestionPageHeader/QuestionPageHeader";

export default {
  name: "Questions",
  components: {
    Question,
    QuestionHeader
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