<template lang="pug">
  div.login-container
    k-form(:model="form", :rules="rules", ref="form")
      k-form-item(label="用户名", prop="username")
        k-input(v-model="form.username", placeholder="请输入用户名")
      k-form-item(label="密码", prop="password")
        k-input(v-model="form.password", type="password", placeholder="请输入密码")
      k-form-item()
        div() 登录
</template>

<script>
import KForm from "@/components/form/KForm";
import KFormItem from "@/components/form/KFormItem";
import KInput from "@/components/form/KInput";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    KForm,
    KFormItem,
    KInput
  },
  methods: {
    validate() {}
  }
};
</script>

<style lang="stylus" scoped></style>