<template>
  <div class="msite">
    <header-top :msiteTitle="true">
      <template v-slot:left>
        <p class=".left">搜索</p>
      </template>
      <template v-slot:msiteTitle>
        {{ pois.name }}
      </template>
      <template v-slot:right>
        <div>
          登录|注册
        </div>
      </template>
    </header-top>
    <van-pull-refresh
      class="f5"
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <div class="msite_nav">
        <van-swipe :loop="false">
          <van-swipe-item
            ><div
              v-for="item in entry.slice(0, 8)"
              :key="item.id"
              class="item"
              @click="toFood(item.title, item.link)"
            >
              <van-icon
                :name="'https://fuss10.elemecdn.com' + item.image_url"
              ></van-icon>
              <p>{{ item.title }}</p>
            </div></van-swipe-item
          >
          <van-swipe-item
            ><div
              v-for="item in entry.slice(8, 16)"
              :key="item.id"
              class="item"
              @click="toFood()"
            >
              <van-icon
                :name="'https://fuss10.elemecdn.com' + item.image_url"
              ></van-icon>
              <p>{{ item.title }}</p>
            </div></van-swipe-item
          >
        </van-swipe>
      </div>

      <div class="shop-list">
        <p>附近商家</p>
				<ShopList :shopList="shopList"></ShopList>
        <!-- <ul>
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
        </ul> -->
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";
import request from "../../service/getData";
import ShopList from '../../components/shopList.vue';
// import request from "../../config/axios";
import axios from "axios";
export default {
  // el:'',
  name: "",
  parent: "",
  functional: "",
  delimiters: "",
  comments: "",
  components: {
		'ShopList':ShopList,
	},
  directives: "",
  filters: "",
  extends: "",
  mixins: "",
  inheritAttrs: "",
  model: "",
  props: "",
  data() {
    return {
      pois: {},
      entry: [],
      shopList: [],
      isLoading: ""
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  async beforeMount() {
    request(`/v2/pois/${this.$route.query.geohash}`, "get").then(res => {
      this.pois = res;
    });
    request(`/v2/index_entry`, "get").then(res => {
      this.entry = res;
    });
    let a = this.$route.query.geohash.split(",");

    this.shopList = await request(`/shopping/restaurants`, "get", {
      latitude: a[0],
      longitude: a[1],
      offset: 20
    });
  },
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    toFood(title, link) {
      this.$router.push({
        path: "/food",
        query: {
          geohash: this.$route.query.geohash,
          title,
          restaurant_category_id: this.getCategoryId(link)
        }
      });
    },
    getCategoryId(url) {
      let urlData = decodeURIComponent(
        url.split("=")[1].replace("&target_name", "")
      );
      if (/restaurant_category_id/gi.test(urlData)) {
        return JSON.parse(urlData).restaurant_category_id.id;
      } else {
        return "";
      }
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    }
  },
  template: "",
  renderError(h, err) {}
};
</script>

<style lang="scss" scoped>
.msite {
	font-size: 12px;
  .f5 {
    margin-top: 50px;
  }
  #header-top {
    .title {
      font-weight: 500;
    }
    .msite-title {
      width: 50%;
      font-size: 0.8rem;
      font-weight: 500;
      text-align: center;
      position: absolute;
      left: 47%;
      transform: translate(-50%, 0);
    }
  }
  .title {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background: #3190e8;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 9;
    .pois {
      max-width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .msite_nav {
    background: #fff;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 0.025rem solid #e4e4e4;
    .van-swipe {
      .van-swipe-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        .item {
          width: 23%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px 0 10px 0;
          .van-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 0.3rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p {
            font-size: 0.55rem;
            color: #666;
          }
        }
      }
    }
  }
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
}
</style>