<template>
  <div class="food">
    <header-top :title="headTitle">
      <template v-slot:left>
        <p class=".left"><</p>
      </template>
    </header-top>
    <!-- 分类 -->
    <div class="sort-container">
      <div class="sort-item" :class="{ choose_type: sortBy == 'food' }">
        <div class="sort-item-container" @click="chooseType('food')">
          {{ fdTitle }}
        </div>

        <transition name="showlist">
          <div v-show="sortBy == 'food'" class="category_container">
            <div class="category_left">
              <div
                v-for="(item, index) in category"
                :key="item.id"
                @click="selectCategoryName(item.id, index)"
                class="category_left_div"
              >
                {{ item.name }}
              </div>
            </div>
            <div class="category_right">
              <div
                v-for="item in categoryDetail"
                :key="item._id"
                @click="getCategoryIds(item.id, item.name)"
                class="category_right_div"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!-- 排序 -->
      <div class="sort-item">
        <div class="sort-item-container" @click="chooseType('sort')">排序</div>
        <transition name="showlist">
          <div v-show="sortBy == 'sort'" class="category_container">
            <ul class="sort">
              <li>智能排序</li>
              <li>距离最近</li>
              <li>销量最高</li>
              <li>起送价最低</li>
              <li>配送速度最快</li>
              <li>评分最高</li>
            </ul>
          </div>
        </transition>
      </div>
      <!-- 筛选 -->
      <div class="sort-item">
        <div class="sort-item-container" @click="chooseType('activity')">
          筛选
        </div>
        <transition name="showlist">
          <div v-show="sortBy == 'activity'" class="category_container"></div>
        </transition>
      </div>
    </div>
    <ShopList :shopList="shopList" class="wode"></ShopList>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import request from "../../service/getData";
export default {
  props: [],
  data() {
    return {
      geohash: "",
      headTitle: "",
      foodTitle: "",
      sortBy: "",
      shopList: null,
      category: null,
      categoryDetail: null
    };
  },
  created() {
    this.initData();
  },
  beforeMount() {},
  computed: {
    ...mapState(["latitude", "longitude"]),
    fdTitle() {
      return this.foodTitle ? this.foodTitle : "分类";
    }
  },
  methods: {
    ...mapMutations(["RECORD_ADDRESS"]),
    async initData() {
      this.geohash = this.$route.query.geohash;
      this.headTitle = this.$route.query.title;
      let res = await request("v2/pois/" + this.geohash);
      this.RECORD_ADDRESS(res);
      request("/shopping/v2/restaurant/category", "get", {
        latitude: this.latitude,
        longitude: this.longitude
      }).then(res => {
        this.category = res;
      });

      this.shopList = await request(`/shopping/restaurants`, "get", {
        latitude: this.latitude,
        longitude: this.longitude
      });
    },
    chooseType(type) {
      if (!type) {
        this.sortBy = "";
      } else {
        if (this.sortBy == type) {
          this.sortBy = "";
        } else {
          this.sortBy = type;
        }
      }
    },
    selectCategoryName(id, index) {
      this.categoryDetail = this.category[index].sub_categories;
    },
    getCategoryIds(id, name) {
      this.headTitle = name;
      this.foodTitle = name;
      this.sortBy = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.food {
  .title {
    width: 100%;
    background: #3190e8;
    color: #fff;
    height: 70px;
    display: flex;
    line-height: 70px;
    position: relative;
    .back {
      font-size: 30px;
    }
    .title-head {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      margin-right: 150px;
    }
  }
  .showlist-enter-active,
  .showlist-leave-active {
    transition: all 0.3s;
    transform: translateY(0);
  }
  .showlist-enter,
  .showlist-leave-active {
    opacity: 0;
    transform: translateY(-100%);
  }
  .sort-container {
    width: 100%;
    position: fixed;
    top: 1.95rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.025rem solid #e4e4e4;
    .sort-item {
      flex: 1;
      text-align: center;
      z-index: 3;
      font-size: 0.55rem;
      padding: 0.3rem 0;
      border-right: 0.025rem solid #e4e4e4;
			.sort-item-container{
				font-size: .55rem;

			}
      .category_container {
        min-height: 100px;
        border-top: 0.025rem solid #e4e4e4;
        z-index: 2;
        display: flex;
        position: fixed;
        top: 3.1rem;
        left: 0;
        width: 100vw;
        background: #fff;
        .sort {
					width: 100%;
          li {
            padding: 10px 0;
						line-height: 1rem;
            font-size: 0.55rem;
						width: 100%;
            color: #666;
						text-align: left;
						text-indent: .25rem;
						border-bottom: 0.025rem solid #e4e4e4;
          }
        }
        .category_left {
          width: 50%;
          background: #f1f1f1;
          .category_left_div {
            height: 46px;
            line-height: 46px;
          }
        }
        .category_right {
          height: 16rem;
          overflow-y: auto;
          width: 50%;
          .category_right_div {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #f4f4f4;
          }
        }
      }
    }
  }
  .wode {
    padding-top: 3.1rem;
  }
}
</style>