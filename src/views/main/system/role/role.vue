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
      pageName="role"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContent from "@/components/page-content";
import PageSearch from "@/components/page-search";
import PageModal from "@/components/page-modal";
import { contentTableConfig } from "./config/content.config";
import { searchFormConfig } from "./config/search.config";
import { modalConfig } from "./config/modal.config";

import { useModal } from "@/hooks/usePageModal";

export default defineComponent({
  name: "role",
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const [pageModalRef, handleEditData, handleNewData, defaultDialogInfo] =
      useModal();
    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      handleEditData,
      handleNewData,
      defaultDialogInfo
    };
  }
});
</script>

<style scoped></style>
