<template>
  <header id="head_top">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="title ellipsis">{{ title }}</div>
		<div class="msite-title ellipsis" v-if="msiteTitle">
			<slot name="msiteTitle" ></slot> 
		</div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  props: ["title",'msiteTitle']
};
</script>

<style scoped lang="scss">
#head_top {
  width: 100%;
  height: 1.95rem;
  color: #fff;
  background: #3190e8;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
	z-index: 8;
	.left{
		font-size: 20px;
		margin-left: .4rem;
	}
	.title{
		width: 50%;
		font-size: .8rem;
		font-weight: 700;
		text-align: center;
		position: absolute;
		left: 47%;
		transform: translate(-50%,0);
	}
	.msite-title{
		width: 50%;
		font-size: .8rem;
		font-weight: 500;
		text-align: center;
		position: absolute;
		left: 47%;
		transform: translate(-50%,0);
		
	}
	.right{
		font-size: .6rem;
		position: absolute;
		right: .4rem;
	}
}
</style>