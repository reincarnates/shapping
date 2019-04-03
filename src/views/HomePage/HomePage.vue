<template>
  <div>
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
        <div class="content-search clearfix">
          <div class="content-logo">
            <img src="@/assets/images/uligou.png">
          </div>
          <div class="content-input">
            <!-- 搜索框 -->
            <div class="search-input">
              <input type="text" placeholder="国际大牌母婴用品">
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
          <div class="ShoppingCart">
            <img src="@/assets/images/shoppingCart.png">
            <span>购物车</span>
            <div class="infoNumber">1</div>
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
          <div class="all-categories">
            <img src="@/assets/images/shrink.png">
            <span class="mar-lw">全部分类</span>
          </div>
          <div class="categories-right"></div>
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
          <!-- 轮播图 -->
          <div class="aside-right">
            <div class="aside-planting">
              <div class="planting mar-lm mar-bm">
                <wheel-planting></wheel-planting>
              </div>
              <div class="planting-right">
                <div class="planting-img-top mar-bm">
                  <img src="@/assets/images/irobot.png">
                </div>
                <div class="planting-img-bottom mar-bm">
                  <img src="@/assets/images/pirbot.png">
                </div>
              </div>
            </div>
            <div class="planting-bottom">
              <div class="planting-bottom-left mar-lm">
                <img src="@/assets/images/smallimg.png">
              </div>
              <div class="planting-bottom-left mar-lm">
                <img src="@/assets/images/smallimg.png">
              </div>
              <div class="planting-img-bottom mar-lm">
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
        <!-- 秒杀 -->
        <div class="content-spike"></div>
        <!-- 秒杀end -->
      </div>
      <!-- 内容 end-->
    </div>
  </div>
</template>

<script>
import WheelPlanting from "./WheelPlanting.vue";
export default {
  components: {
    WheelPlanting
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
    };
  },
  created() {},
  mounted() {
    var heightCss = window.getComputedStyle(this.$refs.aside).height;
    var heightCss2 = window.getComputedStyle(this.$refs.aside1).height;
    if (heightCss > heightCss2) {
      this.$refs.aside1.style.overflow = "hidden";
    }else{
      this.isOpen = false;
    }
    // this.$refs.aside1.style.height = heightCss
    // var heightCss2 = window.getComputedStyle(this.$refs.aside1).height;
    // heightCss2 = heightCss;
    console.log(heightCss);
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
      if(!this.brandFold) {
        this.$refs.aside1.style.height = heightCss;
        this.isOpen = false;
      }else{
        this.$refs.aside1.style.height = 480 + 'px';
      }
    }
  }
};
</script>

