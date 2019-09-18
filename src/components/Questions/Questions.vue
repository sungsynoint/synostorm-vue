<template>
  <div>
    <QuestionHeader />
    <Question />
    <AddQuestion />
  </div>
</template>

<script>
import Question from "./Question/Question";
import QuestionHeader from "./QuestionPageHeader/QuestionPageHeader";
import AddQuestion from "./Question/AddQuestion/AddQuestion";

export default {
  name: "Questions",
  components: {
    Question,
    QuestionHeader,
    AddQuestion
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