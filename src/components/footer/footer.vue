<template>
    <div>
        <div class="footer-warp">
            <div class="footer-content">
                <div class="footer-top">
                    <div class="footer-top-item clearfix">
                        <div class="footer-top-img">
                            <img src="@/assets/images/aftersale.png">
                        </div>
                        <div class="footer-top-words">
                            <span>产品更齐全</span>
                            <span>轻松购物畅选无忧</span>
                        </div>
                    </div>
                    <div class="footer-top-item clearfix">
                        <div class="footer-top-img">
                            <img src="@/assets/images/classification.png">
                        </div>
                        <div class="footer-top-words">
                            <span>产品更齐全</span>
                            <span>轻松购物畅选无忧</span>
                        </div>
                    </div>
                    <div class="footer-top-item clearfix">
                        <div class="footer-top-img">
                            <img src="@/assets/images/security.png">
                        </div>
                        <div class="footer-top-words">
                            <span>产品更齐全</span>
                            <span>轻松购物畅选无忧</span>
                        </div>
                    </div>
                    <div class="footer-top-item clearfix">
                        <div class="footer-top-img">
                            <img src="@/assets/images/thumbs.png">
                        </div>
                        <div class="footer-top-words">
                            <span>产品更齐全</span>
                            <span>轻松购物畅选无忧</span>
                        </div>
                    </div>
                </div>
                <div class="footer-center">
                    <div class="footer-center-left">
                        <div class="footer-list">
                            <div>
                                <a href="#" class="color">新手指南</a>
                            </div>
                            <ul class="clearfix">
                                <li>
                                    <a href="#">积分细则</a>
                                </li>
                                <li>
                                    <a href="#">积分兑换说明</a>
                                </li>
                                <li>
                                    <a href="#">如何搜索</a>
                                </li>
                                <li>
                                    <a href="#">忘记密码</a>
                                </li>
                                <li>
                                    <a href="#">我要买</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-list">
                            <div>
                                <a href="#" class="color">支付方式</a>
                            </div>
                            <ul class="clearfix">
                                <li>
                                    <a href="#">分期付款</a>
                                </li>
                                <li>
                                    <a href="#">邮局付款</a>
                                </li>
                                <li>
                                    <a href="#">公司转账</a>
                                </li>
                                <li>
                                    <a href="#">如何注册支付宝</a>
                                </li>
                                <li>
                                    <a href="#">在线支付</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-list">
                            <div>
                                <a href="#" class="color">售后服务</a>
                            </div>
                            <ul class="clearfix">
                                <li>
                                    <a href="#">联系卖家</a>
                                </li>
                                <li>
                                    <a href="#">退换货政策</a>
                                </li>
                                <li>
                                    <a href="#">退换货流程</a>
                                </li>
                                <li>
                                    <a href="#">返修/退换货</a>
                                </li>
                                <li>
                                    <a href="#">退款申请</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-list">
                            <div>
                                <a href="#" class="color">购物指南</a>
                            </div>
                            <ul class="clearfix">
                                <li>
                                    <a href="#">会员修改密码</a>
                                </li>
                                <li>
                                    <a href="#">会员修改个人资料</a>
                                </li>
                                <li>
                                    <a href="#">商品发布</a>
                                </li>
                                <li>
                                    <a href="#">修改收货地址</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-list">
                            <div>
                                <a href="#" class="color">关于我们</a>
                            </div>
                            <ul class="clearfix">
                                <li>
                                    <a href="#">合作及洽谈</a>
                                </li>
                                <li>
                                    <a href="#">招聘英才</a>
                                </li>
                                <li>
                                    <a href="#">关于我们</a>
                                </li>
                                <li>
                                    <a href="#">联系我们</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-center-right">
                        <div class="tow-code">
                            <div class="public-address"></div>
                            <div class="public-address-word">
                                公众号
                            </div>
                        </div>
                        <div class="tow-code">
                            <div class="public-address"></div>
                            <div class="public-address-word">
                                官方微信
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-payment-info">
                    <div class="footer-payment-info-item">
                        <div>
                            <img src="@/assets/images/policebadge.png" alt="">
                        </div>
                        <div class="footer-payment-info-word">
                            工业和信息化部
                        </div>
                    </div>
                    <div class="footer-payment-info-item"></div>
                    <div class="footer-payment-info-item"></div>
                    <div class="footer-payment-info-item"></div>
                    <div class="footer-payment-info-item"></div>
                    <div class="footer-payment-info-item"></div>
                    <div class="footer-payment-info-item"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footerWarp{
    width: 100%;
    height: 686px;
}
.footer-content{
    width: 1202px;
    height: 686px;
    margin: 0 auto;
}
.footer-top{
    width: 100%;
    height: 234px;
    padding-left: 8px;
    padding-right: 8px;
    border-bottom: 1px solid #ededed;
    box-sizing: border-box;
    display: flex;
}
.footer-top-item{
    width: 25%;
    height: 234px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.footer-top-img{
    width: 70px;
    height: 70px;
    float: left;
}
.footer-top-words{
    width: 145px;
    height: 70px;
    float: left;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}
.footer-top-words span{
    line-height: 32px;
}
.footer-top-words span:first-child{
    font-size: 16px;
    color: #333333;
    font-weight: bold;
}
.footer-top-words span:last-child{
    font-size: 14px;
    color: #999999;
}
.footer-center{
    width: 100%;
    height: 236px;
    padding-left: 8px;
    padding-right: 8px;
    border-bottom: 1px solid #ededed;
    box-sizing: border-box;
    display: flex;
}
.footer-center-left{
    width: 70%;
    height: 236px;
    padding-top: 30px;
    padding-left: 24px;
    box-sizing: border-box;
    display: flex;
}
.footer-list{
    width: 20%;
    line-height: 31px;
}
.footer-list ul li a{
    color: #747774;
    font-size: 14px;
}
.color{
    color: #3c363c;
    font-size: 16px;
}
.footer-center-right{
    width: 30%;
    height: 236px;
    display: flex;
    align-items: center;
}
.tow-code{
    width: 134px;
    height: 158px;
    border: 1px solid #ededed;
    margin-right: 50px;
}
.tow-code:last-child{
    margin-right: 0;
}
.public-address{
    width: 134px;
    height: 132px;
    border-bottom: 1px solid #ededed;
    padding: 15px;
}
.public-address-word{
    width: 134px;
    height: 26px;
    line-height: 26px;
    color: #9c9e9c;
    font-size: 12px;
    text-align: center;
}
.footer-payment-info{
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.footer-payment-info-item{
    width: 124px;
    height: 47px;
    border: 1px solid #ededed;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.footer-payment-info-item:last-child{
    margin-right: 0;
}
.footer-payment-info-word{
    width: 56px;
    line-height: 16px;
    color: #666666;
    font-size: 12px;
    margin-left: 16px;
}
</style>

