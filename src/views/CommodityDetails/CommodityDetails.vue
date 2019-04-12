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
              <div class="commodity-info-planting">
                  
              </div>
              <div class="commodity-info-planting-word">
                  商品编号 615488 |<span><img src="@/assets/images/love.jpg">加关注</span>
              </div>
          </div>
          <div class="commodity-planting-right">
            <div class="introduction">
              <div class="introduction-head">
                <div class="introduction-support">自营</div>
                <span>迪奥 (Dior) 魅惑润唇001#3.5g(又名克里斯丁迪奥魅惑)润唇膏001)变色持久保湿</span>
              </div>
              <div class="introduction-price">
                <div class="introduction-price-head">
                  <div class="Price_Move">价格</div>
                  <div class="MONEY_H">￥300</div>
                </div>
                <div class="introduction-price-bottom">
                  <div class="gives">
                    <img src="@/assets/images/gives.png">
                  </div>
                  <div class="high-ranked">
                    好评率<span class="high-color">98%</span>[评论<span class="high-color">21万+</span>条]
                  </div>
                </div>
              </div>
              <div class="giveaways">
                <div class="giveaways-left">
                  促销
                </div>
                <div class="giveaways-reduction">
                  满减
                </div>
                <div class="giveaways-word">
                  满500元减50元，满100元减100元
                </div>
                <a href="#">立即参加</a>
                <div class="giveaways-item">
                  共<span>1</span>项，
                </div>
                <div class="giveaways-item-word pointer">
                  展开查看
                  <img src="@/assets/images/headdown.png">
                </div>
              </div>
              <div class="select-target-focused">
                <div class="select-color">
                  <div class="select-word">
                    <span>选择颜色：</span>
                    <div class="select-item pointer" v-for="(item, index) in 5" :class="{active:isactive==index}" :key="index" @click="selectCheck(index)">
                      <div class="select-item-img" v-if="isactive==index">
                        <img src="@/assets/images/rightmark.png">
                      </div>
                    </div>
                  </div>
                  <div class="net-content">
                    <div class="net-content-word">选择净含量：</div>
                    <div class="net-content-item pointer" v-for="(item, index) in 3" :class="{active:isNetContent==index}" :key="index" @click="netContent(index)">
                      <div class="select-item-img2" v-if="isNetContent==index">
                        <img src="@/assets/images/rightmark.png">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="address">
                <div class="address-word">
                  送货至：
                </div>
                <div class="address-select">
                  <div class="address-select-word">
                    北京朝阳区
                  </div>
                  <img src="@/assets/images/adressDown.png">
                </div>
                <div class="inventory">有货</div>
                <div class="placeOrder">
                  11:00之前下单预计明日(4月1日)送达
                </div>
              </div>
              <div class="gdelivery">
                <div class="gdelivery-word">
                  由福利购发货，并提供售后服务
                </div>
                <div class="gdelivery-word2">
                  支持<span>满100元免运费 &nbsp;&nbsp;准时达</span>
                </div>
              </div>
              <div class="amount-commodity">
                <div class="Calculator">
                  <input type="text" size="2" maxlength="6" class="Calculator-input" v-model="amount">
                  <div class="amount-all">
                    <div class="amount-add pointer" @click="amountUp">
                      <img src="@/assets/images/amountPlus.png">
                    </div>
                    <div class="amount-reduce pointer" @click="amountDown">
                      <img src="@/assets/images/amountReduce.png">
                    </div>
                  </div>
                </div>
                <div class="addCar pointer">
                  <img src="@/assets/images/addCart.png">
                  <span>加入购物车</span>
                </div>
              </div>
            </div>
            <div class="Barmore">
              <div class="Barmore-head">
                <div class="Barmore-head-left">
                  看了又看
                </div>
                <div class="Barmore-head-right pointer">
                  <img src="@/assets/images/refresh.png">
                  <span>换一批</span>
                </div>
              </div>
              <div class="Barmore-content">
                <img src="@/assets/images/goods.jpg">
                <div class="Barmore-content-word">
                  迪奥 (DIOR) 烈焰兰金唇膏999 33333
                </div>
                <div class="Barmore-price">
                  ￥480.0
                </div>
              </div>
              <div class="Barmore-content">
                <img src="@/assets/images/goods.jpg">
                <div class="Barmore-content-word">
                  迪奥 (DIOR) 烈焰兰金唇膏999 33333
                </div>
                <div class="Barmore-price">
                  ￥480.0
                </div>
              </div>
            </div>
          </div>
      </div>
      <!-- 商品信息end -->
      <!-- 二级标题 -->
      <div class="secondary">
        <div class="secondary-vertical"></div>
        <span>顾客最喜爱商品排行榜</span>
      </div>
      <!-- 二级标题end -->
      <!-- 推荐商品列表 -->
      <div class="recommended">
        <div class="recommended-item" v-for="item in 5" :key="item">
          <img src="@/assets/images/firstitem.jpg">
          <div class="recommended-item-word">
            迪奥 (DIOR) 烈焰兰金唇膏999 迪奥 (DIOR) 烈焰兰金唇膏999
          </div>
          <div class="recommended-item-price">￥480.0</div>
          <div class="recommended-item-button pointer">查看详情</div>
        </div>
      </div>
      <!-- 推荐商品列表end -->
      <div class="Introduction">
        <div class="Introduction-left">
          <div class="Introduction-left-header">
            <div class="Introduction-content">
              迪奥 (DIOR) 烈焰兰金唇膏999
            </div>
            <div class="Proprietary">
              自营
            </div>
          </div>
          <div class="Welcome">
            <div class="Welcome-word">
              迪奥（Dior）美妆专区欢迎您
            </div>
            <div class="enterstep pointer">
              进入店铺
            </div>
          </div>
          <div class="Otherwise">
            看了本商品的用户最终购买了
          </div>
          <div class="numbered-list" v-for="item in 3" :key="item">
            <img src="@/assets/images/Lipstick.jpg" class="mar-tm">
            <div class="numbered-list-describe">
              迪奥 (DIOR) 烈焰兰金唇膏999 333
            </div>
            <div class="numbered-list-price">
              ￥499.0
            </div>
            <div class="recommended-item-button pointer">查看详情</div>
          </div>
        </div>
        <div class="Introduction-right">
          <div class="acf-tab">
            <div class="tab-bar">
              <a href="javascript:;"
                @click="tab(index)"
                v-for="(item,index) in items" :key="index"
                :class="{tabActive : index===curId}"
                v-html="item.item"></a>
            </div>
            <div class="tab-con" v-show="curId===0">
              <div class="tab-con-head">
                <div class="specifications">
                  规格参数
                </div>
                <div class="big-introduction">
                  <div class="introduction-two" v-for="(item,index) in 6" :key="index">
                    品牌：迪奥
                  </div>
                </div>
              </div>
              <div class="tab-con-img">
                <img src="@/assets/images/Goods-one.jpg" class="mar-tm">
                <img src="@/assets/images/Goods-two.jpg">
                <img src="@/assets/images/Goods-three.jpg">
                <div class="Characters"></div>
              </div>
              <div class="tab-table">
                <div class="tab-table-head">主体</div>
                <div class="tab-table-item" v-for="(item,index) in products" :key="index">
                  <div class="tab-table-item-left">
                    {{item.title}}
                  </div>
                  <div class="tab-table-item-right">
                    {{item.content}}
                  </div>
                </div>
                <div class="Packing-list">
                  包装清单
                </div>
                <div class="Packing-number">
                  迪奥DIOR魅惑润唇蜜SPF10 × 1
                </div>
              </div>
              <div class="paragraph">
                <div v-for="(item,index) in information" :key="index">
                  <div class="paragraph-title">
                    {{item.title}}
                  </div>
                  <div class="mar-tm">
                    <p class="paragraph-content">
                      {{item.content}}
                    </p>
                    <p class="paragraph-content">
                      {{item.info}}
                    </p>
                  </div>
                </div>
              </div>
              <div class="highest">
                <div class="highest-left">
                  <div class="rate_n">
                    <div class="rate_word">好评率</div>
                    <div class="Percentage">
                      99<span>%</span>
                    </div>
                    <div class="rate_word_bottom">
                      共21万人评论
                    </div>
                  </div>
                  <div class="everyone-feels">
                    <div class="triangle_border_right">
                      <span></span>
                    </div>
                    大<br/>家<br/>觉<br/>得
                  </div>
                </div>
                <div class="highest-right">
                  <div class="highest-right-item pointer" v-for="(item,index) in 9" :key="index">
                    颜色漂亮(23)
                  </div>
                </div>
              </div>
              <div class="Category">
                <div class="Category-head">
                  <div class="tab-bar2">
                    <a href="javascript:;"
                      @click="Category(index)"
                      v-for="(item,index) in categoryItem" :key="index"
                      :class="{categoryActive : index===curId2}">
                        <form>
                          <label class="checkRadio">
                            <input name="Fruit" type="radio" value="" :checked="index === curId2" class="mar-rn"/>
                            {{item.item}}
                          </label> 
                        </form>
                      </a>
                  </div>
                  <div class="current">
                    <form>
                      <label>
                        <input name="Fruit" type="checkbox" value=""/>
                        只看当前评价
                      </label> 
                    </form>
                  </div>
                </div>
                <div v-show="curId2===0">
                  <div class="Category-content" v-for="i in 2" :key="i">
                    <div class="mastheader">
                      <div class="redheads"></div>
                      <div class="mastheader-word">
                        {{'哈哈哈哈哈' | newWord}}
                      </div>
                    </div>
                    <div class="page-content">
                      <div class="page-content-head">
                        评分：
                      </div>
                      <div class="page-content-test">
                        内容：&nbsp;&nbsp;&nbsp;本来想买本来想买本来想买本来想买本来想买本来想买本来想买本来想买本来想买
                      </div>
                      <div class="page-content-img">
                        <span>
                          晒单：
                        </span>
                        <div class="contentImg">
                          <div class="contentImg-item" v-for="i in 10" :key="i"></div>
                        </div>
                      </div>
                      <div class="modelTypes">
                        <span>粉色001</span>
                        <span>2017-11-29 21:12:13</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "../../assets/js/config.js";
