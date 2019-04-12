<template>
  <div>
    <!-- 广告图 -->
    <div class="advert" v-if="close">
      <div class="advertContent">
        <div class="advertClose clearfix">
          <img src="@/assets/images/advertClose.png" @click="advertClose">
        </div>
      </div>
    </div>
    <!-- 广告图end -->
    <!-- 头部 -->
    <head-view></head-view>
    <!-- 头部end -->
    <!-- 内容 -->
    <div class="content">
      <!-- 侧边栏 -->
      <div class="application">
        <div class="application-info" v-if="isApplication" @mousemove="application" @mouseout="applicationOut">
          我的消息
        </div>
        <div class="application-item pointer" :class="{applicationHover:isApplication}" @mousemove="application" @mouseout="applicationOut">
          <img src="@/assets/images/sideMsg.png">
        </div>
        <div class="application-info2" v-if="isApplication2" @mousemove="application2" @mouseout="applicationOut2">
          购物车
        </div>
        <div class="application-item pointer" :class="{applicationHover:isApplication2}" @mousemove="application2" @mouseout="applicationOut2" @click="SideCart">
          <img src="@/assets/images/sideCar.png">
        </div>
        <div class="application-info3" v-if="isApplication3" @mousemove="application3" @mouseout="applicationOut3">
          浏览足迹
        </div>
        <div class="application-item pointer" :class="{applicationHover:isApplication3}" @mousemove="application3" @mouseout="applicationOut3">
          <img src="@/assets/images/sideFoot.png">
        </div>
        <div class="application-info4" v-if="isApplication4" @mousemove="application4" @mouseout="applicationOut4">
          联系客服
        </div>
        <div class="application-item pointer" :class="{applicationHover:isApplication4}" @mousemove="application4" @mouseout="applicationOut4">
          <img src="@/assets/images/sideCustomer.png">
        </div>
        <div class="application-info5" v-if="isApplication5" @mousemove="application5" @mouseout="applicationOut5">
          问题反馈
        </div>
        <div class="application-item pointer" :class="{applicationHover:isApplication5}" @mousemove="application5" @mouseout="applicationOut5">
          <img src="@/assets/images/sideBack.png">
        </div>
        <div class="application-item2 pointer" v-if="btnFlag" @click="backTop">
          <img src="@/assets/images/updown.png">
        </div>
      </div>
      <!-- 侧边栏end -->
      <div class="content-search clearfix">
        <div class="content-logo">
          <img src="@/assets/images/uligou.png">
        </div>
        <div class="content-input">
          <!-- 搜索框 -->
          <div class="search-input">
            <input type="text" :placeholder="mother" @focus="motherFocus" @blur="motherBlur" v-model="searchVal"  @keyup.enter="search">
            <img src="@/assets/images/search.png" @click="search">
          </div>
          <div class="smallNav">
            <ul class="clearfix">
              <li>
                <a href="#">厨房用纸</a>
              </li>
              <li>
                <a href="#">清洁纸巾</a>
              </li>
              <li>
                <a href="#">米面粮油</a>
              </li>
              <li>
                <a href="#">家居用品</a>
              </li>
              <li>
                <a href="#">厨房用品</a>
              </li>
              <li>
                <a href="#">母婴</a>
              </li>
            </ul>
          </div>
          <!-- 搜索框 end-->
        </div>
        <!-- 购物车 -->
        <div v-for="(item, x) in shopCartArr" :key="x">
          <div class="ShoppingCart" @mousemove="shoppingMove" @mouseout="shoppingOut" :class="{bgHover:isShopping}">
            <img src="@/assets/images/shoppingCart.png">
            <span>购物车</span>
            <div class="infoNumber" v-if="item.cart_goods_num > 0">{{item.cart_goods_num}}</div>
          </div>
          <div class="ShoppingCart-small" v-if="isShopping" @mousemove="shoppingMove" :class="{writeHover:isShopping}"></div>
          <!--  v-if="isShopping" -->
          <div class="ShoppingCart-position" v-if="isShopping" :class="{ShoppingHover:isShopping}" @mousemove="shoppingMove" @mouseout="shoppingOut">
            <div class="ShoppingCart-position-head">
              最新加入商品
            </div>
            <div class="noShopping" v-if="item.cart_goods_num == 0">
              购物车中没有商品，赶快去选购！
            </div>
            <div class="ShoppingCart-goods" v-else v-for="(element, index) in item.list" :key="index">
              <div class="ShoppingCart-goods-left">
                <img :src="element.goods_image" alt="">
              </div>
              <div class="ShoppingCart-goods-center">
                <a :href="element.goods_url">
                  {{element.goods_name}}
                </a>
              </div>
              <div class="ShoppingCart-goods-right">
                <div class="ShoppingCart-price">￥{{element.goods_price}} × {{element.goods_num}}</div>
                <div class="ShoppingCart-del pointer">
                  删除
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 购物车 end-->
        <!-- 二维码 -->
        <div class="code">
          <img src="@/assets/images/code.png">
        </div>
        <!-- 二维码 end-->
      </div>
      <!-- 全部分类 -->
      <div class="categoriesWarp">
        <div class="all-categories pointer" @click="openAside" ref="allCategories">
          <img src="@/assets/images/shrink.png" v-if="isOpen">
          <span class="mar-lw" v-if="isOpen">全部分类</span>
        </div>
        <div class="categories-right" v-if="isCategories">
          <ul class="clearfix">
              <li>
                <a href="#">厨房用纸</a>
              </li>
              <li>
                <a href="#">清洁纸巾</a>
              </li>
              <li>
                <a href="#">米面粮油</a>
              </li>
              <li>
                <a href="#">家居用品</a>
              </li>
              <li>
                <a href="#">厨房用品</a>
              </li>
              <li>
                <a href="#">母婴</a>
              </li>
            </ul>
        </div>
      </div>
      <!-- 全部分类 end-->
      <!-- 侧导航&轮播 -->
      <div class="content-aside">
          <div class="openfather" @click="openAside" v-if="isOpen">
            <div class="openDown">
              <!-- {{brandFold ? '展开' : '收起'}} -->
              <img src="@/assets/images/dowm.png" v-if="brandFold">
            </div>
          </div>
        <div class="aside" ref="aside1">
          <ul class="clearfix" ref="aside" v-if="isAside">
            <li @mousemove="mouseEnter(index)" @mouseout="mouseLeave" v-for="(item,index) in classification" :key="index" class="twlist">
              <a :href="element.url" v-for="(element,key) in item.name" :key="key">{{element.gc_name}}<span v-if="key < 2">/</span></a>
            </li>
            <li @mousemove="mouseEnter2" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码</a>
            </li>
            <li @mousemove="mouseEnter2" @mouseout="mouseLeave">
              <a href="#">家居/</a>
              <a href="#">家具/</a>
              <a href="#">假装</a>
            </li>
            <li @mousemove="mouseEnter2" @mouseout="mouseLeave">
              <a href="#">房产/</a>
              <a href="#">汽车/</a>
              <a href="#">汽车用品</a>
            </li>
            <li @mousemove="mouseEnter2" @mouseout="mouseLeave">
              <a href="#">食品/</a>
              <a href="#">酒类/</a>
              <a href="#">生产/</a>
              <a href="#">特产</a>
            </li>
            <li @mousemove="mouseEnter2" @mouseout="mouseLeave">
              <a href="#">男鞋/</a>
              <a href="#">户外/</a>
              <a href="#">运动</a>
            </li>
            <li @mousemove="mouseEnter2" @mouseout="mouseLeave">
              <a href="#">母婴/</a>
              <a href="#">玩具乐器</a>
            </li>
            <li @mousemove="mouseEnter2" @mouseout="mouseLeave">
              <a href="#">母婴/</a>
              <a href="#">玩具乐器</a>
            </li>
          </ul>
          <!--  v-if="listShow" -->
          <div class="list-select" v-if="listShow" @mousemove="mouseEnter2" @mouseout="mouseLeave2">
            <div class="list-select-left">
              <div class="list-header">
                <span v-for="(item, index) in recommend" :key="index">
                  <a :href="item.url">
                    {{item.gc_name + ' > ' }}
                  </a>
                </span>
              </div>
              <div class="lists" v-for="(element, key) in secondary" :key="key">
                <div class="lists-title">{{element.gc_name}} ></div>
                <div class="lists-item-father">
                  <span class="lists-item" v-for="(item, index) in element.children" :key="index">
                    <a :href="item.url">{{item.gc_name}}</a>
                  </span>
                </div>
              </div>
            </div>
            <!-- <div class="list-select-right"></div> -->
          </div>
        </div>
        <!-- 轮播图 -->
        <div class="aside-right" v-if="isAside == 2">
          <div class="aside-planting">
            <div class="planting mar-lm">
              <wheel-planting></wheel-planting>
            </div>
            <div class="planting-right">
              <div class="person-info">
                <div class="head-portrait">
                  <div class="portrait">
                    <div class="portrait-back">
                      <img src="@/assets/images/headportrait.png">
                    </div>
                    <div class="portrait-user">
                      用户名：zkdf
                    </div>
                  </div>
                  <div class="user-info">
                    <div class="balance">
                      <img src="@/assets/images/pointed.png">
                      <span>账户余额：1000</span>
                    </div>
                    <div class="grade">
                      <img src="@/assets/images/pointed.png" class="mar-lm">
                      <span>等级：V1</span>
                    </div>
                  </div>
                  <div class="user-info2">
                    <div class="company">
                      <img src="@/assets/images/pointed.png">
                      <span>单位：中石油</span>
                    </div>
                    <div class="integral">
                      <img src="@/assets/images/pointed.png" class="mar-lm">
                      <span>积分：5</span>
                    </div>
                  </div>
                </div>
                <div class="order-status">
                  <div class="order-status-header">
                    订单状态
                  </div>
                  <div class="order-status-bottom">
                    <div class="order-status-item pointer">
                      <img src="@/assets/images/payment.png">
                      <span>待付款</span>
                    </div>
                    <div class="order-status-item pointer">
                      <img src="@/assets/images/received.png">
                      <span>待收货</span>
                    </div>
                    <div class="order-status-item pointer">
                      <img src="@/assets/images/evaluated.png">
                      <span>待评价</span>
                    </div>
                  </div>
                </div>
                <div class="personal-shortcut">
                  <div class="order-status-header">
                    个人快捷
                  </div>
                  <div class="order-status-bottom">
                    <div class="personal-shortcut-item pointer">
                      <img src="@/assets/images/Favorites.png">
                      <span>收藏夹</span>
                    </div>
                    <div class="personal-shortcut-item pointer">
                      <img src="@/assets/images/footprints.png">
                      <span>浏览足迹</span>
                    </div>
                    <div class="personal-shortcut-item pointer">
                      <img src="@/assets/images/account.png">
                      <span>账户充值</span>
                    </div>
                  </div>
                  <div class="order-status-bottom">
                    <div class="personal-shortcut-item pointer">
                      <img src="@/assets/images/service.png">
                      <span>专属客服</span>
                    </div>
                    <div class="personal-shortcut-item pointer">
                      <img src="@/assets/images/message.png">
                      <span>消息中心</span>
                    </div>
                    <div class="personal-shortcut-item pointer">
                      <img src="@/assets/images/expect.png">
                      <span>期待更多</span>
                    </div>
                  </div>
                </div>
                <div class="welfare-consultation">
                  <div class="welfare-consultation-header">
                    <span>福利咨询</span>
                    <a href="#">查看更多></a>
                  </div>
                  <div class="welfare-consultation-item mar-bw">
                    <div class="welfare-consultation-item-left">
                      HOT
                    </div>
                    <div class="welfare-consultation-item-right">
                      好货优选
                    </div>
                  </div>
                  <div class="welfare-consultation-item mar-bw">
                    <div class="welfare-consultation-item-back">
                      福利
                    </div>
                    <div class="welfare-consultation-item-right">
                      好货优选
                    </div>
                  </div>
                  <div class="welfare-consultation-item mar-bw">
                    <div class="welfare-consultation-item-backs">
                      咨询
                    </div>
                    <div class="welfare-consultation-item-right">
                      好货优选
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 轮播图 end-->
        
        <!-- 轮播图 -->
        <div class="aside-right" v-if="isAside == 1">
          <div class="aside-planting2">
            <div class="planting2 mar-lm">
              <planting :salesperson="salesperson"></planting>
            </div>
            <div class="planting-right2">
              <div class="planting-img-top mar-bm pointer">
                <div class="Mask"></div>
                <img src="@/assets/images/irobot.png">
              </div>
              <div class="planting-img-bottom mar-bm pointer">
                <div class="Mask"></div>
                <img src="@/assets/images/pirbot.png">
              </div>
            </div>
          </div>
          <div class="planting-bottom">
            <div class="planting-bottom-left mar-lm pointer">
              <div class="planting-mask"></div>
              <img src="@/assets/images/smallimg.png">
            </div>
            <div class="planting-bottom-left mar-lm pointer">
              <div class="planting-mask"></div>
              <img src="@/assets/images/smallimg.png">
            </div>
            <div class="planting-img-bottom mar-lm pointer">
              <div class="Mask"></div>
              <img src="@/assets/images/pirbot.png">
            </div>
          </div>
        </div>
        <!-- 轮播图 end-->
      </div>
      <!-- 列表选择 --> 
      <!-- <div class="list" @mousemove="mouseEnter2" @mouseout="mouseLeave2">
        
      </div> -->
      <!-- 列表选择 end-->
      <!-- 侧导航&轮播 end-->
      <!-- 全屏轮播 -->
      <div class="rotation" v-if="isAside == 3">
        <div class="screen-rotation">
          <screen-sotation></screen-sotation>
        </div>
      </div>
      <!-- 全屏轮播 end-->
      <!-- 品类品牌活动区 -->
      <div class="activity">
        <div class="category">品类/品牌活动区</div>
        <div class="categoryimg">
          <brand-planting :brand="brand"></brand-planting>
        </div>
      </div>
      <!-- 品类品牌活动区 end-->
      <!-- 秒杀 -->
      <!-- <div class="content-spike">
        <div class="CountDown">
          <img src="@/assets/images/spike.png">
          <div class="ticking">
            <div class="ticking-frame">12</div>
            <div class="ticking-colon">:</div>
            <div class="ticking-frame">12</div>
            <div class="ticking-colon">:</div>
            <div class="ticking-frame">12</div>
          </div>
        </div>
        <div class="commodity">
          <img src="@/assets/images/flower.png">
          <div class="commodityInfo">
            <span>哈顶顶顶顶顶顶顶顶大大大大大大顶顶顶顶顶顶顶顶顶顶顶</span>
          </div>
          <div class="original-price">
            <span class="price">原价:￥97.00</span>
          </div>
          <div class="present-price">
            <span>秒杀价:<span class="present-cost">￥56.00</span></span>
          </div>
        </div>
        <div class="commodity">
          <img src="@/assets/images/flower.png">
          <div class="commodityInfo">
            <span>哈顶顶顶顶顶顶顶顶大大大大大大顶顶顶顶顶顶顶顶顶顶顶</span>
          </div>
          <div class="original-price">
            <span class="price">原价:￥97.00</span>
          </div>
          <div class="present-price">
            <span>秒杀价:<span class="present-cost">￥56.00</span></span>
          </div>
        </div>
        <div class="commodity">
          <img src="@/assets/images/flower.png">
          <div class="commodityInfo">
            <span>哈顶顶顶顶顶顶顶顶大大大大大大顶顶顶顶顶顶顶顶顶顶顶</span>
          </div>
          <div class="original-price">
            <span class="price">原价:￥97.00</span>
          </div>
          <div class="present-price">
            <span>秒杀价:<span class="present-cost">￥56.00</span></span>
          </div>
        </div>
        <div class="commodity">
          <img src="@/assets/images/flower.png">
          <div class="commodityInfo">
            <span>哈顶顶顶顶顶顶顶顶大大大大大大顶顶顶顶顶顶顶顶顶顶顶</span>
          </div>
          <div class="original-price">
            <span class="price">原价:￥97.00</span>
          </div>
          <div class="present-price">
            <span>秒杀价:<span class="present-cost">￥56.00</span></span>
          </div>
        </div>
      </div> -->
      <!-- 秒杀end -->
      <!-- 单品热卖 -->
      <div class="single-product">
        <div class="single-product-item" v-for="(item,index) in ItemDelta" :key="index">
          <div class="single-product-header pat-lm">
            <span class="mar-lw">{{item.recommend.name}}</span>
            <img src="@/assets/images/rightarrow.png" class="pointer">
            <span>专属你的购物指南</span>
          </div>
          <div class="sub-product pointer">
            <a :href="item.goods_list[0].url">
              <img :src="item.goods_list[0].goods_pic">
            </a>
          </div>
          <div class="sub-product-bottom mar-tw pointer">
            <a :href="item.goods_list[1].url">
              <img :src="item.goods_list[1].goods_pic">
            </a>
            <a :href="item.goods_list[2].url">
              <img :src="item.goods_list[2].goods_pic">
            </a>
          </div>
        </div>
        <div class="single-product-center" v-for="(items,indexs) in handset" :key="'in'+indexs">
          <div class="single-product-header">
            <span>{{items.recommend.name}}</span>
            <img src="@/assets/images/rightarrow.png" class="pointer">
            <span>专属你的购物指南</span>
          </div>
          <div class="clothes">
            <a :href="items.goods_list[0].url">
              <img :src="items.goods_list[0].goods_pic">
            </a>
          </div>
          <div class="clothesmall">
            <a :href="items.goods_list[1].url">
              <img :src="items.goods_list[1].goods_pic">
            </a>
            <a :href="items.goods_list[2].url">
              <img :src="items.goods_list[2].goods_pic">
            </a>
            <a :href="items.goods_list[3].url">
              <img :src="items.goods_list[3].goods_pic">
            </a>
          </div>
        </div>
        <div class="single-product-right" v-for="(elements,kets) in Celebrity" :key="'ins'+kets">
          <div class="single-product-header">
            <span>{{elements.recommend.name}}</span>
            <img src="@/assets/images/rightarrow.png" class="pointer">
            <span>专属你的购物指南</span>
          </div>
          <div class="watch">
            <a :href="elements.goods_list[0].url">
              <img :src="elements.goods_list[0].goods_pic" class="single-watch">
            </a>
            <a :href="elements.goods_list[1].url">
              <img :src="elements.goods_list[1].goods_pic" class="mar-tm">
            </a>
          </div>
        </div>
      </div>
      <!-- 单品热卖 end-->
      <!-- 母婴个护 -->
      <div v-for="(item, index) in floorArrOne" :key="index">
        <div class="mother-care">
          <div class="personal-care">
            {{item.title}}
          </div>
          <div class="search-words">
            <ul class="clearfix">
              <li>热搜词：</li>
              <li v-for="(element, key) in item.word_key" :key="key">
                <a :href='element.url'>
                  {{element.name}}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="child-care">
          <div class="child-care-left">
            <div class="feeding">
              <div class="feeding-banner" v-for="(each, suffix) in item.data_list.small_banner" :key="suffix">
                <a :href="each.url">
                  <img :src="each.image_url">
                </a>
              </div>
            </div>
            <!-- <div class="squared"> -->
            <div class="squared-child">
              <div class="squared-child-item" v-for="(itemsList, subscripts) in item.data_list.brand_list" :key="subscripts">
                <!-- <a :href="itemsList.url"> -->
                  <img :src="itemsList.brand_pic">
                <!-- </a> -->
              </div>
            </div>
          </div>
          <div class="child-care-right">
            <div class="mother-commodity">
              <div class="mother-commodity-item" v-for="(ItemName, indexes) in item.data_list.product_list" :key="indexes" @mousemove="maskEnter(indexes)" @mouseout="maskLeave(indexes)">
                <div class="commodityImg">
                  <a :href="ItemName.url">
                    <img :src="ItemName.goods_pic">
                  </a>
                </div>
                <div class="commodity-info commodityInfos" :class="{itemHover:isItemHover==indexes}">
                  <div class="commodity-introduce">
                    {{ItemName.goods_name}}
                  </div>
                  <div style="line-height: 25px;">
                    <span class="price">市场价:￥{{ItemName.market_price}}</span>
                  </div>
                  <div class="price-cart">
                    <div class="price-cart2">￥{{ItemName.goods_price}}</div>
                    <div class="pointer shapp" @mousemove="shappingEnter(indexes)" @mouseout="shappingLeave(indexes)">
                      <img src="@/assets/images/cart.png" v-if="isCart==indexes?false:true" class="isCart">
                      <div v-if="isShapp==indexes" @mousemove="shappingEnter(indexes)" @mouseout="shappingLeave" class="showCart" @click="purchase(ItemName.url)">
                        <img src="@/assets/images/cart.png" class="mar-rn">
                        立即购买
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 母婴个护 end-->
      <!-- 美妆达人 -->
      <div v-for="(item, index) in floorArrTwo" :key="'info1-'+index">
        <div class="mother-care">
          <div class="personal-care">
            {{item.title}}
          </div>
          <div class="search-words">
            <ul class="clearfix">
              <li>热搜词：</li>
              <li v-for="(element, key) in item.word_key" :key="key">
                <a :href='element.url'>
                  {{element.name}}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="makeup">
          <div class="makeup-left">
            <a :href="item.data_list.left.url">
              <img :src="item.data_list.left.img_url">
            </a>
          </div>
          <div class="makeup-right">
            <div class="makeup-right-item color-one">
              <div class="make-word">
                <div class="make-word-one">
                  香水专区
                </div>
                <div class="make-word-two">
                  做精致的自己
                </div>
              </div>
              <div class="make-img">
                <a :href="item.data_list.right[0].url">
                  <img :src="item.data_list.right[0].img_url">
                </a>
              </div>
            </div>
            <div class="makeup-right-item color-two">
              <div class="make-word">
                <div class="make-word-one make-word-one-color">
                  洗护专区
                </div>
                <div class="make-word-two">
                  爱生活 更要爱自己
                </div>
              </div>
              <div class="make-img2">
                <a :href="item.data_list.right[1].url">
                  <img :src="item.data_list.right[1].img_url">
                </a>
              </div>
            </div>
            <div class="makeup-right-item color-three">
              <div class="make-word">
                <div class="make-word-one make-word-two-color">
                  护肤专区
                </div>
                <div class="make-word-two">
                  婴儿般的肌肤
                </div>
              </div>
              <div class="make-img">
                <a :href="item.data_list.right[2].url">
                  <img :src="item.data_list.right[2].img_url">
                </a>
              </div>
            </div>
            <div class="makeup-right-item color-four">
              <div class="make-word">
                <div class="make-word-one make-word-three-color">
                  彩妆专区
                </div>
                <div class="make-word-two">
                  让自己一直美下去
                </div>
              </div>
              <div class="make-img">
                <a :href="item.data_list.right[3].img_url">
                  <img :src="item.data_list.right[3].img_url">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 美妆达人end -->
      <!-- 热卖品牌 -->
      <div class="sellers" v-for="(item, index) in floorArrThree" :key="'info2-'+index">
        <div class="sellers-header">
          {{item.title}}
        </div>
        <div class="sellers-content">
          <div class="sellers-item" v-for="(element, key) in item.data_list" :key="key">
            <!-- <a :href="element.url"> -->
              <img :src="element.brand_pic">
            <!-- </a> -->
          </div>
        </div>
      </div>
      <!-- 热卖品牌end -->
      <!-- 服饰鞋包 -->
      <div v-for="(item, index) in floorArrFour" :key="'info3-'+index">
        <div class="mother-care">
          <div class="personal-care">
            {{item.title}}
          </div>
          <div class="search-words">
            <ul class="clearfix">
              <li>热搜词：</li>
              <li v-for="(element, key) in item.word_key" :key="key">
                <a :href='element.url'>
                  {{element.name}}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="Clothes">
          <div class="Clothes-left">
            <div class="Clothes-word">
              潮流风向标
            </div>
            <div class="Clothes-word2">
              极致潮流尽享时尚
            </div>
            <div class="Clothes-img">
              <img :src="item.data_list.left.bg_img">
            </div>
            <div class="Clothes-bottom">
              <div class="Clothes-all clearfix">
                <div class="Clothes-content">
                  <div class="Clothes-bottom-item mar-rm mar-bm" v-for="(element, key) in item.data_list.left.cate_list" :key="key">
                    <a :href="element.url">
                      {{element.text}}
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="Clothes-all">
                <div class="Clothes-bottom-item mar-rm">
                  精品女装
                </div>
                <div class="Clothes-bottom-item">
                  精品女装
                </div>
              </div>
              <div class="Clothes-all">
                <div class="Clothes-bottom-item mar-rm">
                  精品女装
                </div>
                <div class="Clothes-bottom-item">
                  精品女装
                </div>
              </div> -->
            </div>
          </div>
          <div class="Clothes-right">
            <div class="Clothes-right-item" v-for="(elements, keys) in FourchildOne" :key="'info6-'+keys">
              <div class="Clothes-right-word">
                
              </div>
              <div class="Clothes-right-word2">
                {{elements.goods_name}}
              </div>
              <div class="Clothes-right-img">
                <a :href="elements.url">
                  <img :src="elements.goods_pic">
                </a>
              </div>
            </div>
            <div class="Clothes-right-item" v-for="(items, indexs) in FourchildTwo" :key="'info7-'+indexs">
              <div class="Clothes-commodity">
                <a :href="items.url">
                  <img :src="items.goods_pic">
                </a>
              </div>
              <div class="Clothes-commodity-word">
                {{items.goods_name}}
              </div>
              <div class="Clothes-commodity-word2">
                ￥：{{items.goods_price}}
              </div>
            </div>

            
            <div class="Clothes-right-item" v-for="(elements, keys) in FourchildThree" :key="'info8-'+keys">
              <div class="Clothes-right-word">
                
              </div>
              <div class="Clothes-right-word2">
                {{elements.goods_name}}
              </div>
              <div class="Clothes-right-img">
                <a :href="elements.url">
                  <img :src="elements.goods_pic">
                </a>
              </div>
            </div>
            <div class="Clothes-right-item" v-for="(items, indexs) in FourchildFour" :key="'info9-'+indexs">
              <div class="Clothes-commodity">
                <a :href="items.url">
                  <img :src="items.goods_pic">
                </a>
              </div>
              <div class="Clothes-commodity-word">
                {{items.goods_name}}
              </div>
              <div class="Clothes-commodity-word2">
                ￥：{{items.goods_price}}
              </div>
            </div>

            <!-- <div class="Clothes-right-item">
              <div class="Clothes-right-word">
                
              </div>
              <div class="Clothes-right-word2">
                夏日炎炎 秀出你的好身材
              </div>
              <div class="Clothes-right-img">
                <img src="@/assets/images/short.jpg">
              </div>
            </div>
            <div class="Clothes-right-item">
              <div class="Clothes-right-word">
                气质短裙
              </div>
              <div class="Clothes-right-word2">
                夏日炎炎 秀出你的好身材
              </div>
              <div class="Clothes-right-img">
                <img src="@/assets/images/short.jpg">
              </div>
            </div>
            <div class="Clothes-right-item">
              <div class="Clothes-commodity">
                <img src="@/assets/images/peplo.jpg">
              </div>
              <div class="Clothes-commodity-word">
                天梭魅时系列皮带石英女表
              </div>
              <div class="Clothes-commodity-word2">
                ￥ ：1700.00
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <!-- 服饰鞋包end -->
      <!-- 数码家电 -->
      <!-- <div class="mother-care">
        <div class="personal-care">
          数码家电
        </div>
        <div class="search-words">
          <ul class="clearfix">
            <li>热搜词：</li>
            <li><a href="#">电动牙刷</a></li>
            <li><a href="#">耳机</a></li>
            <li><a href="#">钢笔</a></li>
            <li><a href="#">手机</a></li>
            <li><a href="#">吹风机</a></li>
            <li><a href="#">剃须刀</a></li>
          </ul>
        </div>
      </div> -->
      <!-- 数码家电 end-->
      <!-- 服装配饰 -->
      <!-- <div class="mother-care">
        <div class="personal-care">
          服装配饰
        </div>
        <div class="search-words">
          <ul class="clearfix">
            <li>热搜词：</li>
            <li><a href="#">电动牙刷</a></li>
            <li><a href="#">耳机</a></li>
            <li><a href="#">钢笔</a></li>
            <li><a href="#">手机</a></li>
            <li><a href="#">吹风机</a></li>
            <li><a href="#">剃须刀</a></li>
          </ul>
        </div>
      </div> -->
      <!-- 服装配饰 end-->
      <!-- 食品生鲜 -->
      <!-- <div class="mother-care">
        <div class="personal-care">
          食品生鲜
        </div>
        <div class="search-words">
          <ul class="clearfix">
            <li>热搜词：</li>
            <li><a href="#">电动牙刷</a></li>
            <li><a href="#">耳机</a></li>
            <li><a href="#">钢笔</a></li>
            <li><a href="#">手机</a></li>
            <li><a href="#">吹风机</a></li>
            <li><a href="#">剃须刀</a></li>
          </ul>
        </div>
      </div> -->
      <!-- 食品生鲜 end-->
      <!-- 汽车用品 -->
      <!-- <div class="mother-care">
        <div class="personal-care">
          汽车用品
        </div>
        <div class="search-words">
          <ul class="clearfix">
            <li>热搜词：</li>
            <li><a href="#">电动牙刷</a></li>
            <li><a href="#">耳机</a></li>
            <li><a href="#">钢笔</a></li>
            <li><a href="#">手机</a></li>
            <li><a href="#">吹风机</a></li>
            <li><a href="#">剃须刀</a></li>
          </ul>
        </div>
      </div> -->
      <!-- 汽车用品 end-->
      <!-- 特色推荐 -->
      <!-- <div class="Featured">
        <div class="Featured-left">
          <div class="Featured-left-item"></div>
        </div>
        <div class="Featured-center">
          特色推荐
        </div>
        <div class="Featured-right">
          <div class="Featured-right-item"></div>
        </div>
      </div> -->
      <!-- 特色推荐 end-->
      <!-- 已经到底啦 -->
      <div class="Featured2">
        <div class="Featured-left2">
          <div class="Featured-left-item2"></div>
        </div>
        <div class="Featured-center2">
          已经到底啦
        </div>
        <div class="Featured-right2">
          <div class="Featured-right-item2"></div>
        </div>
      </div>
      <!-- 已经到底啦 end-->
    </div>
    <!-- 内容 end-->
    <!-- 底部 -->
    <footer-view></footer-view>
    <!-- 底部 end-->
    <!-- 购物车侧边 -->
    <div class="siedCart" v-if="isSideCart">
      <div class="siedCart-header">
        <div class="siedCartImg">
          <img src="@/assets/images/writeSiedCart.png" alt="">
        </div>
        <div>
          我的购物车
        </div>
        <div class="closeSideCart pointer" @click="SideCart">
          <img src="@/assets/images/closeSideCart.png" alt="">
        </div>
      </div>
      <div class="siedCart-content" v-for="(item, index) in shopCartArr" :key="index">
        <!-- <div v-if="item.cart_goods_num == 0">123</div> -->
        <div class="siedCart-content-item" v-for="(elements, keys) in item.list" :key="keys">
          <div class="siedCart-content-item-img">
            <img :src="elements.goods_image" alt="">
          </div>
          <div class="siedCart-content-item-word">
            <div class="Introduce">
              <span class="Introduce-title">
                <a :href="elements.goods_url" :title="elements.goods_name">
                  {{elements.goods_name}}
                </a>
              </span>
              <div class="Introduce-word">
                <span class="Introduce-word-price">{{elements.goods_price}}</span>
                <span class="Introduce-word-del pointer" @click="IntroduceDel(elements.cart_id)">删除</span>
              </div>
            </div>
          </div>
        </div>
        <div class="siedCart-content-item-bottom">
          <div class="siedCart-content-item-bottom-left">
            <p>
              <span class="siedCart-color">{{item.cart_goods_num}}</span> 件商品
            </p>
            <p class="siedCart-weight">
              共计：<span class="siedCart-color"> {{item.cart_all_price}}</span>
            </p>
          </div>
          <div class="siedCart-content-item-bottom-right">去购物车结算</div>
        </div>
      </div>
    </div>
    <!-- 购物车侧边end -->
  </div>
