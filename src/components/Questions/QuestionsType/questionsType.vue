<template>
  <div class="my-3" v-if="type">
    <TextField />
  </div>
</template>


<script>
import TextField from "./TextField";

export default {
  name: "QuestionsType",
  components: {
    TextField
  },
  props: {
    type: String
  }
};
</script>