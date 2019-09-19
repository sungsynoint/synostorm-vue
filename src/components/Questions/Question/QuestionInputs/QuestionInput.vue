<template>
  <div class="row">
    <div class="col-7">
      <div class="page_title">
        <input type="text" class="form-control dashed" placeholder="Question Title" />
      </div>
    </div>
    <div class="col-5">
      <select class="form-control dashed" @change="(e) => onSelect(e, question)">
        <option>Question Type:</option>
        <optgroup label="Text">
          <option value="Free input">Free input</option>
        </optgroup>
        <optgroup label="Single Choice">
          <option value="Dropdown">Dropdown</option>
          <option value="Radio">Radio</option>
          <option value="Satisfaction">Satisfaction</option>
        </optgroup>
        <optgroup label="Multiple Choice">
          <option value="Matrix Custom">Matrix Custom</option>
        </optgroup>
        <optgroup label="Single Choice Matrix">
          <option value="Matrix">Matrix</option>
        </optgroup>
        <optgroup label="Multiple Choice Matrix">
          <option value="Dropdown">Dropdown</option>
          <option value="Matrix">Matrix</option>
        </optgroup>
      </select>
    </div>
  </div>
</template>


<script>
export default {
  name: "QuestionInput",
  props: {
    onSelect: Function,
    question: String
  }
};
</script>


<style scoped>
.dashed {
  border: 2px dashed rgb(238, 239, 245);
}
</style>