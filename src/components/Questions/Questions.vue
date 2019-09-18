<template>
  <div>
    <Question v-bind:questions="questions" :onDeleteQuestion="removeQuestion" />
    <AddQuestion :onClick="addQuestion" />
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
          id: uuid()
        }
      ]
    };
  },
  methods: {
    addQuestion() {
      this.questions.push({
        id: uuid()
      });
    },
    removeQuestion(id) {
      const questionIndex = this.questions.findIndex(
        question => question.id === id
      );
      this.questions.splice(questionIndex, 1);
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