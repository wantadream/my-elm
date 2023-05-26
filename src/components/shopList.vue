
<style lang="scss" scoped>
.shop-list {
  background: #fff;
  // border-top: 0.025rem solid #e4e4e4;

  .shopping {
    display: flex;
    padding: 10px;
    border-bottom: 0.025rem solid #f1f1f1;
		color: #333;
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
        align-items: center;
      }
      .top {
        .shopName {
          font-weight: 700;
          font-size: 17px;
          max-width: 200px;
          &:before {
            content: "\54C1\724C";
            display: inline-block;
            font-size: 0.5rem;
            line-height: 0.6rem;
            color: #333;
            background-color: #ffd930;
            padding: 0 0.1rem;
            border-radius: 0.1rem;
            margin-right: 0.2rem;
          }
        }
      }
    }
  }
}
.bao {
  display: flex;
  transform: scale(0.8);
  margin-right: -0.3rem;
}
.supports {
  font-size: 0.4rem;
  font-family: "Microsoft Yahei";
  color: #999;
  border: 0.025rem solid #f1f1f1;
  padding: 0 0.04rem;
  border-radius: 0.08rem;
  margin-left: 0.05rem;
}
.mid {
  display: flex;

  justify-content: space-between;
  height: 0.6rem;
  margin-top: 0.52rem;
}
.delivery_style {
  font-size: 0.4rem;
  padding: 0.04rem 0.08rem 0;
  border-radius: 0.08rem;
  margin-left: 0.08rem;
  border: 1px;
}
.delivery_left {
  color: #fff;
  background-color: #3190e8;
  border: 0.025rem solid #3190e8;
}
.delivery_right {
  color: #3190e8;
  border: 0.025rem solid #3190e8;
}
.rating_container {
  position: relative;

  height: 0.4rem;
}
.star {
  display: flex;
}
.rating_num {
  font-size: 0.4rem;
  color: #ff6000;
  margin: 0 0.2rem;
}
.order_section {
  transform: scale(0.8);
  margin-left: -0.2rem;
  font-size: 0.4rem;
  color: #666;
}
.zhun {
  transform: scale(0.7);
  margin-right: -0.7rem;
}
.bot {
  margin-top: 0.52rem;
}
.price {
  transform: scale(0.9);
  font-size: 0.5rem;
  color: #666;
}

.lu span {
  color: #999;
}
.lu .order_time {
  color: #3190e8;
}
</style>

<template>
  <ul class="shop-list">
    <router-link
      class="shopping"
      v-for="item in shopList"
      :key="onlyId(item.id)"
      :to="{ path: 'shop', query: { geohash, id: item.id } }"
    >
      <div class="img">
        <img :src="'https://elm.cangdu.org/img/' + item.image_path" alt="" />
      </div>
      <div class="right">
        <div class="top">
          <div class="shopName ellipsis">{{ item.name }}</div>
          <div class="bao">
            <li class="supports">保</li>
            <li class="supports">准</li>
            <li class="supports">票</li>
          </div>
        </div>
        <div class="mid">
          <div class="star">
            <van-rate
              :value="item.rating"
              :size="10"
              allow-half
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
              class="rating_container"
            />
            <p class="rating_num">{{ item.rating }}</p>
            <p class="order_section">月售{{ item.recent_order_num }}单</p>
          </div>
          <div class="zhun">
            <span
              class="delivery_style delivery_left"
              v-if="item.delivery_mode?.text"
              >{{ item.delivery_mode?.text }}</span
            >
            <span class="delivery_style delivery_right">准时达</span>
          </div>
        </div>
        <div class="bot">
          <div class="price">
            ${{ item.float_minimum_order_amount }}起送 /
            {{ item.piecewise_agent_fee?.tips || "" }}
          </div>
          <div class="lu">
            <span>{{ item.distance }}</span> /
            <span class="order_time">{{ item.order_lead_time }}</span>
          </div>
        </div>
      </div>
    </router-link>
  </ul>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  props: ["shopList", "geohash"],
  data() {
    return {
      flag: false,
      arr: [],
      value: 3
    };
  },
  computed: {
    shopl() {}
  },
  mounted() {
    // document.addEventListener("scroll", this.listenList);
    // console.log(this.shopList, "1");
    this.arr = [];
  },
  methods: {
    listenList() {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      // console.log(scrollTop, clientHeight, scrollHeight);
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        if (this.flag) {
          console.log(1);
        } else {
        }
      }
    },
    onlyId(id) {
      // console.log(id);
      // return id
      if (this.arr.indexOf(id) == -1) {
        this.arr.push(id);
        return id;
      } else {
        return id + nanoid();
      }
    }
  }
};
</script>
