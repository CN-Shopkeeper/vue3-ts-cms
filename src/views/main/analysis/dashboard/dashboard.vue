<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <sk-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </sk-card>
      </el-col>
      <el-col :span="10">
        <sk-card title="不同城市商品销量"></sk-card>
      </el-col>
      <el-col :span="7">
        <sk-card title="分类商品数量(玫瑰图)"></sk-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <sk-card title="分类商品的销量"> </sk-card>
      </el-col>
      <el-col :span="12">
        <sk-card title="分类商品的收藏"></sk-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

import SkCard from "@/base-ui/card";
import { PieEchart } from "@/components/page-echarts";

export default defineComponent({
  name: "dashboard",
  components: {
    SkCard,
    PieEchart
  },
  setup() {
    const store = useStore();
    store.dispatch("dashboard/getDashboardDataAction");

    const categoryGoodsCount = computed(() => {
      // 将属性映射
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount };
      });
    });

    const options = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)"
          }
        }
      ]
    };
    return {
      categoryGoodsCount
    };
  }
});
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
