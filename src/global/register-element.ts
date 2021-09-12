import { App } from "vue";
import {
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElInput,
  ElRadio,
  ElFormItem,
  ElOption,
  ElSelect
} from "element-plus";
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElOption,
  ElAside,
  ElAlert,
  ElSelect
];

export function registerElement(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
