<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar size="small" :src="circleUrl"></el-avatar>
        <span>{{ username }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item divided icon="el-icon-user"
            >用户信息</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-info">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
import localCache from "@/utils/cache";

export default defineComponent({
  setup() {
    const store = useStore();
    const username = computed(() => store.state.login.userInfo?.name);
    const circleUrl =
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";

    const router = useRouter();
    const handleExitClick = () => {
      localCache.deleteCache("token");
      router.push("/main");
    };
    return {
      username,
      circleUrl,
      handleExitClick
    };
  }
});
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
