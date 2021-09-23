<template>
  <div class="page-modal">
    <el-dialog
      title="新建用户"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <sk-form v-bind="modalConfig" v-model="formData"></sk-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancelClick">取 消</el-button>
          <el-button type="primary" @click="handleComfirmClick"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import SkForm from "@/base-ui/form";
import { useStore } from "@/store";

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultDialogInfo: {
      type: Object,
      default: () => ({ id: "" })
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      typeof: String,
      required: true
    }
  },
  components: {
    SkForm
  },
  setup(props) {
    const dialogVisible = ref(false);
    const formData = ref<any>({});

    watch(
      () => props.defaultDialogInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = (newValue as any)[`${item.field}`];
        }
      }
    );

    // 点击确定按钮
    const store = useStore();
    const handleComfirmClick = () => {
      dialogVisible.value = false;
      if (Object.keys(props.defaultDialogInfo).length) {
        // 编辑
        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultDialogInfo.id
        });
      } else {
        // 新建
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo },
          id: formData.value.id
        });
      }
    };
    const handleCancelClick = () => {
      dialogVisible.value = false;
    };
    return {
      dialogVisible,
      formData,
      handleComfirmClick,
      handleCancelClick
    };
  }
});
</script>

<style scoped></style>
