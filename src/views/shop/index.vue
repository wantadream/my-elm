<style lang="scss" scoped>
.shop_container {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  left: 0;
  height: 100%;
  // color: #57A9FF;
}
/* 商铺详情 */

/* 头 */
.shop_detail_header {
  position: relative;
}
.header_cover_img {
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
  .img {
    width: 100%;
    height: 414px;
    position: absolute;
    background: #e09999;
    top: 0;
    left: 0;
    z-index: 9;
    filter: blur(10px);
    img {
      width: 100%;
    }
  }
}

.description_header {
  position: relative;
  z-index: 11;
  background-color: rgba(119, 103, 137, 0.43);
  padding: 0.4rem 0 0.4rem 0.4rem;
  width: 100%;
  overflow: hidden;
}
.description_top {
  display: flex;
}
.description_left {
  width: 2.9rem;
  height: 2.9rem;
  display: block;
  border-radius: 0.15rem;
  background: #e09999;
  margin-right: 0.3rem;
  img {
    width: 100%;
  }
}
.description_right {
  flex: 1;
}
.description_title {
  font-size: 0.8rem;
  color: #fff;
  font-weight: bold;
  width: 100%;
  margin-bottom: 0.3rem;
}
.description_text {
  font-size: 0.5rem;
  color: #fff;
  margin-bottom: 0.3rem;
}
.description_promotion {
  font-size: 0.5rem;
  color: #fff;
  width: 11.5rem;
}
.description_arrow {
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.3rem;
  z-index: 11;
}
/* 尾 */
.description_footer {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-right: 1rem;
  .ellipsis {
    width: 84%;
  }
  p {
    font-size: 0.5rem;
    color: #fff;
  }
}
.footer_arrow {
  color: #fff;
  width: 0.45rem;
  height: 0.45rem;
  position: absolute;
  right: 0.3rem;
}
/* 切换商品/评价 */
.change_show_type {
  display: flex;
  background-color: #fff;
  padding: 0.9rem 0 0.6rem;
  border-bottom: 1px solid #ebebeb;
}
.change_show_type div .activity_show {
  color: #3190e8;
  border-color: #3190e8;
}
.change_show_type div {
  flex: 1;
  text-align: center;
  // display: flex;
}
.change_show_type div span {
  // flex: 1;
  font-size: 0.65rem;
  color: #666;
  padding: 0.2rem 0.1rem;
  border-bottom: 0.12rem solid #fff;
}

