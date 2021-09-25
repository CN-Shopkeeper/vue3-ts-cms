<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :modalConfig="modalConfig"
      :defaultDialogInfo="defaultDialogInfo"
      :otherInfo="otherInfo"
      pageName="role"
      ref="pageModalRef"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          :props="{ children: 'children', label: 'name' }"
          show-checkbox
          node-key="id"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from "vue";
import { menuMapLeafKeys } from "@/utils/map-menus";
import { useStore } from "@/store";
import PageContent from "@/components/page-content";
import PageSearch from "@/components/page-search";
import PageModal from "@/components/page-modal";
import { contentTableConfig } from "./config/content.config";
import { searchFormConfig } from "./config/search.config";
import { modalConfig } from "./config/modal.config";

import { useModal } from "@/hooks/use-page-modal";
import { ElTree } from "element-plus";

export default defineComponent({
  name: "role",
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    // 1.处理pageModal的hook
    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList);
      // 这个回调执行时，elTree还没有绑定
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const [pageModalRef, handleEditData, handleNewData, defaultDialogInfo] =
      useModal(undefined, editCallback);

    const store = useStore();
    const menus = computed(() => store.state.entireMenu);

    const otherInfo = ref({});
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
    };

    return {
      elTreeRef,
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      handleEditData,
      handleNewData,
      defaultDialogInfo,
      menus,
      otherInfo,
      handleCheckChange
    };
  }
});
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 20px;
}
</style>
