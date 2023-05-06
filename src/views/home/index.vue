<template>
  <div class="elm">
    <header-top>
      <template v-slot:left>
        <p class=".left">ele.me</p>
      </template>
      <template v-slot:right>
        <div>
          登录|注册
        </div>
      </template>
    </header-top>
    <div class="body">
      <div class="position">
        <div class="top">
          <p class="p1">当前定位城市</p>
          <p class="p2">定位不准确时,请在城市列表中选择</p>
        </div>
        <div class="posi">
          <p class="p3">上海</p>
          <div class="you">></div>
        </div>
      </div>
      <div class="hot">
        <van-grid :border="false">
          <van-grid-item text="热门城市"></van-grid-item>
        </van-grid>
        <van-grid>
          <van-grid-item
            v-for="item in hotCityList"
            :key="item.area_code"
            :text="item.name"
          />
        </van-grid>
      </div>
      <div class="section">
        <van-index-bar :sticky-offset-top="50">
          <div
            v-for="(item, value) in sortgroupcity"
            class="item-index"
            :key="value"
          >
            <div class="biaotou">
              <van-index-anchor :index="value" />
              <span>{{ value == "A" ? "(按照字母排序)" : "" }}</span>
            </div>
            <van-grid>
              <van-grid-item
                class="esllipsis"
                v-for="item1 in item"
                :text="item1.name"
                :key="item1.area_code"
                :to="'/city/' + item1.id"
              />
            </van-grid>
          </div>
        </van-index-bar>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../service/getData";
import getCityList from "../../api/getCityList";
export default {
  data() {
    return {
      positionCity: {},
      hotCityList: [],
      cityList: [],
      title: "",
      num: 100
    };
  },
  created() {
    request("/v1/cities", "get", { type: "guess" }).then(res => {
      this.positionCity = res;
    });
    request("/v1/cities", "get", { type: "hot" }).then(res => {
      this.hotCityList = res;
    });
    request("/v1/cities", "get", { type: "group" }).then(res => {
      this.cityList = res;
    });
  },
  computed: {
    sortgroupcity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.cityList[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.cityList[
            String.fromCharCode(i)
          ];
        }
      }

      return sortobj;
    }
  }
};
</script>

<style lang="scss" scoped>
.elm {
  font-size: 30px;
  .body {
    .position {
      padding-top: 2.35rem;
      background: #fff;
      .top {
        display: flex;
        justify-content: space-between;
        line-height: 1.45rem;
        padding: 0 0.45rem;
        .p1 {
          font-size: 0.55rem;
          color: #666;
        }
        .p2 {
          font-weight: 900;
          font-size: 0.475rem;
          color: #9f9f9f;
        }
      }
      .posi {
        height: 1.8rem;

        margin-bottom: 20px;
        display: flex;
        align-items: center;
        padding: 0 0.45rem;
        justify-content: space-between;
        border-top: 1px solid #e4e4e4;
        border-bottom: 2px solid #e4e4e4;
        .p3 {
          color: #3190e8;
          font-size: 0.75rem;
        }
        .you {
          color: #999;
        }
      }
    }
		
    .hot {
      box-shadow: inset 2px 0 3px rgba(0, 0, 0, 0.3);
      padding-top: 3px;
      background: #fff;
      .van-grid {
        color: #3190e8;
      }
    }
    .section {
      .item-index {
        margin-top: 20px;
        border-top: 2px solid #e4e4e4;
        border-bottom: 2px solid #e4e4e4;
        background: #fff;
				
        .biaotou {
          display: flex;
          border-bottom: 1px solid #e4e4e4;
          line-height: 1.45rem;
					
          span {
            font-size: 0.475rem;
            color: #999;
          }
        }
				.van-grid{
					.van-grid-item__text{
						color: #3190e8 !important;
						height: 1000px !important;
					}
				}
      }
    }
  }
}

.vant-grid {
  font-size: 60px;
}
</style>