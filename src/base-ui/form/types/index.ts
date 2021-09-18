type IFormType = "input" | "select" | "password" | "datepicker";

interface ISelectItemType {
  title: string;
  value: string;
}

export interface IFormItem {
  field: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: string;
  // 针对select的选项
  options?: ISelectItemType[];
  // 针对其它的选项
  otherOptions?: any;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemStyle?: any;
}
