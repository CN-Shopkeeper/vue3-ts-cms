<template>
  <div class="dashboard"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useStore } from "@/store";
import * as echarts from "echarts";

export default defineComponent({
  name: "dashboard",
  setup() {
    const store = useStore();
    store.dispatch("dashboard/getDashboardDataAction");
    return {};
  }
});
</script>

<style scoped></style>
