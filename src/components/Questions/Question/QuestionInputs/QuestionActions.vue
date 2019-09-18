<template>
  <div class="table-action py-0 border-0 p-0">
    <span class="action-icon btn font-15">
      <i class="mdi mdi-file-multiple"></i>
    </span>
    <span class="action-icon btn" @click="onDeleteQuestion(question.id)">
      <i class="mdi mdi-delete"></i>
    </span>
  </div>
</template>


<script>
export default {
  name: "QuestionAction",
  props: {
    onDeleteQuestion: Function,
    question: Object
  }
};
</script>