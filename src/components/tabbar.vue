<template>
  <van-tabbar v-model="active" @change="onChange" route>
    <van-tabbar-item to='/msite' name="home" icon="home-o">外卖</van-tabbar-item>
    <van-tabbar-item to='/search'  name="search" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item  to='/order' name="order" icon="friends-o">订单</van-tabbar-item>
    <van-tabbar-item  to='/profile' name="friends" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
	data(){
		return{
			active:''
		}
	},
	beforeMount(){

	},
	methods: {
		onChange(flag){
			this.active=flag
		}
	},
};
</script>

<style>
</style>