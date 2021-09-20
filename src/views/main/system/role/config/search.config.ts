import { IForm } from "@/base-ui/form";
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名称",
      placeholder: "请输入角色名称"
    },
    {
      field: "intro",
      type: "input",
      label: "权限介绍",
      placeholder: "请输入权限介绍"
    },
    {
      field: "createTime",
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ],
  labelWidth: "120px",
  itemStyle: {
    padding: "10px 40px"
  },
  colLayout: {
    // span:8
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }
};
