<template>
  <div class="page-content">
    <sk-table :listData="userList" v-bind="contentTableConfig">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
        <el-button icon="el-icon-refresh"></el-button>
      </template>
      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="text"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="text"
            >删除</el-button
          >
        </div>
      </template>
    </sk-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import SkTable from "@/base-ui/table";
import { useStore } from "@/store";

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    SkTable
  },
  setup() {
    const store = useStore();
    store.dispatch("system/getPageListAction", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    });

    const userList = computed(() => store.state.system.userList);
    const userCount = computed(() => store.state.system.userCount);

    return {
      userList,
      userCount
    };
  }
});
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
