<template>
  <div>
    <div class="header">
      <div class="headerContent">
        <div class="head clearfix">
          <!-- 地理位置 -->
          <div class="header-left">
            <img src="../../assets/images/home.png">
            <span>首页</span>
            <img src="../../assets/images/landmark.png" class="spacing">
            <span>北京</span>
          </div>
          <!-- 地理位置 end-->
          <!-- 登录状态 -->
          <!-- <div class="loginStatus">
            <span class="hello">
              您好，请<span class="login">登陆！</span>
            </span>
          </div> -->
          <!-- 登录状态 end-->
          <!-- 右侧导航 -->
          <div class="header-right">
            <ul class="clearfix">
              <li>
                <a href="#" class="navColor">登录</a>
              </li>
              <li>
                <a href="#" class="navColor">免费注册</a>
              </li>
              <li>
                <a href="#" class="navColor">
                  我的订单
                  <img src="../../assets/images/headdown.png">
                </a>
              </li>
              <li>
                <a href="#" class="navColor">
                  个人中心
                  <img src="../../assets/images/headdown.png">
                </a>
              </li>
              <li>
                <a href="#" class="navColor">微信号</a>
              </li>
              <li>
                <a href="#" class="navColor">福利会员</a>
              </li>
              <li>
                <a href="#" class="navColor">商户工作台</a>
              </li>
              <li>
                <a href="#" class="navColor">服务中心</a>
              </li>
              <li>
                <a href="#" class="navColor">手机客户端</a>
              </li>
            </ul>
          </div>
          <!-- 右侧导航 end-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
}
.header {
  width: 100%;
  height: 36px;
  background-color: #e0e0e0;
  margin-top: 1px;
}
.head {
  width: 100%;
}
.headerContent {
  width: 1202px;
  height: 36px;
  font-size: 14px;
  font-family: Regular;
  margin: 0 auto;
}
.header-left {
  width: 204px;
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  box-shadow: 1px 0 0 #e3e5e2;
  display: flex;
  align-items: center;
  float: left;
}
.header-left img {
  line-height: 16px;
  align-items: center;
  margin-right: 4px;
  cursor: pointer;
}
.header-left span {
  font-size: 12px;
  color: #666666;
}
.loginStatus {
  width: 142px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  font-family: Regular;
  letter-spacing: 2px;
  float: left;
}
.hello {
  color: #333333;
}
.login {
  color: #ff3f40;
  cursor: pointer;
}
.header-right {
  width: 850px;
  height: 36px;
  float: right;
}
.header-right ul {
  width: 100%;
  line-height: 36px;
  list-style: none;
}
.header-right ul li {
  width: 94px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spacing{
  margin-left: 24px;
}
.header-right ul li img {
  margin-right: 3px;
  align-items: center;
}
.header-right ul li .navColor:link {
  color: #666666;
}
.header-right ul li .navColor:visited {
  color: #666666;
}
.header-right ul li .navColor:hover {
  color: #ff3f40;
}
.header-right ul li .myOrder:hover {
  color: red;
}
.header-right ul li .navColor:active {
  color: #ff3f40;
}
</style>
