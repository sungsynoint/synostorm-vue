 <template>
  <div class="mb-3">
    <div class="card">
      <i class="mdi mdi-drag-horizontal text-center" id="drag"></i>
      <Questions />
    </div>
  </div>
</template>

<script>
import Questions from "../../Questions/Questions.vue";

export default {
  name: "Page",
  components: {
    Questions
  }
};
</script>

<style scoped>
#drag {
  cursor: pointer;
}
</style>

