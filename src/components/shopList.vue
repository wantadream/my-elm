<template>
	<ul class="shop-list">
          <li class="shopping" v-for="item in shopList" :key="item.id">
            <div class="img">
              <img
                :src="'https://elm.cangdu.org/img/' + item.image_path"
                alt=""
              />
            </div>
            <div class="right">
              <div class="top">
                <div class="shopName ellipsis">{{ item.name }}</div>
                <div class="bao">保准票</div>
              </div>
              <div class="mid">
                <div class="star">月售{{ item.recent_order_num }}单</div>
                <div class="zhun">
                  {{ item.delivery ? item.delivery_mode.text : "" }}/准时
                </div>
              </div>
              <div class="bot">
                <div class="price">
                  ${{ item.float_minimum_order_amount }}起送/{{
                    item.piecewise_agent_fee.tips
                  }}
                </div>
                <div class="lu">
                  {{ item.distance }}/{{ item.order_lead_time }}
                </div>
              </div>
            </div>
          </li>
        </ul>
</template>

<script>
export default {
props:['shopList']
}
</script>

<style lang="scss" scoped>
  .shop-list {
    background: #fff;
    border-top: 0.025rem solid #e4e4e4;
    p {
      color: #555;
      font-size: 0.55rem;
      padding: 0.6rem 0 0.6rem 0.6rem;
    }
    .shopping {
      display: flex;
      padding: 10px;
      border-bottom: 0.025rem solid #f1f1f1;
      .img {
        margin-right: 10px;
        img {
          width: 70px;
          height: 70px;
        }
      }
      .right {
        flex: 1;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .top,
        .mid,
        .bot {
          display: flex;
          justify-content: space-between;
        }
        .top {
          .shopName {
            font-weight: 700;
            font-size: 17px;
            max-width: 200px;
          }
        }
      }
    }
  }
</style>