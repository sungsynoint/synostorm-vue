<template>
  <button class="btn-block btn btn-light card-footer text-center" @click="onClick">
    <span class="text-muted">Add question</span>
  </button>
</template>

<script>
export default {
  name: "AddQuestion",
  props: {
    onClick: Function
  }
};
</script>