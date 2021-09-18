<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <template v-if="item.path">
          <el-breadcrumb-item :to="{ path: item.path }">
            {{ item.name }}
          </el-breadcrumb-item>
        </template>
        <template v-else>
          <el-breadcrumb-item>
            {{ item.name }}
          </el-breadcrumb-item>
        </template>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IBreadcrumb } from "../types";

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
