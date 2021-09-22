<template>
  <div class="page-modal">
    <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center>
      <sk-form v-bind="modalConfig" v-model="formData"></sk-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
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

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultDialogInfo: {
      typeof: Object,
      default: () => ({})
    }
  },
  components: {
    SkForm
  },
  setup(props) {
    const dialogVisible = ref(true);
    const formData = ref<any>({});

    watch(
      () => props.defaultDialogInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = (newValue as any)[`${item.field}`];
        }
      }
    );
    return {
      dialogVisible,
      formData
    };
  }
});
</script>

<style scoped></style>
