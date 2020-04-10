<template>
<!-- 每个组件都有一个根标签，给个类名 -->
	<view class="index">
		<!-- 头部search搜索框 -->
		<view class="search">
			<view class="search-input">
				<input placeholder="请输入搜索商品" type="text" />
			</view>
			<!-- 搜索结果内容 -->
			<view class="search-content">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.search .search-input{
		background-color: #ea4451;
		padding: 18rpx;
	}
	.search .search-input input{
		background-color: #fff;
		font-size: 26rpx;
		color:#eee ;
		padding-left:15rpx ;
		height: 60rpx;
	}
</style>
