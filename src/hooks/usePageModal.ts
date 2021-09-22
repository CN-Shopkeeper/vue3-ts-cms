import { ref } from "vue";
import PageModal from "@/components/page-modal";
export function useModal() {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  // 修改需要显示的值
  const defaultDialogInfo = ref({});
  const handleNewData = () => {
    defaultDialogInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
  };

  const handleEditData = (item: any) => {
    defaultDialogInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
  };

  return [pageModalRef, handleEditData, handleNewData, defaultDialogInfo];
}
