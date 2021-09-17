<template>
  <div class="user">
    <sk-form v-bind="searchFormConfig"></sk-form>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkForm from "@/base-ui/form";
import { searchFormConfig } from "./config/search.config";

export default defineComponent({
  name: "user",
  components: {
    SkForm
  },
  setup() {
    return {
      searchFormConfig
    };
  }
});
</script>

<style scoped></style>
