<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :modalConfig="modalConfigCptd"
      ref="pageModalRef"
      :defaultDialogInfo="defaultDialogInfo"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";
import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

import { usePageSearch } from "@/hooks/use-page-search";
import { useModal } from "@/hooks/use-page-modal";

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] =
      usePageSearch();

    // pageModal相关hook逻辑
    // 1.处理密码相关逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === "password";
      });
      if (passwordItem) {
        passwordItem.isHidden = false;
      }
    };
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === "password";
      });
      if (passwordItem) {
        passwordItem.isHidden = true;
      }
    };

    // 2.动态添加部门和角色列表
    const store = useStore();
    // 使用computed，以使得数据加载后再次写入到page-modal中（防止显示page-modal时，网络数据未到达）
    const modalConfigCptd = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "departmentId"
      );
      if (departmentItem) {
        departmentItem.options = store.state.entireDepartment.map((item) => {
          return { title: item.name, value: item.id };
        });
      }
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === "roleId"
      );
      if (roleItem) {
        roleItem.options = store.state.entireRole.map((item) => {
          return { title: item.name, value: item.id };
        });
      }
      return modalConfig;
    });

    // 3.调用hook获取公共变量和函数
    const [pageModalRef, handleEditData, handleNewData, defaultDialogInfo] =
      useModal(newCallback, editCallback);

    return {
      pageContentRef,
      pageModalRef,
      searchFormConfig,
      contentTableConfig,
      modalConfigCptd,
      handleQueryClick,
      handleResetClick,
      handleNewData,
      handleEditData,
      defaultDialogInfo
    };
  }
});
</script>

<style scoped></style>
