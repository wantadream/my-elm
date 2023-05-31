<template>
  <div class="classify">
    <div class="left">
      <div
        class="item"
        :class="{ active: currentIndex == index }"
        v-for="(item, index) in types"
        @click="changeType(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="right" @scroll="handleScroll">
      <div v-for="(item, index) in shops" :key="index" ref="shop">
        <div class="title">{{ item.category }}</div>
        <div class="item" v-for="(i, j) in item.data" :key="j">
          <div class="photo">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </div>
          <div class="info">
            <div class="name">{{ i.name }}</div>
            <div class="type">{{ i.type }}</div>
            <div class="desc">{{ i.desc }}</div>
            <div class="buy">购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
let isLock = ref(false);
// 分类
let types = ref([
  "人气Top",
  "爆款套餐",
  "大师咖啡",
  "小黑杯",
  "中国茶咖",
  "生椰家族",
  "厚乳拿铁",
  "丝绒拿铁",
  "生酪拿铁",
  "经典拿铁"
]);
// 商品
let shops = ref([
  {
    category: "人气Top",
    data: [
      {
        name: "冰吸生椰拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "生椰拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "摸鱼生椰拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "茉莉花香拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "丝绒拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "小甘橘美式",
        type: "咖啡",
        desc: "咖啡"
      }
    ]
  },
  {
    category: "爆款套餐",
    data: [
      {
        name: "2杯套餐",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "3杯套餐",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "4杯套餐",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "5杯套餐",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "不喝咖啡套餐",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "必喝套餐",
        type: "咖啡",
        desc: "咖啡"
      }
    ]
  },
  {
    category: "大师咖啡",
    data: [
      {
        name: "美式",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "加浓美式",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "橙C美式",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "澳瑞白",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "卡布奇诺",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "玛奇朵",
        type: "咖啡",
        desc: "咖啡"
      }
    ]
  },
  {
    category: "小黑杯",
    data: [
      {
        name: "云南小柑橘",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "广东小柑橘",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "广西小柑橘",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "福建小柑橘",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "湖南小柑橘",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "江西小柑橘",
        type: "咖啡",
        desc: "咖啡"
      }
    ]
  },
  {
    category: "中国茶咖",
    data: [
      {
        name: "碧螺知春拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "茉莉花香拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "菊花香拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "梅花香拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "兰花香拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "玫瑰花香拿铁",
        type: "咖啡",
        desc: "咖啡"
      }
    ]
  },
  {
    category: "生椰家族",
    data: [
      {
        name: "冰吸生椰拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "生椰拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "摸鱼生椰拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "椰云拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "丝绒拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "陨石拿铁",
        type: "咖啡",
        desc: "咖啡"
      }
    ]
  },
  {
    category: "厚乳拿铁",
    data: [
      {
        name: "厚乳拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "生椰拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "茉莉花香拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "椰云拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "丝绒拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "海盐拿铁",
        type: "咖啡",
        desc: "咖啡"
      }
    ]
  },
  {
    category: "丝绒拿铁",
    data: [
      {
        name: "丝绒拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "生椰丝绒拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "黑糖丝绒拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "椰云丝绒拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "香草丝绒拿铁",
        type: "咖啡",
        desc: "咖啡"
      }
    ]
  },
  {
    category: "生酪拿铁",
    data: [
      {
        name: "生酪拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "绿豆拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "红豆拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "黑豆拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "黄豆拿铁",
        type: "咖啡",
        desc: "咖啡"
      }
    ]
  },
  {
    category: "经典拿铁",
    data: [
      {
        name: "拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "陨石拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "焦糖拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "生椰拿铁",
        type: "咖啡",
        desc: "咖啡"
      },
      {
        name: "美式",
        type: "咖啡",
        desc: "咖啡"
      }
    ]
  }
]);
// 获取右侧商品的ref实例
let shop = ref(null);
// 用来表示当前选中处于激活状态的分类的索引
let currentIndex = ref(0);
// 切换类型
const changeType = val => {
  currentIndex.value = val;
  // 获取选中的dom元素
  const typeItemDom = shop.value[val];
  // 开锁
  isLock.value = true;
  // 第一个参数为水平方向，第二个参数为纵轴方向
  window.scrollTo(0, typeItemDom.offsetTop);
  setTimeout(() => {
    //关锁
    isLock.value = false;
  }, 0);
};
// 监听页面滚动
const handleScroll = () => {
  // 锁关了滚动事件才有效
  if (!isLock.value) {
    types.value.forEach((item, index) => {
      // console.dir(shop.value[index]);
      const shopItemDom = shop.value[index];
      // 每个模块距离顶部的距离
      const offsetTop = shopItemDom.offsetTop;
      // 页面滚动的距离
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= offsetTop) {
        // 给左边分类设置激活的效果
        currentIndex.value = index;
      }
    });
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped lang="less">
.classify {
  display: flex;
  position: relative;
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 92px;
    overflow-y: scroll;
    border-right: 1px solid #c1c2c4;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 67px;
      height: 29px;
      font-size: 15px;
      font-family: PingFang SC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
    }
    .active {
      color: #00b1ff;
    }
    .item:not(:last-child) {
      margin-bottom: 25px;
    }
  }
  .right {
    flex: 1;
    position: absolute;
    top: 0;
    right: 17px;
    overflow-y: scroll;
    .title {
      font-size: 18px;
      margin-bottom: 5px;
    }
    .item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 17px;
      width: 246px;
      height: 73px;
      .photo {
        width: 58px;
        height: 58px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          border: 1px solid gray;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 171px;
        height: 73px;
        box-shadow: 0px 1px 0px 0px rgba(221, 221, 221, 1);
        .name {
          padding-left: 0;
          font-size: 17px;
          font-weight: 600;
          color: #333333;
        }
        .type,
        .desc {
          font-size: 14px;
          font-weight: 400;
          color: #999999;
        }
        .buy {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 0;
          top: 17px;
          width: 67px;
          height: 29px;
          background: #e7e8ea;
          border-radius: 21px;
          font-size: 15px;
          font-family: PingFang SC-Semibold, PingFang SC;
          font-weight: 600;
          color: #05affa;
        }
      }
    }
  }
}
</style>