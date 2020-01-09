<template lang="pug">
  div.login-container
    //- k-form 
    k-form(:model="userInfo", :rules="rules", ref="loginForm")
      //- 用户名 
      k-form-item(label="用户名", prop="username")
        k-input(v-model="userInfo.username", placeholder="请输入用户名")
      //- 密码 
      k-form-item(label="密码", prop="password")
        k-input(v-model="userInfo.password", type="password", placeholder="请输入密码")
      k-form-item()
        button(@click="submit") 登录
</template>

<script>
import KForm from "@/components/form/KForm";
import KFormItem from "@/components/form/KFormItem";
import KInput from "@/components/form/KInput.vue";
import Notice from "@/components/Notice";
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入验证码" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    KForm,
    KFormItem,
    KInput,
    Notice
  },
  methods: {
    submit() {
      this.$refs["loginForm"].validate(valid => {
        this.$create(Notice, {
          title: "社会你君哥喊你来搬砖",
          message: valid ? "校验通过" : "校验失败",
          duration: 2000
        }).show();
      });
    },
    login() {
      console.log(1212);
    }
  },
  mounted() {
    let result = 3 + 4;
  }
};
</script>

<style lang="stylus" scoped>
.login-container {
  wh(100%);
}
</style>
