<template>
  <div class="user">
    <sk-form v-bind="searchFormConfig" v-model="formData"></sk-form>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SkForm from "@/base-ui/form";
import { searchFormConfig } from "./config/search.config";

export default defineComponent({
  name: "user",
  components: {
    SkForm
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      password: "",
      sport: "",
      createTime: ""
    });
    return {
      searchFormConfig,
      formData
    };
  }
});
</script>

<style scoped></style>
