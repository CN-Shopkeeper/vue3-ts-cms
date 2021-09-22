import { ref } from "vue";
import PageModal from "@/components/page-modal";

type CallbackFn = () => void;

export function useModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  // 修改需要显示的值
  const defaultDialogInfo = ref({});
  const handleNewData = () => {
    defaultDialogInfo.value = {};
    newCb && newCb();
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
  };

  const handleEditData = (item: any) => {
    defaultDialogInfo.value = { ...item };
    editCb && editCb();
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
  };

  return [pageModalRef, handleEditData, handleNewData, defaultDialogInfo];
}
