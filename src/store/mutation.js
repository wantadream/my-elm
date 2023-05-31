import { RECORD_ADDRESS, SAVE_GEOHASH, ADD_CART } from "./mutation-type";

import { setStore, getStore } from "../config/mUtils";

export default {
  [RECORD_ADDRESS](state, { latitude, longitude }) {
    state.latitude = latitude;
    state.longitude = longitude;
  },
  [SAVE_GEOHASH](state, geohash) {
    state.geohash = geohash;
  },
  // 加入购物车
  [ADD_CART](
    state,
    {
      shopid,
      category_id,
      item_id,
      food_id,
      name,
      price,
      specs,
      packing_fee,
      sku_id,
      stock,
    }
  ) {
    let cart = state.cartList;

    let shop = (cart[shopid] = cart[shopid] || {});
    let category = (shop[category_id] = shop[category_id] || {});
    let item = (category[item_id] = category[item_id] || {});
    if (item[food_id]) {
      item[food_id]["num"]++;
    } else {
      item[food_id] = {
        num: 1,
        id: food_id,
        name: name,
        price: price,
        specs: specs,
        packing_fee: packing_fee,
        sku_id: sku_id,
        stock: stock,
      };
    }
    state.cartList = { ...cart };
    //存入localStorage
    setStore("buyCart", state.cartList);
  },
};