<style scoped>
.openfather{
  position: relative;
}
.openDown{
  width: 204px;
  height: 30px;
  position: absolute;
  left: 0;
  top: 480px;
  font-size: 12px;
  text-align: center;
  background-color: #ffffff;
  line-height: 30px;
}
.openDown img{
  width: 15px;
}
a {
  text-decoration: none;
}
.advert {
  width: 100%;
  height: 120px;
  background: url("../../assets/images/Advertisement.jpg") no-repeat center 0;
}
.advertContent {
  width: 1202px;
  height: 120px;
  margin: 0 auto;
}
.advertClose {
  width: 100%;
  height: 120px;
  /* overflow: hidden; */
}
.advertClose img {
  float: right;
  cursor: pointer;
  margin-top: 16px;
  margin-right: 8px;
}
.content {
  width: 100%;
  height: 100%;
  background-color: #f0f3ef;
}
.content-search {
  width: 1202px;
  margin: 0 auto;
  display: flex;
}
.content-logo {
  width: 205px;
  height: 115px;
  background-color: #ffffff;
  box-shadow: 1px 0 0 #e3e5e2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
}
.categoriesWarp{
  width: 1202px;
  margin: 0 auto;
  display: flex;
}
.all-categories{
  width: 204px;
  height: 42px;
  background-color: #ff4040;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.categories-right{
  width: 998px;
  height: 42px;
  background-color: #000000
}
.content-input {
  width: 653px;
  height: 115px;
  box-sizing: border-box;
  padding-left: 138px;
  padding-top: 25px;
  display: flex;
  /* align-items: center */
  justify-content: center;
  flex-direction: column;
}
.search-input {
  width: 515px;
  height: 42px;
  border: 1px solid #ff3f40;
  display: flex;
  align-items: center;
}
.search-input input {
  width: 454px;
  height: 42px;
  border: none;
  outline: none;
  background: none;
  padding-left: 17px;
}
.search-input img {
  padding-right: 21px;
  cursor: pointer;
}
.smallNav {
  width: 515px;
  height: 33px;
  font-size: 14px;
  font-family: Regular;
  box-sizing: border-box;
  padding-left: 17px;
}
.smallNav ul {
  width: 100%;
  line-height: 36px;
  list-style: none;
}
.smallNav ul li {
  width: 81px;
  float: left;
}
.ShoppingCart {
  width: 125px;
  height: 42px;
  border: 1px solid #ff3f40;
  margin-top: 32px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.ShoppingCart img {
  margin-left: 16px;
}
.ShoppingCart span {
  margin-left: 18px;
  color: #ff3f40;
  font-size: 14px;
}
.infoNumber {
  width: 15px;
  height: 15px;
  background-color: #ff3f40;
  border-radius: 50%;
  color: #ffffff;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -7px;
  right: -7px;
}
.code {
  width: 189px;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.content-aside {
  width: 1202px;
  height: 600px;
  margin: 0 auto;
  display: flex;
}
.aside {
  width: 204px;
  height: 480px;
  background-color: #ffffff;
  box-shadow: 1px 0 0 #e3e5e2;
  /* overflow: hidden; */
}
.aside ul {
  width: 100%;
  /* line-height: 30px; */
  list-style: none;
  letter-spacing: 2px;
  font-size: 14px;
  font-family: Regular;
}
.aside ul li {
  padding-left: 21px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
}
.aside ul li:hover {
  background-color: #d8d8d8 !important;
}
.aside ul li a:link {
  color: #626262;
}
.aside ul li a:visited {
  color: #626262;
}
.aside ul li a:hover {
  border-bottom: 1px solid #5f5f5f;
}
.aside ul li a:active {
  color: #626262;
}
.aside-right {
  width: 998px;
  height: 600px;
}
.aside-planting {
  width: 998px;
  height: 408px;
  display: flex;
}
.planting {
  width: 789px;
  height: 398px;
}
.planting-right {
  width: 190px;
  height: 398px;
  margin-left: 9px;
}
.planting-img-top {
  width: 190px;
  height: 195px;
  background: #ff3f40;
}
.planting-img-bottom {
  width: 190px;
  height: 193px;
  background: #ff3f40;
}
.planting-bottom {
  width: 998px;
  height: 192px;
  display: flex;
}
.planting-bottom-left {
  width: 389px;
  height: 192px;
  background: #000000;
}
.content-spike {
  width: 1202px;
  height: 339px;
  background: #ff3f40;
  margin: 0 auto;
  margin-top: 31px;
}
.list {
  position: relative;
}
.list-select {
  width: 998px;
  height: 601px;
  background: #ffffff;
  position: absolute;
  right: 349px;
  top: -600px;
  z-index: 10;
  display: flex;
}
.list-select-left {
  width: 805px;
  height: 423px;
  padding-top: 42px;
  padding-left: 9px;
  box-sizing: border-box;
}
.list-header {
  width: 100%;
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
}
.list-header span {
  background: #363636;
  margin-left: 10px;
  padding: 7px 13px 6px 9px;
}
.list-header span:first-child {
  margin-left: 0;
}
.lists {
  width: 100%;
  margin-top: 18px;
  white-space: nowrap;
}
.lists span:first-child {
  color: #1d1d1d;
  font-size: 14px;
  font-weight: bold;
  border-left: none;
  padding: 0;
}
.lists span {
  color: #666666;
  font-size: 12px;
  border-left: 1px solid #dfdfdf;
  padding: 3px 10px 2px 9px;
}
.list-select-right {
  width: 193px;
  height: 423px;
  background: #ff3f40;
}
/* .itemHover {
  background-color: #d8d8d8 !important;
} */
.search-input input::-webkit-input-placeholder {
  color: #666666;
}
.search-input input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #666666;
}
.search-input input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #666666;
}
.search-input input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #666666;
}
.smallNav ul li a:link {
  color: #999999;
}
.smallNav ul li a:visited {
  color: #999999;
}
.smallNav ul li a:hover {
  color: #999999;
}
.smallNav ul li a:active {
  color: #999999;
}
</style>
