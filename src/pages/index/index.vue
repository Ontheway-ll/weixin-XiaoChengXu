<template>
  <!-- 每个组件都有一个根标签，给个类名 -->
  <view class="index">
    <!-- 头部search搜索框 -->
    <view class="search">
      <view class="search-input">
        <input placeholder="请输入搜索商品" type="text" />
      </view>
      <!-- 搜索结果内容 -->
      <view class="search-content"></view>
    </view>
	<!-- 轮播图 -->
  <!-- 255,0,0 红色，255,255,255白色 -->
  <!-- indicator-dots="true"字符串
       :indicator-dots="true"变量
       或者 indicator-dots -->
	<view class="swiper-box">
		<swiper :indicator-dots="true" 
             indicator-color="rgba(255,0,0,.8)"
            :autoplay="true">
			<swiper-item>
				<navigator url="" class="nav">
					<img src="../../static/uploads/banner1.png" alt="">
				</navigator>
			</swiper-item>

      	<swiper-item>
				<navigator url="" class="nav">
					<img src="../../static/uploads/banner2.png" alt="">
				</navigator>
			</swiper-item>

      	<swiper-item>
				<navigator url="" class="nav">
					<img src="../../static/uploads/banner3.png" alt="">
				</navigator>
			</swiper-item>
			
		</swiper>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.search {
  .search-input {
    background-color: #ea4451;
	padding: 18rpx;
	}
    input {
      background-color: #fff;
      font-size: 26rpx;
      color: #eee;
      padding-left: 15rpx;
      height: 60rpx;
    }
  
}
.swiper-box{
  // swiper默认有一个高度是150rpx
   swiper{
    height: 340rpx;
    navigator{
      width: 750rpx;
      height:340rpx ;
      img{
       width:100%;
       height:100%;
      }
    }
  } 
}
</style>
