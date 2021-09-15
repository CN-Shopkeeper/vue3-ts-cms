export const rules = {
  number: [
    { required: true, message: "手机号是必传内容", trigger: "change" },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: "非法手机号",
      trigger: "change"
    }
  ],
  code: [
    { required: true, message: "验证码是必传内容", trigger: "change" },
    {
      pattern: /^[0-9]{6,6}$/,
      message: "验证码必须是6个数字",
      trigger: "change"
    }
  ]
};
