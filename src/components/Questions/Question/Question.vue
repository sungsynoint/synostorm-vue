<template>
  <div>
    <div v-for="(question,index) in questions" v-bind:key="question.id">
      <div class="row card-body">
        <div class="col-1 px-1">
          <QuestionTitle v-bind:question="question" v-bind:index="index" />
        </div>
        <div class="col-10">
          <QuestionInput v-bind:onSelect="onSelect" v-bind:question="question.id" />
        </div>
        <div class="col-1 table m-0 px-1">
          <QuestionActions v-bind:onDeleteQuestion="onDeleteQuestion" v-bind:question="question" />
        </div>
      </div>
      <QuestionsType v-bind:type="type" />
    </div>
  </div>
</template>

<script>
import QuestionTitle from "./QuestionTitle/QuestionTitle.vue";
import QuestionInput from "./QuestionInputs/QuestionInput.vue";
import QuestionActions from "./QuestionInputs/QuestionActions.vue";
import QuestionsType from "../QuestionsType/QuestionsType.vue";

export default {
  name: "Question",
  components: {
    QuestionTitle,
    QuestionInput,
    QuestionActions,
    QuestionsType
  },
  props: {
    questions: Array,
    onDeleteQuestion: Function,
    onSelect: Function
  },
  data() {
    return {
      type: ""
    };
  }
};
</script>


