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
          <div class="triangle_border_right">
              <span></span>
          </div>
        </div>
        <div class="application-item pointer" @mousemove="application" @mouseout="applicationOut">
          <img src="@/assets/images/sideMsg.png">
        </div>
        <div class="application-info2" v-if="isApplication2" @mousemove="application2" @mouseout="applicationOut2">
          购物车
          <div class="triangle_border_right">
            <span></span>
          </div>
        </div>
        <div class="application-item pointer" @mousemove="application2" @mouseout="applicationOut2" @click="SideCart">
          <img src="@/assets/images/sideCar.png">
        </div>
        <div class="application-info3" v-if="isApplication3" @mousemove="application3" @mouseout="applicationOut3">
          浏览足迹
          <div class="triangle_border_right">
            <span></span>
          </div>
        </div>
        <div class="application-item pointer" @mousemove="application3" @mouseout="applicationOut3">
          <img src="@/assets/images/sideFoot.png">
        </div>
        <div class="application-info4" v-if="isApplication4" @mousemove="application4" @mouseout="applicationOut4">
          联系客服
          <div class="triangle_border_right">
            <span></span>
          </div>
        </div>
        <div class="application-item pointer" @mousemove="application4" @mouseout="applicationOut4">
          <img src="@/assets/images/sideCustomer.png">
        </div>
        <div class="application-info5" v-if="isApplication5" @mousemove="application5" @mouseout="applicationOut5">
          问题反馈
          <div class="triangle_border_right">
            <span></span>
          </div>
        </div>
        <div class="application-item pointer" @mousemove="application5" @mouseout="applicationOut5">
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
            <input type="text" :placeholder="mother" @focus="motherFocus" @blur="motherBlur">
            <img src="@/assets/images/search.png">
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
        <div class="ShoppingCart" @mousemove="shoppingMove" @mouseout="shoppingOut">
          <img src="@/assets/images/shoppingCart.png">
          <span>购物车</span>
          <div class="infoNumber">1</div>
        </div>
        <div class="ShoppingCart-position" v-if="isShopping">
          购物车中没有商品，赶快去选购！
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
            <!-- <li v-for="(item, index) in arr" :key="index" :class="{itemHover:itemHoverIndex==index}" @mousemove="mouseEnter(index)" @mouseout="mouseLeave"> -->
            <!-- <div v-html="item"></div> -->
            <!-- </li> -->
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">家用电器</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
            <li @mousemove="mouseEnter" @mouseout="mouseLeave">
              <a href="#">手机/</a>
              <a href="#">运营商/</a>
              <a href="#">数码/</a>
            </li>
          </ul>
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
              <planting></planting>
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
      <div class="list" v-if="listShow" @mousemove="mouseEnter" @mouseout="mouseLeave">
        <div class="list-select">
          <div class="list-select-left">
            <div class="list-header">
              <span>玩3C ></span>
              <span>手机频道 ></span>
              <span>网上营业厅 ></span>
              <span>配件选购中心 ></span>
              <span>智能数码 ></span>
              <span>影视club ></span>
            </div>
            <div class="lists">
              <span>手机通讯 ></span>
              <span>手机</span>
              <span>游戏手机</span>
              <span>老人机</span>
              <span>对讲机</span>
              <span>以旧换新</span>
              <span>手机维修</span>
            </div>
            <div class="lists">
              <span>手机通讯 ></span>
              <span>手机</span>
              <span>游戏手机</span>
              <span>老人机</span>
              <span>对讲机</span>
              <span>以旧换新</span>
              <span>手机维修</span>
              <span>以旧换新</span>
              <span>手机维修</span>
              <span>以旧换新</span>
              <span>手机维修</span>
            </div>
            <div class="lists">
              <span>手机通讯 ></span>
              <span>手机</span>
              <span>游戏手机</span>
              <span>老人机</span>
              <span>对讲机</span>
              <span>以旧换新</span>
              <span>手机维修</span>
            </div>
            <div class="lists">
              <span>手机通讯 ></span>
              <span>手机</span>
              <span>游戏手机</span>
              <span>老人机</span>
              <span>对讲机</span>
              <span>以旧换新</span>
              <span>手机维修</span>
            </div>
            <div class="lists">
              <span>手机通讯 ></span>
              <span>手机</span>
              <span>游戏手机</span>
              <span>老人机</span>
              <span>对讲机</span>
              <span>以旧换新</span>
              <span>手机维修</span>
            </div>
          </div>
          <div class="list-select-right"></div>
        </div>
      </div>
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
          <brand-planting></brand-planting>
        </div>
      </div>
      <!-- 品类品牌活动区 end-->
      <!-- 秒杀 -->
      <div class="content-spike">
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
      </div>
      <!-- 秒杀end -->
      <!-- 单品热卖 -->
      <div class="single-product">
        <div class="single-product-item">
          <div class="single-product-header pat-lm">
            <span class="mar-lw">单品热卖</span>
            <img src="@/assets/images/rightarrow.png" class="pointer">
            <span>专属你的购物指南</span>
          </div>
          <div class="sub-product pointer">
            <img src="@/assets/images/bestimg.png">
          </div>
          <div class="sub-product-bottom mar-tw pointer">
            <img src="@/assets/images/sellers.png">
            <img src="@/assets/images/sellers.png">
          </div>
        </div>
        <div class="single-product-center">
          <div class="single-product-header">
            <span>买手推荐</span>
            <img src="@/assets/images/rightarrow.png" class="pointer">
            <span>专属你的购物指南</span>
          </div>
          <div class="clothes">
            <a href="#">
              <img src="@/assets/images/clothes.png">
            </a>
          </div>
          <div class="clothesmall">
            <a href="#">
              <img src="@/assets/images/clothesmall.png">
            </a>
            <a href="#">
              <img src="@/assets/images/clothesmall.png">
            </a>
            <a href="#">
              <img src="@/assets/images/clothesmall.png">
            </a>
          </div>
        </div>
        <div class="single-product-right">
          <div class="single-product-header">
            <span>网红同款</span>
            <img src="@/assets/images/rightarrow.png" class="pointer">
            <span>专属你的购物指南</span>
          </div>
          <div class="watch">
            <img src="@/assets/images/watch.png" class="single-watch">
            <img src="@/assets/images/watch.png" class="mar-tm">
          </div>
        </div>
      </div>
      <!-- 单品热卖 end-->
      <!-- 母婴个护 -->
      <div class="mother-care">
        <div class="personal-care">
          母婴个护
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
      </div>
      <div class="child-care">
        <div class="child-care-left">
          <div class="feeding">
            <a href="#">
              <img src="@/assets/images/feeding.png">
            </a>
            <a href="#" class="mar-lw">
              <img src="@/assets/images/feeding.png">
            </a>
          </div>
          <!-- <div class="squared"> -->
          <div class="squared-child">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <div class="squared-child2">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <div class="squared-child3">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <div class="child-care-right">
          <div class="mother-commodity">
            <div class="mother-commodity-item" @mousemove="maskEnter" @mouseout="maskLeave">
              <div class="commodityImg">
                <a href="#">
                  <img src="@/assets/images/cup.png">
                </a>
              </div>
              <div class="commodity-info commodityInfos">
                <div class="commodity-introduce">
                  a2 白金婴儿配方奶粉一段 白金配方，营养保证
                </div>
                <div class="price-cart2">￥288</div>
                <div class="price-cart mar-tn">
                  <div class="mar-rw pointer">
                    <img src="@/assets/images/cart.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="mother-commodity-item" @mousemove="maskEnter2" @mouseout="maskLeave2">
              <div class="commodityImg2">
                <a href="#">
                  <img src="@/assets/images/cup.png">
                </a>
              </div>
              <div class="commodity-info commodityInfos2">
                <div class="commodity-introduce">
                  a2 白金婴儿配方奶粉一段 白金配方，营养保证
                </div>
                <div class="price-cart2">￥288</div>
                <div class="price-cart mar-tn">
                  <div class="mar-rw pointer">
                    <img src="@/assets/images/cart.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="mother-commodity-item" @mousemove="maskEnter3" @mouseout="maskLeave3">
              <div class="commodityImg3">
                <a href="#">
                  <img src="@/assets/images/cup.png">
                </a>
              </div>
              <div class="commodity-info commodityInfos3">
                <div class="commodity-introduce">
                  a2 白金婴儿配方奶粉一段 白金配方，营养保证
                </div>
                <div class="price-cart2">￥288</div>
                <div class="price-cart mar-tn">
                  <div class="mar-rw pointer">
                    <img src="@/assets/images/cart.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="mother-commodity-item" @mousemove="maskEnter4" @mouseout="maskLeave4">
              <div class="commodityImg4">
                <a href="#">
                  <img src="@/assets/images/cup.png">
                </a>
              </div>
              <div class="commodity-info commodityInfos4">
                <div class="commodity-introduce">
                  a2 白金婴儿配方奶粉一段 白金配方，营养保证
                </div>
                <div class="price-cart2">￥288</div>
                <div class="price-cart mar-tn">
                  <div class="mar-rw pointer">
                    <img src="@/assets/images/cart.png">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mother-commodity2">
            <div class="mother-commodity-item" @mousemove="maskEnter5" @mouseout="maskLeave5">
              <div class="commodityImg5">
                <a href="#">
                  <img src="@/assets/images/cup.png">
                </a>
              </div>
              <div class="commodity-info commodityInfos5">
                <div class="commodity-introduce">
                  a2 白金婴儿配方奶粉一段 白金配方，营养保证
                </div>
                <div class="price-cart2">￥288</div>
                <div class="price-cart mar-tn">
                  <div class="mar-rw pointer">
                    <img src="@/assets/images/cart.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="mother-commodity-item" @mousemove="maskEnter6" @mouseout="maskLeave6">
              <div class="commodityImg6">
                <a href="#">
                  <img src="@/assets/images/cup.png">
                </a>
              </div>
              <div class="commodity-info commodityInfos6">
                <div class="commodity-introduce">
                  a2 白金婴儿配方奶粉一段 白金配方，营养保证
                </div>
                <div class="price-cart2">￥288</div>
                <div class="price-cart mar-tn">
                  <div class="mar-rw pointer">
                    <img src="@/assets/images/cart.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="mother-commodity-item" @mousemove="maskEnter7" @mouseout="maskLeave7">
              <div class="commodityImg7">
                <a href="#">
                  <img src="@/assets/images/cup.png">
                </a>
              </div>
              <div class="commodity-info commodityInfos7">
                <div class="commodity-introduce">
                  a2 白金婴儿配方奶粉一段 白金配方，营养保证
                </div>
                <div class="price-cart2">￥288</div>
                <div class="price-cart mar-tn">
                  <div class="mar-rw pointer">
                    <img src="@/assets/images/cart.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="mother-commodity-item" @mousemove="maskEnter8" @mouseout="maskLeave8">
              <div class="commodityImg8">
                <a href="#">
                  <img src="@/assets/images/cup.png">
                </a>
              </div>
              <div class="commodity-info commodityInfos8">
                <div class="commodity-introduce">
                  a2 白金婴儿配方奶粉一段 白金配方，营养保证
                </div>
                <div class="price-cart2">￥288</div>
                <div class="price-cart mar-tn">
                  <div class="mar-rw pointer">
                    <img src="@/assets/images/cart.png">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 母婴个护 end-->
      <!-- 数码家电 -->
      <div class="mother-care">
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
      </div>
      <div class="child-care">
        <div class="child-care-left">
          <div class="feeding">
            <a href="#">
              <img src="@/assets/images/feeding.png">
            </a>
            <a href="#" class="mar-lw">
              <img src="@/assets/images/feeding.png">
            </a>
          </div>
          <!-- <div class="squared"> -->
          <div class="squared-child">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <div class="squared-child2">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <div class="squared-child3">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <div class="child-care-right">
          <div class="mother-commodity">
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
          </div>
          <div class="mother-commodity2">
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 数码家电 end-->
      <!-- 服装配饰 -->
      <div class="mother-care">
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
      </div>
      <div class="child-care">
        <div class="child-care-left">
          <div class="feeding">
            <a href="#">
              <img src="@/assets/images/feeding.png">
            </a>
            <a href="#" class="mar-lw">
              <img src="@/assets/images/feeding.png">
            </a>
          </div>
          <!-- <div class="squared"> -->
          <div class="squared-child">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <div class="squared-child2">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <div class="squared-child3">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <div class="child-care-right">
          <div class="mother-commodity">
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
          </div>
          <div class="mother-commodity2">
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 服装配饰 end-->
      <!-- 食品生鲜 -->
      <div class="mother-care">
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
      </div>
      <div class="child-care">
        <div class="child-care-left">
          <div class="feeding">
            <a href="#">
              <img src="@/assets/images/feeding.png">
            </a>
            <a href="#" class="mar-lw">
              <img src="@/assets/images/feeding.png">
            </a>
          </div>
          <!-- <div class="squared"> -->
          <div class="squared-child">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <div class="squared-child2">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <div class="squared-child3">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <div class="child-care-right">
          <div class="mother-commodity">
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
          </div>
          <div class="mother-commodity2">
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 食品生鲜 end-->
      <!-- 汽车用品 -->
      <div class="mother-care">
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
      </div>
      <div class="child-care">
        <div class="child-care-left">
          <div class="feeding">
            <a href="#">
              <img src="@/assets/images/feeding.png">
            </a>
            <a href="#" class="mar-lw">
              <img src="@/assets/images/feeding.png">
            </a>
          </div>
          <!-- <div class="squared"> -->
          <div class="squared-child">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <div class="squared-child2">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <div class="squared-child3">
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
            <div class="squared-child-item">
              <a href="#">
                <img src="@/assets/images/squareditem.png">
              </a>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <div class="child-care-right">
          <div class="mother-commodity">
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
          </div>
          <div class="mother-commodity2">
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
            <div class="mother-commodity-item">
              <a href="#">
                <img src="@/assets/images/cup.png">
              </a>
              <div class="commodity-introduce">
                a2 白金婴儿配方奶粉一段 白金配方，营养保证
              </div>
              <div class="price-cart mar-tn">
                <div>￥288</div>
                <div class="mar-rw pointer">
                  <img src="@/assets/images/cart.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 汽车用品 end-->
      <!-- 特色推荐 -->
      <div class="Featured">
        <div class="Featured-left">
          <div class="Featured-left-item"></div>
        </div>
        <div class="Featured-center">
          特色推荐
        </div>
        <div class="Featured-right">
          <div class="Featured-right-item"></div>
        </div>
      </div>
      <div class="pick-week">
        <div class="pick-week-item">
          <div class="single-product-header pat-lm">
            <span class="mar-lw">品牌特卖</span>
            <span class="pick-sale">品牌限时特卖</span>
          </div>
          <div class="single-product-img">
            <img src="@/assets/images/shoes.png">
          </div>
        </div>
        <div class="pick-week-item">
          <div class="single-product-header pat-lm">
            <span class="mar-lw">企业采购</span>
            <span class="pick-sale">超低价抢购中</span>
          </div>
          <div class="single-product-img">
            <img src="@/assets/images/shoes.png">
          </div>
        </div>
        <div class="pick-week-item">
          <div class="single-product-header pat-lm">
            <span class="mar-lw">汽车用品</span>
            <span class="pick-sale">爆款直降天天低价</span>
          </div>
          <div class="single-product-img">
            <img src="@/assets/images/shoes.png">
          </div>
        </div>
      </div>
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
        我的购物车
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
      mother: '国际大牌母婴用品',
      isApplication: false,
      isApplication2: false,
      isApplication3: false,
      isApplication4: false,
      isApplication5: false,
      mask: false,
      mask2: false,
      mask3: false,
      mask4: false,
      mask5: false,
      mask6: false,
      mask7: false,
      mask8: false,
    };
  },
  created() {},
  mounted() {
    var heightCss = window.getComputedStyle(this.$refs.aside).height;
    var heightCss2 = window.getComputedStyle(this.$refs.aside1).height;
    if (heightCss > heightCss2) {
      this.$refs.aside1.style.overflow = "hidden";
    } else {
      this.isOpen = false;
    };
    if(global.Bg == 1) {
      this.isAside = 1;
    }else if(global.Bg == 2) {
      this.isAside = 2
    }else if(global.Bg == 3) {
      this.isAside = 3
    };
    window.addEventListener('scroll', this.scrollToTop)
  },
  methods: {
    //关闭广告
    advertClose() {
      this.close = false;
    },
    //侧导航鼠标移入
    mouseEnter() {
      // this.itemHoverIndex = index;
      this.listShow = true;
    },
    //侧导航鼠标移除
    mouseLeave() {
      // this.itemHoverIndex = null;
      this.listShow = false;
    },
    openAside() {
      this.brandFold = !this.brandFold;
      var heightCss = window.getComputedStyle(this.$refs.aside).height;
      if (!this.brandFold) {
        this.$refs.aside1.style.height = heightCss;
        this.isOpen = false;
        this.$refs.allCategories.style.background = 'white'
      } else {
        this.$refs.aside1.style.height = 480 + "px";
      }
    },
    //切换轮播图
    operationWheel() {
      this.isRotation = !this.isRotation;
      this.isAside = !this.isAside;
    },
    //搜索框的placeholder
    motherFocus() {
      this.mother = '';
    },
    motherBlur() {
      this.mother = '国际大牌母婴用品';
    },
    //购物车提示
    shoppingMove() {
      this.isShopping = true;
    },
    shoppingOut() {
      this.isShopping = false;
    },
    //侧边栏
    application() {
      this.isApplication = true;
    },
    applicationOut() {
      this.isApplication = false;
    },
    application2() {
      this.isApplication2 = true;
    },
    applicationOut2() {
      this.isApplication2 = false;
    },
    application3() {
      this.isApplication3 = true;
    },
    applicationOut3() {
      this.isApplication3 = false;
    },
    application4() {
      this.isApplication4 = true;
    },
    applicationOut4() {
      this.isApplication4 = false;
    },
    application5() {
      this.isApplication5 = true;
    },
    applicationOut5() {
      this.isApplication5 = false;
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
    //商品展示详情
    maskEnter() {
      document.querySelector('.commodityInfos').style.bottom = 0 + 'px';
      document.querySelector('.commodityImg').style.opacity = 0.7;
    },
    maskLeave() {
      document.querySelector('.commodityInfos').style.bottom = -39 + 'px'
      document.querySelector('.commodityImg').style.opacity = 1;
    },
    maskEnter2() {
      document.querySelector('.commodityInfos2').style.bottom = 0 + 'px';
      document.querySelector('.commodityImg2').style.opacity = 0.7;
    },
    maskLeave2() {
      document.querySelector('.commodityInfos2').style.bottom = -39 + 'px';
      document.querySelector('.commodityImg2').style.opacity = 1;
    },
    maskEnter3() {
      document.querySelector('.commodityInfos3').style.bottom = 0 + 'px';
      document.querySelector('.commodityImg3').style.opacity = 0.7;
    },
    maskLeave3() {
      document.querySelector('.commodityInfos3').style.bottom = -39 + 'px';
      document.querySelector('.commodityImg3').style.opacity = 1;
    },
    maskEnter4() {
      document.querySelector('.commodityInfos4').style.bottom = 0 + 'px';
      document.querySelector('.commodityImg4').style.opacity = 0.7;
    },
    maskLeave4() {
      document.querySelector('.commodityInfos4').style.bottom = -39 + 'px';
      document.querySelector('.commodityImg4').style.opacity = 1;
    },
    maskEnter5() {
      document.querySelector('.commodityInfos5').style.bottom = 0 + 'px';
      document.querySelector('.commodityImg5').style.opacity = 0.7;
    },
    maskLeave5() {
      document.querySelector('.commodityInfos5').style.bottom = -39 + 'px';
      document.querySelector('.commodityImg5').style.opacity = 1;
    },
    maskEnter6() {
      document.querySelector('.commodityInfos6').style.bottom = 0 + 'px';
      document.querySelector('.commodityImg6').style.opacity = 0.7;
    },
    maskLeave6() {
      document.querySelector('.commodityInfos6').style.bottom = -39 + 'px';
      document.querySelector('.commodityImg6').style.opacity = 1;
    },
    maskEnter7() {
      document.querySelector('.commodityInfos7').style.bottom = 0 + 'px';
      document.querySelector('.commodityImg7').style.opacity = 0.7;
    },
    maskLeave7() {
      document.querySelector('.commodityInfos7').style.bottom = -39 + 'px';
      document.querySelector('.commodityImg7').style.opacity = 1;
    },
    maskEnter8() {
      document.querySelector('.commodityInfos8').style.bottom = 0 + 'px';
      document.querySelector('.commodityImg8').style.opacity = 0.7;
    },
    maskLeave8() {
      document.querySelector('.commodityInfos8').style.bottom = -39 + 'px';
      document.querySelector('.commodityImg8').style.opacity = 1;
    },
    //右边购物车
    SideCart() {
      this.isSideCart = !this.isSideCart;
    },
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
};
</script>

<style scoped>
@import "../../assets/css/HomePage.css";
</style>
