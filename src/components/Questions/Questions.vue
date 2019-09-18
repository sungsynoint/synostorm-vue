<template>
  <div>
    <Question v-bind:questions="questions" />
    <AddQuestion v-bind:onClick="addQuestion" />
  </div>
</template>

<script>
import Question from "./Question/Question";
import AddQuestion from "./Question/AddQuestion/AddQuestion";
import uuid from "uuid/v4";

export default {
  name: "Questions",
  props: ["page"],
  components: {
    Question,
    AddQuestion
  },
  data() {
    return {
      questions: [
        {
          question: "Q",
          id: uuid()
        }
      ]
    };
  },
  methods: {
    addQuestion() {
      this.questions.push({
        question: "Q",
        id: uuid()
      });
    }
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