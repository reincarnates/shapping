<template>
    <div>
        <div>
            <!-- 广告图 -->
            <div class="advert" v-if="close">
                <div class="advertContent">
                    <div class="advertClose clearfix">
                        <img src="../../assets/images/advertClose.png" @click="advertClose">
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
                        <img src="../../assets/images/uligou.png">
                    </div>
                    <div class="content-input">
                        <!-- 搜索框 -->
                        <div class="search-input">
                            <input type="text" placeholder="国际大牌母婴用品">
                            <img src="../../assets/images/search.png">
                        </div>
                        <div class="smallNav">
                            <ul class="clearfix">
                                <li><a href="#">厨房用纸</a></li>
                                <li><a href="#">清洁纸巾</a></li>
                                <li><a href="#">米面粮油</a></li>
                                <li><a href="#">家居用品</a></li>
                                <li><a href="#">厨房用品</a></li>
                                <li><a href="#">母婴</a></li>
                            </ul>
                        </div>
                        <!-- 搜索框 end-->
                    </div>
                    <!-- 购物车 -->
                    <div class="ShoppingCart">
                        
                    </div>
                    <!-- 购物车 end-->
                </div>
            </div>
            <!-- 内容 end-->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            close: true, //默认显示
        }
    },
    created() {},
    mounted() {},
    methods: {
        advertClose() {
            this.close = false;
        }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
}
.advert{
    width: 100%;
    height: 120px;
    background: url('../../assets/images/Advertisement.jpg') no-repeat center 0;
}
.advertContent{
    width: 1202px;
    height: 120px;
    margin: 0 auto;
}
.advertClose{
    width: 100%;
    height: 120px;
    /* overflow: hidden; */
}
.advertClose img{
    float: right;
    cursor:pointer;
    margin-top: 16px;
    margin-right: 8px;
}
.content {
    width: 100%;
    height: 100%;
    background-color: #f0f3ef;
}
.content-search{
    width: 1202px;
    margin: 0 auto;  
    display: flex; 
    /* flex-direction: row;  */
}
.content-logo{
    width: 204px;
    height: 153px;
    background-color: #ffffff;
    box-shadow: 1px 0 0 #e3e5e2;
    display: flex;
    align-items: center;
    justify-content: center;
}
.content-input{
    width: 653px;
    height: 153px;
    box-sizing: border-box;
    padding-left: 138px; 
    display: flex;
    /* align-items: center */
    justify-content: center;
    flex-direction: column; 
}
.search-input{
    width: 515px;
    height: 42px;
    border: 1px solid #ff3f40;
    border-radius: 21px;
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
.search-input img{
    padding-right: 21px;
    cursor: pointer;
}
.smallNav{
    width: 515px;
    height: 33px;
    font-size: 14px;
    font-family: Regular;
    box-sizing: border-box;
    padding-left: 17px;
}
.smallNav ul{
    width: 100%;
    line-height: 36px;
    list-style: none;
}
.smallNav ul li{
    width: 81px;
    float: left;
}
.ShoppingCart{
    width: 125px;
    height: 42px;
    border: 1px solid #ff3f40;
    border-radius: 21px;
    margin-top: 38px;
    margin-left: 30px;
}
.search-input input::-webkit-input-placeholder{
    color:#666666;
}
.search-input input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#666666;
}
.search-input input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#666666;
}
.search-input input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#666666;
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
