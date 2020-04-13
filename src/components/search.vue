<template>
  <view>
    <!-- 头部search搜索框 -->
    <!-- 默认是红色，没有active类名，隐藏取消按钮 -->
    <!-- 加active类名，背景色变灰色，显示取消按钮 -->
    <!-- active类名生效，isfocus就不生效  ，{}这是对象-->
    <view class="search " :class="{active:isfocus}">
      <view class="search-input">
        <input placeholder="请输入搜索商品" type="text" @focus="goSearch" />
        <text class="cancel" @click="cancel">取消</text>
      </view>
      <!-- 搜索结果内容 -->
      <view class="search-content"></view>
    </view>
  </view>
</template>

<script>
export default {
    data(){
        return{
            isfocus:false//false没有焦点，true有焦点
        }
    },
    methods:{
        // 当获取焦点的时候active为true
        goSearch(){
            this.isfocus=true
            // 当获取焦点的时候，固定屏幕高度
            // 高度为屏幕高度，让页面不滚动
            // 触发传来的自定义事件，传高度过去
            // 小程序提供屏幕的高度，微信官方文档
            // let res = uni.getSystemInfoSync();
            let res = uni.getSystemInfoSync()
            // console.log(res.windowHeight);
            // rpx需要*x2
           this.$emit("my",res.windowHeight+'px')
        },
        cancel(){
            this.isfocus=false
            // 取消还原高度，可以滚动
            this.$emit("my",'auto')
            
        }
    }
};
</script>

<style lang="less" scoped>
// 搜索框
.search {
  .search-input {
    background-color: #ea4451;
    padding: 18rpx;
    input {
      background-color: #fff;
      font-size: 26rpx;
      color: black;
      padding-left: 15rpx;
      height: 60rpx;
    }
     .cancel{
       width: 100rpx;
       height: 60rpx;
       line-height: 60rpx;
       text-align: center;
       color: #333;
       display: none;//默认隐藏
    }
  }
  // &代表.search .active交集选择器
  &.active {
    //   大盒子占满屏幕
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 999;  
      background-color: #fff;
    //   背景颜色变灰色
    .search-input{
        background-color: #cccccc;
        display: flex;//选中的情况下一横排
        input{
            flex: 1;
        }
    }
    .cancel{
        // 取消 正常显示
        display: block;
    }
    // 搜索内容沾满剩下的内容
    .search-content{
        position: absolute;
        top: 97rpx;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
    }
   
  }
}
</style>