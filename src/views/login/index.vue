<template>
  <div class="search">
    <headerTop :title="'密码登录'">
      <template v-slot:left>
        <p class=".left"><</p>
      </template>
    </headerTop>
		<form >
			<input type="text" placeholder="账号"/>
			<input type="password" placeholder="密码"/>
			<input type="text" placeholder="验证码"/>
		</form>
		<p>注册过的用户可凭账号密码登录</p>
		<p>温馨提示:未注册过的账号,登录时将自动注册</p>
		<van-button type="primary" block>登录</van-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search{
	padding-top: 1.95rem;
}
p{
	    font-size: .5rem;
    color: red;
    padding: 0.4rem 0.6rem;
    line-height: .5rem;
}
</style>