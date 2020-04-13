<template>
  <!-- 每个组件都有一个根标签，给个类名 -->
  <view class="index" :style="{overflow:'hidden',height:h}">
   <!-- 搜索框 -->
   <search @my="indexHeight"></search>
    <!-- 轮播图 -->
    <!-- 255,0,0 红色，255,255,255白色 -->
    <!-- indicator-dots="true"字符串
       :indicator-dots="true"变量
    或者 indicator-dots-->
    <view class="swiper-box">
      <swiper :indicator-dots="true" indicator-color="rgba(255,0,0,.8)" :autoplay="true">
        <swiper-item>
          <navigator url class="nav">
            <img src="../../static/uploads/banner1.png" alt />
          </navigator>
        </swiper-item>

        <swiper-item>
          <navigator url class="nav">
            <img src="../../static/uploads/banner2.png" alt />
          </navigator>
        </swiper-item>

        <swiper-item>
          <navigator url class="nav">
            <img src="../../static/uploads/banner3.png" alt />
          </navigator>
        </swiper-item>
      </swiper>
    </view>
    <!-- 导航部分 -->
    <view class="nav">
      <navigator url>
        <img src="../../static/uploads/icon_index_nav_1@2x.png" alt />
      </navigator>
      <navigator url>
        <img src="../../static/uploads/icon_index_nav_2@2x.png" alt />
      </navigator>
      <navigator url>
        <img src="../../static/uploads/icon_index_nav_3@2x.png" alt />
      </navigator>
      <navigator url>
        <img src="../../static/uploads/icon_index_nav_4@2x.png" alt />
      </navigator>
    </view>
    <!-- 内容部分 -->
    <view class="box">
      <!-- 每个楼层包含标题和5个图片内容 -->
      <view class="floor">
        <!-- 标题 -->
        <view class="floor-title">
          <img src="../../static/uploads/pic_floor01_title.png" alt />
        </view>
        <!-- 5个图片 -->
        <view class="item">
          <navigator url>
            <img src="../../static/uploads/pic_floor01_1@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor01_2@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor01_3@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor01_4@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor01_5@2x.png" alt />
          </navigator>
        </view>
      </view>
       <!-- 每个楼层包含标题和5个图片内容 -->
      <view class="floor">
        <!-- 标题 -->
        <view class="floor-title">
          <img src="../../static/uploads/pic_floor02_title.png" alt />
        </view>
        <!-- 5个图片 -->
        <view class="item">
          <navigator url>
            <img src="../../static/uploads/pic_floor02_1@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor02_2@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor02_3@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor02_4@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor02_5@2x.png" alt />
          </navigator>
        </view>
      </view>
      <!-- 每个楼层包含标题和5个图片内容 -->
      <view class="floor">
        <!-- 标题 -->
        <view class="floor-title">
          <img src="../../static/uploads/pic_floor01_title.png" alt />
        </view>
        <!-- 5个图片 -->
        <view class="item">
          <navigator url>
            <img src="../../static/uploads/pic_floor03_1@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor03_2@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor03_3@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor03_4@2x.png" alt />
          </navigator>
          <navigator url>
            <img src="../../static/uploads/pic_floor03_5@2x.png" alt />
          </navigator>
        </view>
      </view>
     
    </view>
  </view>
</template>

<script>
// 导入搜索组件，注册，使用
import search from '@/components/search.vue'
export default {
  components:{
    // 组件标签名，组件
    search
  },
  data() {
    return {
      h:'auto',//默认可以滚动
      swiperlist:[],//轮播图数据
      navlist:[]//导航菜单数据
    }
  },
  methods: {
    indexHeight(height){
      // console.log(height);
      // 赋值高度
      this.h=height
      
    },
    // 发送轮播图数据请求
   async getSwiper(){
      // uni.request({
      //   url:'https://www.uinav.com/api/public/v1/home/swiperdata',
      //   // method:'',
      //   // data:{},//参数
      //   // header:{},//请求头
      //   success:function (res) {
      //       console.log(res);
            
      //   }
      // })
      // 第二种promise形式uniapp封装好了
      let result = await this.http({
        url:"/api/public/v1/home/swiperdata"
      })
      console.log(result);
      
      // console.log(data[1]);
      // console.log(data[1].data);
    }
   
   },

  onLoad(){
    this.getSwiper()
  }
};
</script>

<style lang="less" scoped>
.swiper-box {
  // swiper默认有一个高度是150rpx
  swiper {
    height: 340rpx;
    navigator {
      width: 750rpx;
      height: 340rpx;
      // img {
      //   width: 100%;
      //   height: 100%;
      // }
    }
  }
}
.index .nav {
  padding: 30rpx 0;
  display: flex;
  navigator {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    img {
      width: 128rpx;
      height: 140rpx;
    }
  }
}
.box {
  .floor {
    .floor-title {
      background-color: #f4f4f4;
      padding-top: 30rpx;
      img {
        width: 750rpx;
        height: 60rpx;
      }
    }
    .item {
      padding: 20rpx 20rpx;
      overflow: hidden;
      navigator {
        float: left;
        width: 193rpx;
        height: 188rpx;
        margin-left: 10rpx;
        margin-bottom: 10rpx;
        // img {
        //   width: 100%;
        //   height: 100%;
        // }
      }
      navigator:nth-child(1) {
        height: 386rpx;
        margin-left: 0;
      }
      navigator:nth-child(2),
      navigator:nth-child(5){
          width: 273rpx;
          
      }
    }
  }
  // 处理第一个floor里第2和5
  .floor:nth-child(1){
    .item{
      navigator{
      width: 223rpx;
    }
    }
  }
}
</style>
