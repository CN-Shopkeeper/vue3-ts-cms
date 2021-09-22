type IFormType = "input" | "select" | "password" | "datepicker";

interface ISelectItemType {
  title: string;
  value: string | number;
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
  // 用于控制是否显示
  isHidden?: boolean;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemStyle?: any;
}
