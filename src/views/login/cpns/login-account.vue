<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: ""
    });

    // 编写好规则
    // 传递给el-form的rules属性，并在el-form-item中设置prop指定使用哪个规则
    // el-form中指定model以获取最新的输入值
    const rules = {
      name: [
        { require: true, message: "用户名是必传内容", trigger: "change" },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: "用户名必须是5~10个字母或数字",
          trigger: "change"
        }
      ],
      password: [
        { require: true, message: "密码是必传内容", trigger: "change" },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: "密码必须是5~10个字母或数字",
          trigger: "change"
        }
      ]
    };
    return {
      account,
      rules
    };
  }
});
</script>

<style scoped></style>
