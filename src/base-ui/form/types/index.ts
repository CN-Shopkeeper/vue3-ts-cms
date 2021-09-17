type IFormType = "input" | "select" | "password" | "datepicker";

interface ISelectItemType {
  title: string;
  value: string;
}

export interface IFormItem {
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: string;
  // 针对select的选项
  options?: ISelectItemType[];
  // 针对其它的选项
  otherOptions?: any;
}