/* 内容区  商品 */
.food_container {
  display: flex;
  flex: 1;
  padding-bottom: 2rem;
  overflow: hidden;
}
.menu_container {
  display: flex;
  flex: 1;
  overflow-y: hidden;
  position: relative;
}
.menu_left {
  width: 3.8rem;
  // background: #6eabe7;
}
.menu_left_li {
  padding: 0.7rem 0.3rem;
  border-bottom: 0.025rem solid #ededed;
  box-sizing: border-box;
  border-left: 0.15rem solid #f8f8f8;
  position: relative;
  span {
    font-size: 0.6rem;
    color: #666;
  }
}
.menu_right {
  flex: 4;
  overflow-y: auto;
  // background: #8ef093;
}
.menu_detail_header {
  width: 100%;
  padding: 0.4rem;
  position: relative;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu_detail_header_left {
  width: 11rem;
  white-space: nowrap;
  overflow: hidden;
}
.menu_item_title {
  font-size: 0.7rem;
  color: #666;
  font-weight: bold;
}
.menu_item_description {
  font-size: 0.5rem;
  color: #999;
  width: 30%;
  overflow: hidden;
}
.menu_detail_list {
  background-color: #fff;
  padding: 0.6rem 0.4rem;
  border-bottom: 1px solid #f8f8f8;
  position: relative;
  overflow: hidden;
}
.menu_detail_link {
  display: flex;
}
.menu_food_img {
  margin-right: 0.4rem;
  .img {
    width: 2rem;
    height: 2rem;
    display: block;
    background: #3d3d3f;
    img {
      width: 100%;
    }
  }
}
.menu_food_description {
  flex: 1;
}
.food_description_head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.attributes_ul {
  display: flex;
  .attribute_new {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #4cd964;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: flex-end;
    transform: rotate(-45deg) translate(-0.1rem, -1.5rem);
    border: none;
    border-radius: 0;
    color: rgb(94, 196, 82);
    border-color: rgb(94, 196, 82);
    p {
      color: #fff;
      font-size: 0.4rem;
      text-align: center;
      flex: 1;
      transform: scale(0.8) translate(0.1rem, -0.1rem);
    }
  }
}
.description_foodname {
  width: 100%;
  font-size: 0.7rem;
  color: #333;
}
.food_description_content {
  font-size: 0.5rem;
  color: #999;
  line-height: 0.6rem;
}
.food_description_sale_rating {
  line-height: 0.8rem;
  span {
    font-size: 0.5rem;
    color: #333;
  }
}
.food_activity {
  font-size: 0.4rem;
  span {
    font-size: 0.3rem;
    border: 1px solid currentColor;
    color: rgb(241, 136, 79);
    border-color: rgb(240, 115, 115);
    border-radius: 0.3rem;
    padding: 0.08rem;
    display: inline-block;
    transform: scale(0.8);
    // margin-left: -0.35rem;
  }
}
.menu_detail_footer {
  margin-left: 2.4rem;
  font-size: 0;
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.food_price {
  & span:nth-of-type(1) {
    font-size: 0.5rem;
    color: #f60;
    margin-right: 0.05rem;
  }
  & span:nth-of-type(2) {
    font-size: 0.7rem;
    color: #f60;
    font-weight: bold;
    margin-right: 0.3rem;
  }
}
.cart_button {
  display: flex;
  align-items: center;
}
.add_icon {
  position: relative;
  z-index: 9;
  width: 0.9rem;
  height: 0.9rem;
  background: #3190e8;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  line-height: 0.9rem;
  text-align: center;
  padding-top: 0.01rem;
}
/* 内容区 评价 */
.rating_container {
}
/* 购物车 */
.buy_cart_container {
  position: absolute;
  background-color: #3d3d3f;
  bottom: 0;
  left: 0;
  z-index: 13;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: 2rem;
}
.cart_icon_num {
  flex: 1;
}
.cart_icon_container {
  display: flex;
  background-color: #3d3d3f;
  position: absolute;
  padding: 0.4rem;
  border: 0.18rem solid #444;
  border-radius: 50%;
  left: 0.5rem;
  top: -0.7rem;
}
.cart_icon {
  color: #fff;
  font-weight: bolder;
}
.cart_num {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 3.5rem;
}
.cart_num div {
  color: #fff;
}
.cart_num div:nth-of-type(1) {
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
}
.cart_num div:nth-of-type(2) {
  font-size: 0.4rem;
}
.gotopay {
  position: absolute;
  right: 0;
  background-color: #535356;
  width: 5rem;
  height: 100%;
  text-align: center;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gotopay_button_style {
  font-size: 0.7rem;
  color: #fff;
  font-weight: bold;
}
</style>

<template>
  <div class="shop_container">
    <header class="shop_detail_header">
      <router-link to="/shop">
        <div class="header_cover_img">
          <div class="img" >
            <img  :src="imgBaseUrl + shopDetailData.image_path" alt="" />
          </div>
        </div>
        <div class="description_header">
          <router-link to="/shop" class="description_top">
            <section class="description_left">
              <img :src="imgBaseUrl + shopDetailData.image_path" alt="" />
            </section>
            <section class="description_right">
              <h4 class="description_title ellipsis">大碗盒饭nanchi11</h4>
              <p class="description_text">商家配送／分钟送达／配送费¥5</p>
              <p class="description_promotion ellipsis">
                公告：欢迎光临，用餐高峰请提前下单，谢谢
              </p>
            </section>
            <div class="description_arrow">></div>
          </router-link>
          <footer class="description_footer">
            <p class="ellipsis">
              <span class="tip_icon">减</span>
              <span>满30减5，满60减8（APP专享）</span>
            </p>
            <p>1个活动</p>
            <div class="footer_arrow">></div>
          </footer>
        </div>
      </router-link>
    </header>
    <section class="change_show_type">
      <div>
        <span
          :class="{ activity_show: changeShowType == 'food' }"
          @click="changeShowType = 'food'"
          >商品</span
        >
      </div>
      <div>
        <span
          :class="{ activity_show: changeShowType == 'rating' }"
          @click="changeShowType = 'rating'"
          >评价</span
        >
      </div>
    </section>
    <section class="food_container" v-show="changeShowType === 'food'">
      <section class="menu_container">
        <section class="menu_left">
          <ul>
            <li class="menu_left_li" v-for="item in menuList" :key="item.id">
              <span>{{ item.name }}</span>
            </li>
            <!-- <li class="menu_left_li"><span>无内鬼</span></li>
            <li class="menu_left_li"><span>无内鬼</span></li>
            <li class="menu_left_li"><span>无内鬼</span></li>
            <li class="menu_left_li"><span>无内鬼</span></li>
            <li class="menu_left_li"><span>无内鬼</span></li>
            <li class="menu_left_li"><span>无内鬼</span></li>
            <li class="menu_left_li"><span>无内鬼</span></li>
            <li class="menu_left_li"><span>无内鬼</span></li>
            <li class="menu_left_li"><span>无内鬼</span></li>
            <li class="menu_left_li">无极剑圣</li>
            <li class="menu_left_li">厄斐琉斯</li>
            <li class="menu_left_li">暮光星灵</li>
            <li class="menu_left_li">渴血战斧</li>
            <li class="menu_left_li">狂风之力</li>
            <li class="menu_left_li">无尽之刃</li>
            <li class="menu_left_li">糖果女巫</li>
            <li class="menu_left_li">皮城女警</li> -->
          </ul>
        </section>
        <section class="menu_right">
          <ul>
            <li v-for="item in menuList" :key="item.id">
              <header class="menu_detail_header">
                <section class="menu_detail_header_left">
                  <strong class="menu_item_title">{{ item.name }} </strong>
                  <span class="menu_item_description">
                    {{ item.description }}</span
                  >
                </section>
                <span class="menu_detail_header_right">...</span>
              </header>
              <section
                class="menu_detail_list"
                v-for="item_d in item.foods"
                :key="item_d.item_id"
              >
                <div class="menu_detail_link">
                  <section class="menu_food_img">
                    <div class="img" >
                      <!-- <img :src="imgBaseUrl + item.d&&item_d.image_path" alt="" /> -->
                    </div>
                  </section>
                  <section class="menu_food_description">
                    <h3 class="food_description_head">
                      <strong class="description_foodname ellipsis">{{
                        item_d.name
                      }}</strong>
                      <ul class="attributes_ul" v-if="item_d.attributes.length">
                        <li class="attribute_new" v-for="(attr,index) in item_d.attributes" :key="index">
                          <p>{{attr.icon_name=='新'?'新品':attr.icon_name}}</p>
                        </li>
                      </ul>
                    </h3>
                    <p class="food_description_content">
                      {{ item_d.description }}
                    </p>
                    <p class="food_description_sale_rating">
                      <span>月售{{ item_d.month_sales }}份 </span>
                      <span> 好评率{{ item_d.satisfy_rate }}%</span>
                    </p>
                    <p class="food_activity"c v-if="item_d.activity">
                      <span>{{ item_d.activity.image_text }}</span>
                    </p>
                  </section>
                </div>
                <footer class="menu_detail_footer">
                  <section class="food_price">
                    <span>$</span>
                    <span>{{ item_d.specfoods[0].price }}</span>
                  </section>
                  <section class="cart_module">
                    <section class="cart_button">
                      <div class="add_icon">+</div>
                    </section>
                  </section>
                </footer>
              </section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
            </li>
            <li>
              <header class="menu_detail_header">sdf</header>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
            </li>
            <li>
              <header class="menu_detail_header">sdf</header>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
              <section class="menu_detail_list">sdf</section>
            </li>
          </ul>
        </section>
      </section>
      <section class="buy_cart_container">
        <section class="cart_icon_num">
          <div class="cart_icon_container">
            <div class="cart_icon">che</div>
          </div>
          <div class="cart_num">
            <div>$ 0.00</div>
            <div>配送费$5</div>
          </div>
        </section>
        <section class="gotopay gotopay_activity">
          <span class="gotopay_button_style">还差¥20起送</span>
        </section>
      </section>
    </section>
    <section class="rating_container" v-show="changeShowType === 'rating'">
      评价
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { msiteAddress, foodMenu, shopDetails } from "@/service/getData";
import { imgBaseUrl } from "@/config/env";
export default {
  data() {
    return {
      geohash: "", //位置信息,经纬度
      latitude: "",
      longitude: "",
      shopId: null, //商铺id
      changeShowType: "food",
      menuList: [], //食品列表
      shopDetailData: {}, //商铺详情
      imgBaseUrl
    };
  },
  created() {
    this.geohash = this.$route.query.geohash;
    this.shopId = this.$route.query.id;
  },
  mounted() {
    this.initData();
  },
  methods: {
    ...mapMutations(["RECORD_ADDRESS"]),
    async initData() {
      if (!this.latitude) {
        let res = await msiteAddress(this.geohash);
        this.RECORD_ADDRESS(res);
      }
      this.shopDetailData = await shopDetails(
        this.shopId,
        this.latitude,
        this.longitude
      );
      this.menuList = await foodMenu(this.shopId)||[];
      console.log(this.shopDetailData);
    }
  }
};
</script>