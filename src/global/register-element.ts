import { App } from "vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import ElementPlus from "element-plus";

export function registerElement(app: App): void {
  app.use(ElementPlus, {
    locale: zhCn
  });
}
