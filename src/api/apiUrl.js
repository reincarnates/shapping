const localhost = 'http://www.helibuy.cn/mall_api/index.php?app=web_index&a=index';

const serviceModule = {
    //首页楼层接口
    floorApi: `${localhost}&method=adv.get_ad_floor`,
    //首页分类接口
    classifyApi: `${localhost}&method=home.goods_class`,
    //首页广告图和banner
    advertApi: `${localhost}&method=home.adv`,
    //首页购物车接口
    shoppingApi: `${localhost}&method=home.cart_load`,
    //删除购物车信息
    delShopping: `${localhost}&method=home.del_cart`
};
export default serviceModule;