var serivce;
export default {
  data() {
    return {
      mother: "国际大牌母婴用品",
      isShopping: false, //购物车提示
      isAside: false, //全部分类隐藏显示
      listShow: false, //侧导航列表
      height: global.leftMenu.height,
      isactive: null,
      isNetContent: null,
      amount: 1,
      curId: 0,
      curId2: 0,
      items: [
        {item: '商品介绍'},
        {item: '评价<span style="color: #ff4040">21万+</span>'},
        {item: '规格及包装'},
        {item: '售后服务'},
      ],
      products: [
        {
          title: '保质期（年）',
          content: '3年'
        },
        {
          title: '产品产地',
          content: '其他'
        },
        {
          title: '净含量（ml/g）',
          content: '3.5g'
        },
        {
          title: '色号颜色',
          content: '001'
        },
        {
          title: '功效',
          content: '丰唇/显色；修护/滋润/保湿；其他'
        },
        {
          title: '妆效',
          content: '润泽/镜面'
        }
      ],
      information: [
        {
          title: '福利购承诺',
          content: '福利购平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务，请您放心购买！',
          info: '注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若没有及时更新，请大家谅解！'
        },
        {
          title: '全国联保',
          content: '福利购平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务，请您放心购买！',
          info: '注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若没有及时更新，请大家谅解！'
        },
        {
          title: '权力声明',
          content: '福利购平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务，请您放心购买！',
          info: '注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若没有及时更新，请大家谅解！'
        },
        {
          title: '价格说明',
          content: '福利购平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务，请您放心购买！',
          info: '注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若没有及时更新，请大家谅解！'
        },
      ],
      categoryItem: [
        {
          item: '全部(21万+)'
        },
        {
          item: '晒单(1.2万+)'
        },
        {
          item: '追评(700+)'
        },
        {
          item: '好评(20万+)'
        },
        {
          item: '中评(1500万+)'
        },
        {
          item: '差评(1700+)'
        },
      ]
    };
  },
  filters: {
    newWord(val) {
      var word = val;
      word = "" + word;
      var word1 = word.substring(0,1) + "***" + word.charAt(word.length-1);
      return word1
    }
  },
  mounted() {
    
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
    //选中元素加边框和显示选中效果
    selectCheck(index) {
      this.isactive = index;
    },
    netContent(index) {
      this.isNetContent = index;
    },
    //加数量
    amountUp() {
      this.amount++;
    },
    //减数量
    amountDown() {
      if(this.amount > 1) {
        this.amount--;
      }
    },
    //tab切换
    tab(index) {
      this.curId = index;
    },
    Category(index) {
      this.curId2 = index;
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/CommodityDetails.css";
</style>
