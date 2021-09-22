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
      :modalConfig="modalConfig"
      ref="pageModalRef"
      :defaultDialogInfo="defaultDialogInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";
import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

import { usePageSearch } from "@/hooks/usePageSearch";
import { useModal } from "@/hooks/usePageModal";

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
    const [pageModalRef, handleEditData, handleNewData, defaultDialogInfo] =
      useModal(newCallback, editCallback);

    return {
      pageContentRef,
      pageModalRef,
      searchFormConfig,
      contentTableConfig,
      modalConfig,
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
