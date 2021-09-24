<template>
  <div class="line-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from "vue";
import BaseEchart from "@/base-ui/echart";

const props = withDefaults(
  defineProps<{
    title?: string;
    values: any[];
    xLabels: string[];
  }>(),
  {
    title: ""
  }
);

const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.xLabels
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "分类销量",
        stack: "总量",
        data: props.values,
        type: "line",
        areaStyle: {}
      }
    ]
  };
});
</script>

<style scoped></style>
