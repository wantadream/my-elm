<style>
</style>

<template>
  <div class="search">
    <headerTop :title="'订单列表'">
      <template v-slot:left>
        <p class=".left" @click="back"><</p>
      </template>
    </headerTop>
		<tabbar></tabbar>
  </div>
</template>

<script>
export default {
	methods: {
		back(){
			this.$router.go(-1)
		}
	},
};
</script>

