
<style lang="scss" scoped>
.login {
  padding-top: 1.95rem;
}
.login > p {
  font-size: 0.5rem;
  color: red;
  padding: 0.4rem 0.6rem;
  line-height: 0.5rem;
}
</style>

<template>
  <div class="login">
    <headerTop :title="'密码登录'">
      <template v-slot:left>
        <p class=".left" @click="back"><</p>
      </template>
    </headerTop>
    <!-- <form>
      <input type="text" placeholder="账号" />
      <input type="password" placeholder="密码" />
      <input type="text" placeholder="验证码" />
    </form> -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        autocomplete="username"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        autocomplete="current-password"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <p
        style="font-size: 0.5rem;color: red;padding: 0.2rem 0.6rem;line-height: 0.5rem;"
      >
        注册过的用户可凭账号密码登录
      </p>
      <p
        style="font-size: 0.5rem;color: red;padding: 0.4rem 0.6rem;line-height: 0.5rem;"
      >
        温馨提示:未注册过的账号,登录时将自动注册
      </p>
      <div style="margin: 16px;">
        <van-button round type="primary" block>登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    onSubmit() {
      console.log(1);
    }
  }
};
</script>
