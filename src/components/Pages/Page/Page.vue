 <template>
  <div>
    <div v-for="(page, index) in pages" v-bind:key="page.id">
      <div class="card mb-3">
        <i class="mdi mdi-drag-horizontal text-center" id="drag"></i>
        <PageHeader v-bind:page="page" v-bind:index="index" />
        <Questions />
      </div>
    </div>
  </div>
</template>

<script>
import Questions from "../../Questions/Questions.vue";
import PageHeader from "./PageHeader/PageHeader.vue";

export default {
  name: "Page",
  components: {
    Questions,
    PageHeader
  },
  props: ["pages"]
};
</script>

<style scoped>
#drag {
  cursor: pointer;
}
</style>

