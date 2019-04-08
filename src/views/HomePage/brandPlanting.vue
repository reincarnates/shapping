<template>
  <div>
    <div @mouseenter="on_top_enter" @mouseleave="on_top_leave" style="width:1180px;height:266px;">
      <swiper :options="swiperOption" ref="mySwiper" style="height:266px;">
        <!-- slides -->
        <swiper-slide>
          <img src="@/assets/images/bannerimg.png">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/bannerimg.png">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/bannerimg.png">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-black" slot="button-prev" id="left">
          <img src="@/assets/images/left.png">
        </div>
        <div class="swiper-button-next swiper-button-black" slot="button-next" id="left">
          <img src="@/assets/images/right.png">
        </div>
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HelloWorld",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        slidesPerView : 2,
        // 设置轮播
        // effect : 'flip',
        //滑动速度
        speed: 1000,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        // grabCursor : true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function() {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          }
        },
        //左右点击
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiperSlides: [1, 2, 3, 4]
    };
  },
  methods: {
    //通过获得的swiper对象来暂停自动播放
    on_bot_enter() {
      this.swiper.autoplay.stop();
    },
    on_bot_leave() {
      this.swiper.autoplay.start();
    },
    on_top_enter() {
      this.swiper.autoplay.stop();
    },
    on_top_leave() {
      this.swiper.autoplay.start();
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    //可以使用swiper这个对象去使用swiper官网中的那些方法
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(0, 0, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.swiper-slide {
  height: 200px;
}
#left {
  width: 40px;
  height: 50px;
  background: #796158;
  background-color: rgba(125, 97, 93, 0.2);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>