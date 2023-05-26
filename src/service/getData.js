import { request } from "@/config/request";

/**
 * 获取首页定位地址
 */

const cityGuess = () => request("/v1/cities", "get", { type: "guess" });

/**
 *
 * @returns 获取首页热门城市
 */
const hotCity = () => request("/v1/cities", "get", { type: "hot" });

/**
 * 获取msite页面地址信息
 */

const msiteAddress = (geohash) => request("/v2/pois/" + geohash);

/**
 *
 *商家属性活动列表
 */

const shopDetails = (shopid, latitude, longitude) =>
  request("/shopping/restaurant/" + shopid, {
    latitude,
    longitude:
      longitude +
      "&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics",
  });

/***
 *
 * 获取食品列表
 */

const foodMenu = (restaurant_id) =>
  request("/shopping/v2/menu", {
    restaurant_id,
  });

export { cityGuess, shopDetails, msiteAddress, hotCity, foodMenu };
