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
        <sk-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </sk-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <sk-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </sk-card>
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
import { PieEchart, RoseEchart, LineEchart } from "@/components/page-echarts";

export default defineComponent({
  name: "dashboard",
  components: {
    SkCard,
    PieEchart,
    RoseEchart,
    LineEchart
  },
  setup() {
    const store = useStore();

    // 请求数据
    store.dispatch("dashboard/getDashboardDataAction");

    // 获取数据
    const categoryGoodsCount = computed(() => {
      // 将属性映射
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount };
      });
    });
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];

      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale;
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name);
        values.push(item.goodsCount);
      }

      return { xLabels, values };
    });

    return {
      categoryGoodsCount,
      categoryGoodsSale
    };
  }
});
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
