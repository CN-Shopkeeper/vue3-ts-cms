<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

// 尝试setup新特性
<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watch } from "vue";
import { EChartsOption } from "echarts";
import useEchart from "../hooks/useEchart";

// 定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    width?: string;
    height?: string;
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);

const echartDivRef = ref<HTMLElement>();

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!);
  watch(
    () => props.options,
    (newValue) => {
      setOptions(newValue);
    }
  );
});
</script>

<style scoped></style>
