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
        <swiper-item v-for="item in swiperlist" :key="item.goods_id" >
          <navigator url="/pages/goods/index" class="nav">
            <img :src="item.image_src" alt />
          </navigator>
        </swiper-item>
      </swiper>
    </view>
    <!-- 导航部分 -->
    <view class="nav">
      <!-- key只要是唯一的就行 -->
      <navigator url="/pages/category/index" v-for="item in navlist" :key="item.image_src">
        <img :src="item.image_src" alt />
      </navigator>
    </view>
    <!-- 内容部分 -->
    <view class="box">
      <!-- 每个楼层包含标题和5个图片内容 -->
      <view class="floor" v-for="(item,index) in floors" :key="index">
        <!-- 标题 -->
        <view   class="floor-title">
          <img :src="item.floor_title.image_src" alt />
        </view>
        <!-- 5个图片 -->
        <view class="item" >
          <navigator url  v-for=" sub in item.product_list" :key="sub.name">
            <img :src="sub.image_src" alt />
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
      navlist:[],//导航菜单数据
      floors:[]//内容图片数据
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
      this.swiperlist=result.message
    },
     async getnavs(){
       let res =await this.http({
         url:"/api/public/v1/home/catitems"
       })
       console.log(res);
       this.navlist=res.message
    },
     async getfloors(){
       let data =await this.http({
         url:"/api/public/v1/home/floordata"
       })
       console.log(data);
       this.floors=data.message
    }
  },
  onLoad(){
    this.getSwiper(),
    this.getnavs(),
    this.getfloors()
  },
  // 监听下拉刷新函数
  onPullDownRefresh(){
    console.log('下拉刷新了')
    // 下拉刷新就是把所有的数据从新获取一遍
     this.getSwiper(),
    this.getnavs(),
    this.getfloors()
  }
}
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
