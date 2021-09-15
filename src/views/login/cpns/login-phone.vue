<template>
  <div>
    <el-form label-width="60px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="btn-code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from "element-plus";
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/phone-config";
export default defineComponent({
  setup() {
    const phone = reactive({
      number: "",
      code: ""
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log("真正的登录逻辑");
        }
      });
    };
    return {
      phone,
      rules,
      formRef,
      loginAction
    };
  }
});
</script>

<style scoped>
.get-code {
  display: flex;
}
.btn-code {
  margin-left: 8px;
}
</style>
