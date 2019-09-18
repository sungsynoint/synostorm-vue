<template>
  <div class="row">
    <div class="col-7">
      <div class="page_title">
        <input type="text" class="form-control dashed" placeholder="Question Title" />
      </div>
    </div>
    <div class="col-5">
      <select class="form-control dashed">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  </div>
</template>


<script>
export default {
  name: "QuestionInput"
};
</script>


<style scoped>
.dashed {
  border: 2px dashed rgb(238, 239, 245);
}
</style>