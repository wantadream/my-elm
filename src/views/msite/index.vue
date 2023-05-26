
<style lang="scss" scoped>
.msite {
  font-size: 12px;
  padding-bottom: 50px;
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
            margin-bottom: 0.5rem;
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
}
.van_list {
  background: #fff;
}
.nearby_business {
  margin-left: 0.6rem;
  color: #999;
  font: 0.55rem/1.6rem "Microsoft YaHei";
}
</style>

<template>
  <div class="msite">
    <header-top :msiteTitle="true">
      <template v-slot:left>
        <p class=".left" @click="tosearch">搜索</p>
      </template>
      <template v-slot:msiteTitle>
        {{ pois.name }}
      </template>
      <template v-slot:right>
        <div @click="login">
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

      <van-list
        v-model="loading"
        :finished="finished"
        class="van_list"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <p class="nearby_business">附近商家</p>
        <ShopList :shopList="shopList" :geohash="geohash"></ShopList>

        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
    <TabBar></TabBar>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapState, mapMutations } from "vuex";
import {request} from "../../service/axios";
import { getStore } from "../../config/mUtils";
import ShopList from "../../components/shopList.vue";
import TabBar from "../../components/tabbar.vue";
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
    ShopList: ShopList,
    TabBar
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
      isLoading: "",
      flag: false,
      list: [],
      loading: false,
      finished: false,
      count: 0,
      geohash: ""
    };
  },
  computed: {
    ...mapState(["latitude", "longitude"]),
    msiteList() {
      return this.$refs.msiteList;
    },
    counter() {
      return this.count * 20;
    }
  },
  watch: {},
  beforeCreate() {},
  created() {
    this.count = 0;
  },
  async beforeMount() {
    if (this.$route.query.geohash) {
      this.geohash = this.$route.query.geohash;
    } else {
      this.geohash = getStore("geohash");
      // console.log(this.geohash);
    }
    this.SAVE_GEOHASH(this.geohash);
    this.pois = await request(`/v2/pois/${this.geohash}`, "get");

    request(`/v2/index_entry`, "get").then(res => {
      this.entry = res;
    });
    this.onLoad();

    // this.shopList = await request(`/shopping/restaurants`, "get", {
    //   latitude: a[0],
    //   longitude: a[1],
    //   offset: 20
    // });
  },
  mounted() {
    // document.addEventListener("scroll", this.listenList);
    // console.log(this.shopList,'msite');
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    ...mapMutations(["RECORD_ADDRESS", "SAVE_GEOHASH"]),
    // 跳转路由到/food
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
    },
    // 跳转路由到/search
    tosearch() {
      this.$router.push("/search");
    },
    login() {
      this.$router.push("login");
    },
    listenList() {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      // console.log(scrollTop, clientHeight, scrollHeight);
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        // if()
        // console.log(1);
      }
    },
    async onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
      this.RECORD_ADDRESS(this.pois);
      let res = await request(`/shopping/restaurants`, "get", {
        latitude: this.latitude,
        longitude: this.longitude,
        offset: this.counter
      });
			// res.forEach(item => {
			// 	console.log(item.delivery_mode?.text);
			// });
      if (this.count < 1) {
        this.loading = false;

        this.shopList = this.shopList.concat(res);

        if (res.length < 20) {
          this.finished = true;
        }
      } else {
        setTimeout(() => {
          this.loading = false;

          this.shopList = this.shopList.concat(res);
          if (res.length < 20) {
            this.finished = true;
          }
        }, 700);
      }
      this.count += 1;
    }
  },
  template: "",
  renderError(h, err) {}
};
</script>