</template>

<script>
import WheelPlanting from "./WheelPlanting.vue";
import planting from "./planting.vue";
import ScreenSotation from "./ScreenSotation.vue";
import brandPlanting from "./brandPlanting.vue";
import footerView from "../../components/footer/footer.vue";
import global from "../../assets/js/config.js";
import localhost from "../../api/apiUrl.js";
var serivce,self;
export default {
  components: {
    WheelPlanting,
    planting,
    ScreenSotation,
    footerView,
    brandPlanting
  },
  data() {
    return {
      close: true, //默认显示
      arr: [
        "<a href='#' id='colors'>家用电器</a>",
        "<a href='#'>手机/</a><a href='#'>运营商/</a><a href='#'>数码</a>",
        "<a href='#'>电脑/</a><a href='#'>办公</a>",
        "<a href='#'>家居/</a><a href='#'>家具/</a><a href='#'>假装出局</a>",
        "<a href='#'>男装/</a><a href='#'>女装/</a><a href='#'>童装/</a><a href='#'>内衣</a>",
        "<a href='#'>美妆/</a><a href='#'>个户情节/</a><a href='#'>宠物</a>",
        "<a href='#'>女鞋/</a><a href='#'>箱包/</a><a href='#'>钟表/</a><a href='#'>珠宝</a>",
        "<a href='#'>男鞋/</a><a href='#'>运动/</a><a href='#'>户外</a>",
        "<a href='#'>房产/</a><a href='#'>汽车/</a><a href='#'>汽车用品</a>",
        "<a href='#'>母婴/</a><a href='#'>玩具乐器</a>",
        "<a href='#'>食品/</a><a href='#'>酒类/</a><a href='#'>生产/</a><a href='#'>特产</a>",
        "<a href='#'>家居/</a><a href='#'>家具/</a><a href='#'>假装出局</a>",
        "<a href='#'>男装/</a><a href='#'>女装/</a><a href='#'>童装/</a><a href='#'>内衣</a>",
        "<a href='#'>美妆/</a><a href='#'>个户情节/</a><a href='#'>宠物</a>",
        "<a href='#'>女鞋/</a><a href='#'>箱包/</a><a href='#'>钟表/</a><a href='#'>珠宝</a>",
        "<a href='#'>男鞋/</a><a href='#'>运动/</a><a href='#'>户外</a>",
        "<a href='#'>房产/</a><a href='#'>汽车/</a><a href='#'>汽车用品</a>",
        "<a href='#'>母婴/</a><a href='#'>玩具乐器</a>",
        "<a href='#'>食品/</a><a href='#'>酒类/</a><a href='#'>生产/</a><a href='#'>特产</a>"
      ], //模拟数据
      itemHoverIndex: null, //选中每一项的下标
      listShow: false, //列表隐藏
      brandFold: true, //下拉图标显示隐藏
      isOpen: true, //是否加载更多列表
      //categories: true  , //全部分类
      isRotation: false, //隐藏全屏轮播
      isAside: 1, //左侧导航和轮播显示隐藏
      isCategories: global.topMenu,//顶部导航显示隐藏
      isShopping: false, //购物车提示
      isSideCart: false, //右侧购物车
      btnFlag: false, //返回顶部
      isShapp: null,
      isCart: null,
      mother: '国际大牌母婴用品',
      isItemHover: null,
      isFloor: global.floor,
      isApplication: false,
      isApplication2: false,
      isApplication3: false,
      isApplication4: false,
      isApplication5: false,
      //楼层数组
      floorArrOne: [],
      floorArrTwo: [],
      floorArrThree: [],
      floorArrFour: [],
      FourchildOne: [],
      FourchildTwo: [],
      FourchildThree: [],
      FourchildFour: [],
      //分类数组
      classification: [],
      recommend: [],
      secondary: [],
      //广告图和banner
      salesperson: [],
      brand: [],
      ItemDelta: [], //单品热卖
      handset: [], //买手推荐
      Celebrity: [], //网红同款
      //购物车数据
      shopCartArr: [],
      //搜索关键字
      searchVal: ''
    };
  },
  created() {},
  mounted() {
    serivce = this.$service;
    self = this;
    var heightCss = window.getComputedStyle(self.$refs.aside).height;
    var heightCss2 = window.getComputedStyle(self.$refs.aside1).height;
    if (heightCss > heightCss2) {
      self.$refs.aside1.style.overflow = "hidden";
    } else {
      self.isOpen = false;
      self.$refs.allCategories.style.background = 'white'
      self.$refs.aside1.style.height = 600 + "px";
    };
    if(global.Bg == 1) {
      self.isAside = 1;
    }else if(global.Bg == 2) {
      self.isAside = 2
    }else if(global.Bg == 3) {
      self.isAside = 3
    };
    window.addEventListener('scroll', self.scrollToTop);
    //请求楼层信息
    serivce.get(localhost.floorApi, {}, function(res) {
      if(res.code) {
        var myData = res.jsonResult;
        myData.forEach(item => {
          if(item.type == 1) {
            self.floorArrOne.push(item);
          }else if(item.type == 2) {
            self.floorArrTwo.push(item);
          }else if(item.type == 3) {
            self.floorArrThree.push(item);
          }else if(item.type == 4) {
            self.floorArrFour.push(item);
          };
        });
        // console.log(self.floorArrOne);
        self.FourchildOne.push(self.floorArrFour[0].data_list.right[0],self.floorArrFour[0].data_list.right[1]);

        self.FourchildTwo.push(self.floorArrFour[0].data_list.right[2]);

        self.FourchildThree.push(self.floorArrFour[0].data_list.right[3],self.floorArrFour[0].data_list.right[4]);

        self.FourchildFour.push(self.floorArrFour[0].data_list.right[5]);

        // console.log(self.floorArrFour[0].data_list.right);
      }else {
        alert(res.msg);
      }
    });
    //请求分类
    serivce.get(localhost.classifyApi, {}, function(res) {
      if(res.code) {
        self.classification = res.jsonResult.list;
      }else{
        alert(res.msg);
      }
    });
    //广告
    serivce.get(localhost.advertApi, {}, function(res) {
      if(res.code) {
        self.salesperson = res.jsonResult.screen_list; //banner
        self.brand = res.jsonResult.focus_list; //品牌
        self.ItemDelta.push(res.jsonResult.sale_list.code_info[0]); //单品热卖
        self.handset.push(res.jsonResult.sale_list.code_info[1]); //单品热卖
        self.Celebrity.push(res.jsonResult.sale_list.code_info[2]); //网红同款
        // console.log(self.Celebrity);
      }else{
        alert(res.msg);
      }
    });
    //购物车
    serivce.get(localhost.shoppingApi, {}, function(res) {
      if(res.code) {
        var myData = res.jsonResult;
        self.shopCartArr.push(myData);
        // console.log(myData);
      }else{
        alert(res.msg);
      }
    });
    // setTimeout(() => {
    //   console.log(document.querySelectorAll('.twlist a'));
    // }, 1000);
  },
  filters: {
    newWord(val) {
      var w = val.substring(0,val.length - 1);
      console.log(w);
    }
  },
  methods: {
    //关闭广告
    advertClose() {
      self.close = false;
    },
    //侧导航鼠标移入
    mouseEnter(index) {
      self.listShow = true;
      self.recommend = self.classification[index].recommendclass;
      self.secondary = self.classification[index].children;
      // console.log(self.secondary);
    },
    //侧导航鼠标移除
    mouseLeave() {
      self.listShow = false;
    },
    //侧导航鼠标移入
    mouseEnter2() {
      self.listShow = true;
    },
    //侧导航鼠标移除
    mouseLeave2() {
      self.listShow = false;
    },
    openAside() {
      self.brandFold = !self.brandFold;
      var heightCss = window.getComputedStyle(self.$refs.aside).height;
      if (!self.brandFold) {
        self.$refs.aside1.style.height = heightCss;
        self.isOpen = false;
        self.$refs.allCategories.style.background = 'white'
      } else {
        self.$refs.aside1.style.height = 480 + "px";
      }
    },
    //切换轮播图
    operationWheel() {
      self.isRotation = !self.isRotation;
      self.isAside = !self.isAside;
    },
    //搜索框的placeholder
    motherFocus() {
      self.mother = '';
    },
    motherBlur() {
      self.mother = '国际大牌母婴用品';
    },
    //搜索
    search() {
      // console.log(`http://www.helibuy.cn/mall/index.php?app=search&a=index&keyword=${this.searchVal}`);
      window.location.href = `http://www.helibuy.cn/mall/index.php?app=search&a=index&keyword=${this.searchVal}`
    },
    //删除购物车信息
    IntroduceDel(id) {
      serivce.get(localhost.delShopping, { cart_id: id }, function(res) {
        console.log(res);
      });
    },
    //购物车提示
    shoppingMove() {
      self.isShopping = true;
    },
    shoppingOut() {
      self.isShopping = false;
    },
    //侧边栏
    application() {
      self.isApplication = true;
    },
    applicationOut() {
      self.isApplication = false;
    },
    application2() {
      self.isApplication2 = true;
    },
    applicationOut2() {
      self.isApplication2 = false;
    },
    application3() {
      self.isApplication3 = true;
    },
    applicationOut3() {
      self.isApplication3 = false;
    },
    application4() {
      self.isApplication4 = true;
    },
    applicationOut4() {
      self.isApplication4 = false;
    },
    application5() {
      self.isApplication5 = true;
    },
    applicationOut5() {
      self.isApplication5 = false;
    },
    //返回顶部
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    },
    //加入购物车
    shappingEnter(index) {
      self.isShapp = index;
      self.isCart = index;
    },
    shappingLeave() {
      self.isShapp = null;
      self.isCart = null;
    },
    purchase(url) {
      window.location.href = url;
    },
    //商品展示详情
    maskEnter(index) {
      // document.querySelector('.commodityInfos').style.bottom = 0 + 'px';
      // document.querySelector('.commodityImg').style.opacity = 0.7;
      self.isItemHover = index;
    },
    maskLeave() {
      self.isItemHover = null;
    },
    //右边购物车
    SideCart() {
      self.isSideCart = !self.isSideCart;
      if(self.isSideCart) {
        document.querySelector('.application').style.right = 234 + 'px'
      }else{
        document.querySelector('.application').style.right = 0 + 'px'
      }
    },
    // tyu() {
    //   window.open('#/details', '_blank');
    // }
  },
  destroyed () {
    window.removeEventListener('scroll', self.scrollToTop)
  }
};
</script>

<style scoped>
@import "../../assets/css/HomePage.css";
</style>
