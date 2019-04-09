<template>
  <div class="wrap">
    <!-- 头部 -->
    <head-view></head-view>
    <!-- 头部end -->
    <div class="content">
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
        <div class="ShoppingCart-position" v-if="isShopping">购物车中没有商品，赶快去选购！</div>
        <!-- 购物车 end-->
        <!-- 二维码 -->
        <div class="code">
          <img src="@/assets/images/code.png">
        </div>
        <!-- 二维码 end-->
      </div>
      <!-- 全部分类 -->
      <div class="classify">
        <div class="categoriesWarp">
          <div class="all-categories pointer" @mousemove="classifyMove" @mouseout="classifyOut">
            <img src="@/assets/images/shrink.png">
            <span class="mar-lw">全部分类</span>
          </div>
        </div>
      </div>
      <!-- 全部分类 end-->
      <!-- 左侧菜单 -->
      <div class="aside" v-if="isAside" @mousemove="classifyMove" @mouseout="classifyOut" :style="{'height': height}">
        <ul class="clearfix" ref="aside">
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
      <!-- 左侧菜单end -->
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
      <!-- 小导航 -->
      <div class="smallMenu">
          美妆护肤>香水彩妆>唇彩唇蜜>唇釉>迪奥
      </div>
      <!-- 小导航end -->
      <!-- 商品信息 -->
      <div class="dialog-commodity">
          <div class="commodity-planting">
              <div class="commodity-img">
                  <div class="commodity-video">
                    <div class="commodity-triangle">
                        <div class="triangle_border_right">
                            <span></span>
                        </div>
                    </div>
                    <div class="commodity-word">
                        视频
                    </div>
                  </div>
              </div>
              <div class="commodity-info-planting"></div>
              <div class="commodity-info-planting-word">
                  商品编号 615488 |<span><img src="@/assets/images/love.jpg">加关注</span>
              </div>
          </div>
      </div>
      <!-- 商品信息end -->
    </div>
  </div>
</template>

<script>
import global from "../../assets/js/config.js";
export default {
  data() {
    return {
      mother: "国际大牌母婴用品",
      isShopping: false, //购物车提示
      isAside: false, //全部分类隐藏显示
      listShow: false, //侧导航列表
      height: global.leftMenu.height
    };
  },
  mounted() {
    // document.querySelector('.aside').style.height = global.leftMenu.height + 'px';
  },
  methods: {
    //搜索框的placeholder
    motherFocus() {
      this.mother = "";
    },
    motherBlur() {
      this.mother = "国际大牌母婴用品";
    },
    //购物车提示
    shoppingMove() {
      this.isShopping = true;
    },
    shoppingOut() {
      this.isShopping = false;
    },
    //全部分类隐藏显示
    classifyMove() {
      this.isAside = true;
    },
    classifyOut() {
      this.isAside = false;
    },
    //侧导航鼠标移入
    mouseEnter() {
      this.listShow = true;
    },
    //侧导航鼠标移除
    mouseLeave() {
      this.listShow = false;
    },
  }
};
</script>

<style scoped>
@import "../../assets/css/CommodityDetails.css";
</style>
