<template>
  <div>
    <Question
      v-bind:questions="questions"
      :onDeleteQuestion="removeQuestion"
      :onSelect="selectQuestion"
    />
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
          id: uuid(),
          type: ""
        }
      ]
    };
  },
  methods: {
    addQuestion() {
      this.questions.push({
        id: uuid(),
        type: ""
      });
    },
    removeQuestion(id) {
      const questionIndex = this.questions.findIndex(
        question => question.id === id
      );
      this.questions.splice(questionIndex, 1);
    },
    selectQuestion(e, id) {
      console.log(this.questions);
      console.log(e.target.value, id);
    }
  }
};
</script>


<style scoped>
.dashed {
  border: 2px dashed rgb(64, 76, 144);
}

.font-11 {
  font-size: 11px;
}
</style>