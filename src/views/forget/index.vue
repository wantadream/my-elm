
<style lang="scss" scoped>
.forget{
	padding-top: 1.95rem;
}
</style>

<template>
  <div class="forget">
    <headerTop :title="'重置密码'">
      <template v-slot:left>
        <p class=".left"><</p>
      </template>
    </headerTop>
		<form >
			<input type="text" placeholder="账号"/>
			<input type="text" placeholder="旧密码"/>
			<input type="text" placeholder="请输入新密码"/>
			<input type="text" placeholder="请确认密码"/>
			<input type="text" placeholder="验证码"/>
		</form>
		
		<van-button type="primary" block>确认修改</van-button>
  </div>
</template>

<script>
export default {};
</script>
