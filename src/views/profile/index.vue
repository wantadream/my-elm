<style lang='scss'>
.profile_con {
  margin-top: 1.95rem;
}
.profile_link {
  background: #3190e8;
  display: flex;
  padding: 20px;
}
.profile_link_left {
  width: 2rem;
  height: 2rem;
  background: pink;
}
.profile_link_right {
  margin-left: 10px;
  p {
    font-weight: 700;
    font-size: 0.8rem;
    color: #fff;
  }
  span {
    font-size: 0.6rem;
    color: #fff;
  }
}
.profile_num {
  display: flex;
  background: #fff;
  .profile_num_mid {
    border-right: 1px solid #f1f1f1;
    border-left: 1px solid #f1f1f1;
  }
  .profile_num_item {
    flex: 1;
    text-align: center;
    .you {
      padding: 1rem 0 0.5rem;
      b {
        font-size: 1.2rem;
      }
      .yue_count {
        color: #f90;
      }
      .you_count {
        color: #ff5f3e;
      }
      .fen_count {
        color: #6ac20b;
      }
    }
    p {
      padding: 0 0 0.5rem;
			font-size: 0.6rem;
    color: #666;
    font-weight: 400;
    
    }
  }
}
.elm {
  margin-top: 0.5rem;
  background: #fff;
}
.elm_item {
  font-size: 0.7rem;

  border-bottom: 1px solid #f1f1f1;
  display: flex;
  align-items: center;
  .icon {
    width: 1rem;
    height: 1rem;
		font-size: .7rem;
		padding-left: .2rem;
		margin-left: .5rem;
		line-height: 1rem;
  }
  .item_right {
    padding: 0.5rem 0;
    flex: 1;
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;

    .item_icon {
      width: 0.5rem;
      height: 0.5rem;
			margin-right: .2rem;
    }
  }
}
</style>

<template>
  <div class="profile">
    <headerTop :title="'我的'">
      <template v-slot:left>
        <p class=".left"><</p>
      </template>
    </headerTop>
    <div class="profile_con">
      <div class="profile_link">
        <div class="profile_link_left">
          <div class="img">j</div>
        </div>
        <div class="profile_link_right">
          <p>denglu</p>
          <span>zanwo</span>
        </div>
      </div>
      <div class="profile_num">
        <div class="profile_num_left profile_num_item">
          <div class="you">
            <b class="yue_count">0.00</b>
            元
          </div>
          <p>我的余额</p>
        </div>
        <div class="profile_num_mid profile_num_item">
          <div class="you">
            <b class="you_count">0</b>
            个
          </div>

          <p>我的优惠</p>
        </div>
        <div class="profile_num_right profile_num_item">
          <div class="you">
            <b class="fen_count">0</b>
            分
          </div>
          <p>我的积分</p>
        </div>
      </div>
      <div class="elm">
        <div class="order elm_item">
          <div class="icon">标</div>
          <div class="item_right">
            <p>我的订单</p>
            <div class="item_icon">1</div>
          </div>
        </div>
        <div class="jifen elm_item">
          <div class="icon">标</div>
          <div class="item_right">
            <p>积分商城</p>
            <div class="item_icon">1</div>
          </div>
        </div>
        <div class="vip elm_item">
          <div class="icon">标</div>
          <div class="item_right">
            <p>饿了么会员卡</p>
            <div class="item_icon">1</div>
          </div>
        </div>
      </div>
      <div class="elm">
        <div class="fuwu elm_item">
          <div class="icon">标</div>
          <div class="item_right">
            <p>服务中心</p>
            <div class="item_icon">1</div>
          </div>
        </div>
        <div class="xiazai elm_item">
          <div class="icon">标</div>
          <div class="item_right">
            <p>下载饿了么APP</p>
            <div class="item_icon">1</div>
          </div>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {};
</script>

