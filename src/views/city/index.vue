
<style lang='scss' scoped>
.title {
  height: 60px;
  width: 100%;
  background: #3190e8;
  position: fixed;
  top: 0;
}
.search {
  padding-top: 2.35rem;

  .div {
    background: #fff;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
}
:deep(.van-cell-group) {
  // padding: 0 .5rem;
  padding-top: 0.1rem;
  width: 90%;
  margin: 0 auto;
  border-radius: 0;
  &:after {
    border: none;
  }
  .van-field {
    // border: 1px solid #e4e4e4;
    margin-bottom: 10px;
    padding: 0;
    // height: 40px;
    &:after {
      border: none;
    }

    input {
			&::placeholder{
				color: #333;
			}
      border: 1px solid #e4e4e4;
      padding: 0 0.3rem;
      font-size: 0.65rem;
      color: #333;
      border-radius: 0.1rem;
      margin-bottom: 0.4rem;
      // width: 80%;
      margin: 0 auto;
      height: 1.4rem;
    }
  }
  .van-button {
    height: 1.4rem;
  }
  .van-button__text {
    font-size: 0.65rem;
  }
}
.searchHistory {
  font-size: 12.3px;
  padding: 5px;
  color: #333;
}
.history {
  border-top: 1px solid #e4e4e4;
  background: #fff;
  .item {
    padding: 15px 0 0 0;
    border-bottom: 1px solid #e4e4e4;
    h4 {
      width: 90%;
      margin: 0 auto 0.35rem;
      color: #333;
    }
    p {
      width: 90%;
      margin: 0 auto 0.55rem;
      color: #999;
    }
  }

  h4 {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
  span {
    font-size: 12px;
    color: #999;
  }
  .clear {
    font-size: 18px;
    color: #666;
    padding: 14px;
    text-align: center;
  }
}

</style>

<template>
  <div class="city">
    <!-- <div class="title">{{ this.cityName }}</div> -->
    <header-top :title="this.cityName">
      <template v-slot:left>
        <p class=".left" @click="back"><</p>
      </template>
      <template v-slot:right>
        <div @click="changecity">
          切换城市
        </div>
      </template>
    </header-top>
    <div class="search">
      <div class="div">
        <van-cell-group inset>
          <van-field
            v-model="value"
            placeholder="输入学校、商务楼、地址"
            @keyup.enter="searchPois"
            clearable
            :border="true"
          />
          <van-button type="primary" @click="searchPois" color="#3190e8" block
            >搜索</van-button
          >
        </van-cell-group>
      </div>
    </div>
    <p v-show="isHistory" class="searchHistory">搜索历史</p>

    <div class="history">
      <div
        v-for="item in searchRes"
        class="item"
        :key="item.geohash"
        @click="nextPage(item, item.geohash)"
      >
        <h4>{{ item.name }}</h4>
        <p>{{ item.address }}</p>
      </div>
      <div class="clear" v-show="searchRes.length" @click="clearAll">
        清空记录
      </div>
    </div>
    <!-- <div class="list" v-show="!isHistory">
      <p>搜索结果</p>
      <div v-for="item in searchRes" :key="item.geohash" @click="nextPage(item,item.geohash)">
        {{ item.name }}
      </div>
    </div> -->
  </div>
</template>

<script>
import HeaderTop from "../../components/headerTop.vue";
import {request} from "../../service/axios";

import setStore from "../../api/setStore";
export default {
  components: {
    "header-top": HeaderTop
  },
  props: ["cityid"],
  data() {
    return {
      cityName: "",
      isHistory: true,
      value: "",
      searchRes: [],
      searchHistory: []
    };
  },
  created() {
    // console.log(this.$route);
  },
  mounted() {
    request("/v1/cities/" + this.cityid, "get").then(res => {
      this.cityName = res.name;
    });
    this.value = "";
    this.initData();
  },
  methods: {
    // 初始化数据
    initData() {
      if (window.localStorage.getItem("searchHistory")) {
        this.searchRes = JSON.parse(
          window.localStorage.getItem("searchHistory")
        );
      } else {
        this.searchRes = [];
      }
    },
    // 搜索地址
    searchPois() {
      if (this.value) {
        this.isHistory = false;
        request("/v1/pois", "get", {
          city_id: this.cityid,
          keyword: this.value
        }).then(res => {
          this.searchRes = res;
        });
      }
    },
    nextPage(item, geohash) {
      this.isHistory = true;
      let history = window.localStorage.getItem("searchHistory");

      if (history) {
        let flag = false;
        this.searchHistory.forEach((item, index) => {
          if (item.geohash == geohash) flag = true;
        });
        if (!flag) {
          this.searchHistory.push(item);
        }
      } else {
        this.searchHistory.push(item);
      }

      setStore("searchHistory", this.searchHistory);
      setStore("geohash", geohash);
      this.$router.push({ path: "/msite", query: { geohash } });
      this.value = "";
      this.initData();
    },
    clearAll() {},
    back() {
      this.$router.go(-1);
    },
    changecity() {
      this.$router.push("/home");
    }
  }
};
</script>
