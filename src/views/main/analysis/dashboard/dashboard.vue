<template>
  <div class="dashboard">
    <el-row gutter="10">
      <el-col :span="7">
        <sk-card title="分类商品数量(饼图)"></sk-card>
      </el-col>
      <el-col :span="10">
        <sk-card title="不同城市商品销量"></sk-card>
      </el-col>
      <el-col :span="7">
        <sk-card title="分类商品数量(玫瑰图)"></sk-card>
      </el-col>
    </el-row>
    <el-row gutter="10" class="content-row">
      <el-col :span="12">
        <sk-card title="分类商品的销量"></sk-card>
      </el-col>
      <el-col :span="12">
        <sk-card title="分类商品的收藏"></sk-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useStore } from "@/store";

import SkCard from "@/base-ui/card";

export default defineComponent({
  name: "dashboard",
  components: {
    SkCard
  },
  setup() {
    const store = useStore();
    store.dispatch("dashboard/getDashboardDataAction");
    return {};
  }
});
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
