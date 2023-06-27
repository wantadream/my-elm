<style lang="scss" scoped>
.choose_icon_container {
  display: flex;
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
  // line-height: 0.9rem;
  text-align: center;
  // padding-top: 0.01rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.specs_reduce_icon {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  color: #3190e8;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3190e8;
}
.cart_num {
  font-size: 0.78rem;
  min-width: 1rem;
  text-align: center;
}
</style>

<template>
  <section class="choose_icon_container">
    <div
      class="specs_reduce_icon "
      @click="removeOutCart(foods, foods.specfoods)"
			v-show="num"
    >
      -
    </div>
    <span class="cart_num" v-show="num">{{ num }}</span>
    <div class="add_icon" @click="addToCart(foods, foods.specfoods)">
      +
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["foods", "shopid"],
  data() {
    return {
      num: 0
    };
  },
  methods: {
    ...mapMutations(["ADD_CART", "REDUCE_CART"]),
    removeOutCart(
      { category_id, item_id },
      [{ food_id, name, price, spec, packing_fee, sku_id, stock }]
    ) {
      if (this.num > 0) {
        this.num--;
				
        this.REDUCE_CART({
          shopid: this.shopid,
          category_id,
          item_id,
          food_id,
          name,
          price,
          spec,
          packing_fee,
          sku_id,
          stock
        });
      }
    },
    addToCart(
      { category_id, item_id },
      [{ food_id, name, price, spec, packing_fee, sku_id, stock }]
    ) {
      this.num++;
      // console.log(category_id);
      this.ADD_CART({
        shopid: this.shopid,
        category_id,
        item_id,
        food_id,
        name,
        price,
        spec,
        packing_fee,
        sku_id,
        stock
      });
    },
    reduceCart() {
      if (this.num > 0) {
        this.num--;
      }
    }
  }
};
</script>