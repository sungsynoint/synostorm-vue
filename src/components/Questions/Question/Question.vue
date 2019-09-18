<template>
  <div>
    <div v-for="(question,index) in questions" v-bind:key="question.id">
      <div class="row card-body">
        <div class="col-1 px-1">
          <QuestionTitle v-bind:question="question" v-bind:index="index" />
        </div>
        <div class="col-10">
          <QuestionInput />
        </div>
        <div class="col-1 table m-0 px-1">
          <QuestionActions v-bind:onDeleteQuestion="onDeleteQuestion" v-bind:question="question" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionTitle from "./QuestionTitle/QuestionTitle.vue";
import QuestionInput from "./QuestionInputs/QuestionInput";
import QuestionActions from "./QuestionInputs/QuestionActions";

export default {
  name: "Question",
  components: {
    QuestionTitle,
    QuestionInput,
    QuestionActions
  },
  props: {
    questions: Array,
    onDeleteQuestion: Function
  }
};
</script>


