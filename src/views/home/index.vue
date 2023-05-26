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

        .van-grid {
          .van-grid-item__text {
            color: #3190e8 !important;
            height: 1000px !important;
          }
        }
      }
    }
  }
}

.biaotou {
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  line-height: 1.45rem;

  span {
    font-size: 0.475rem;
    color: #999;
  }
}
.vant-grid {
  font-size: 60px;
}
:deep(.van-grid-item) {
  width: 25%;
  height: 1.75rem;
  border-bottom: 0.025rem solid #e4e4e4;
  border-right: 0.025rem solid #e4e4e4;
  .van-grid-item__content {
    display: block;
    padding: 0 10px;
  }
  .van-grid-item__text {
    display: inline-block;
    color: #666;
    font: 0.6rem/1.75rem "Microsoft YaHei";
    text-align: center;
    width: 100%;
    height: 1.75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

:deep(.hot-city) {
  .biaotou {
    .van-index-anchor {
      span {
        font: 0.55rem/1.45rem "Helvetica Neue";
        color: #666;
      }
    }
  }
  .van-grid-item {
    border-bottom: 0.025rem solid #e4e4e4;
    border-right: 0.025rem solid #e4e4e4;
    span {
      text-align: center;
      color: #3190e8;
      height: 1.75rem;
      font: 0.6rem/1.75rem "Microsoft YaHei";
    }
  }
}
:deep(.van-index-anchor){
	line-height: 1.45rem;
}
</style>

<template>
  <div class="elm">
    <header-top>
      <template v-slot:left>
        <p class=".left">ele.me</p>
      </template>
      <template v-slot:right>
        <div @click="login">
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
      <!-- <div class="hot">
        <van-grid :border="false">
          <van-grid-item text="热门城市"></van-grid-item>
        </van-grid>
        <van-grid>
          <van-grid-item
            class="van-ellipsis"
            v-for="item in hotCityList"
            :key="item.area_code"
            :text="item.name"
          />
        </van-grid>
      </div> -->
      <div class="section">
        <van-index-bar :sticky-offset-top="50">
          <div class="item-index hot-city">
            <div class="biaotou">
              <van-index-anchor>
                <span>热门城市</span>
              </van-index-anchor>
            </div>
            <van-grid>
              <van-grid-item
                class="van-ellipsis"
                v-for="item in hotCityList"
                :key="item.area_code"
                :text="item.name"
                @click="nextpage(item.id)"
              />
            </van-grid>
          </div>
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
                v-for="item1 in item"
                :title="item1.name"
                class="van-ellipsis"
                :text="item1.name"
                :key="item1.area_code"
                @click="nextpage(item1.id)"
              />
            </van-grid>
          </div>
        </van-index-bar>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from "../../service/axios";
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
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    nextpage(id) {
      // this.$router.push({path:"/city/"+id,query:{cityid:id},params:{a:'queryid'}})
      this.$router.push({
        name: "cityname",
        params: { cityid: id, b: "sdfsdf" },
        query: { a: "sfd" }
      });
    }
  }
};
</script>