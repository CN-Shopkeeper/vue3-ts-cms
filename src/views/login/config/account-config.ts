// 编写好规则
// 传递给el-form的rules属性，并在el-form-item中设置prop指定使用哪个规则
// el-form中指定model以获取最新的输入值
export const rules = {
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
