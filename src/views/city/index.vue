<template>
  <div class="city">
    <!-- <div class="title">{{ this.cityName }}</div> -->
		<header-top :title="this.cityName">
			<template v-slot:left>
				<p class=".left"><</p>
			</template>
			<template v-slot:right>
				<div>
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
        <span>{{ item.address }}</span>
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
import HeaderTop from '../../components/headerTop.vue';
import request from "../../service/getData";

import setStore from "../../api/setStore";
export default {
	components:{
		'header-top':HeaderTop,
	},
  data() {
    return {
      cityName: "",
      isHistory: true,
      value: "",
      searchRes: [],
      searchHistory: []
    };
  },
  mounted() {
    request("/v1/cities/" + this.$route.params.cityid, "get").then(res => {
      this.cityName = res.name;
    });
    this.value = "";
    this.initData();
  },
  methods: {
    initData() {
      if (window.localStorage.getItem("searchHistory")) {
        this.searchRes = JSON.parse(
          window.localStorage.getItem("searchHistory")
        );
      } else {
        this.searchRes = [];
      }
    },
    searchPois() {
      if (this.value) {
        this.isHistory = false;
        request("/v1/pois", "get", {
          city_id: this.$route.params.cityid,
          keyword: this.value
        }).then(res => {
          this.searchRes = res;
        });
        // instance({
        //   url: "/v1/pois",
        //   params: {
        //     city_id: this.$route.params.cityid,
        //     keyword: this.value
        //   }
        // }).then(res => {

        //   this.searchRes = res.data;
        // });
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
      this.$router.push({ path: "/msite", query: { geohash } });
      this.value = "";
      this.initData();
    },
    clearAll() {}
  }
};
</script>

<style lang='scss' scoped>

.title {
  height: 60px;
  width: 100%;
  background: #3190e8;
  position: fixed;
  top: 0;
}
.search {
  padding-top: 70px;
	
  .van-cell-group {
    .van-field {
      border: 1px solid #e4e4e4;
      margin-bottom: 10px;
      height: 40px;
    }
  }
  .div {
		background: #fff;
    padding: 10px;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
}
.searchHistory {
  font-size: 12.3px;
  padding: 5px;
}
.history {
  border-top: 1px solid #e4e4e4;
background: #fff;
  .item {
    padding: 15px;
    border-bottom: 1px solid #e4e4e4;
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