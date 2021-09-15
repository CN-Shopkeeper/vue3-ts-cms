import { App } from "vue";
import {
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElCheckbox,
  ElLink
} from "element-plus";
const components = [
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElCheckbox,
  ElLink
];

export function registerElement(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
