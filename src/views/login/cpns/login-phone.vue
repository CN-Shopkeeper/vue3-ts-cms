<template>
  <div>
    <el-form label-width="80px" :rules="rules" :model="phone" ref="formRef">
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
import { useStore } from "vuex";
import { rules } from "../config/phone-config";
export default defineComponent({
  setup() {
    const store = useStore();
    const phone = reactive({
      number: "",
      code: ""
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch("login/phoneLoginAction", { ...phone });
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
