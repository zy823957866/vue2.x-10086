<template>
	<el-container class="nav">
		<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">
  				<template>
  					<i class="el-icon-download el-icon"></i>
          			<span>下载中心</span>
  				</template>
  			</el-menu-item>
  			<el-menu-item index="2">
  				<template>
  					<i class="el-icon-question el-icon"></i>
          			<span>帮助文档</span>
  				</template>
  			</el-menu-item>
  			<el-submenu index="3" class="header_with_icon">
  				<template slot="title">
  					<i class="el-icon-menu el-icon"></i>
          			<span>{{ currentLanguage }}</span>
  				</template>
				<el-menu-item index="zh">中文</el-menu-item>
			    <el-menu-item index="en">英文</el-menu-item>
  			</el-submenu>

  			<el-submenu index="4" class="header_with_icon">
  				<template slot="title">
  					<i class="el-icon-info el-icon"></i>
          			<span>JHON</span>
  				</template>
  				<p class="user_belong">归属：石家庄扬天科技有限公司</p>
  				<el-menu-item index="4-1">
  					<i class="el-icon-share el-icon"></i>
  					<span>个人信息</span>
  				</el-menu-item>
  				<el-menu-item index="4-2">
  					<i class="el-icon-share el-icon"></i>
  					<span>密码修改</span>
  				</el-menu-item>
  				<el-menu-item index="4-3">
  					<i class="el-icon-share el-icon"></i>
  					<span>退出账户</span>
  				</el-menu-item>
  			</el-submenu>
		</el-menu>
	</el-container>
</template>

<script>
	import Cookies from 'js-cookie'

	export default{
		data() {
      		return {
        		activeIndex: '1',
        		currentLanguage : ''
      		};
    	},
    	mounted() {
    		this.initLanguage();
    	},
    	methods: {

    		//初始化语言
    		initLanguage(){
    			this.currentLanguage = Cookies.get('lang') == 'zh' ? '中文' : 'ENGLISH';
    		},

    		// 语言切换
      		handleSelect(key) {
        		if( Cookies.get('lang') != key){

        			Cookies.set('lang', key);

        			location.reload();
        		}
      		}
    	}
	}
</script>

<style lang="scss">
	.nav{
		float: right;
		padding-right: 58px;
		.el-menu--horizontal{
			border:none;
			background: none;

			.el-menu-item{
				line-height: 72px;
				height:72px;
				background: none;
				color:#405060;
				border: none;
				padding: 0 13px;
				&:hover{
					background-color: #b4bfcc;
					color:#fff;
					i{
						color: #fff;
					}
				}
				i{
					color: #405060;
				}
			}

			.header_with_icon{
				color:#405060;
				.el-submenu__title{
					line-height: 72px;
					height:72px;
					padding: 0 13px;
					color: #405060;
					&:before,&:not(.is-disabled):focus,&:not(.is-disabled):hover,&:hover{
						background-color: #b4bfcc;
						color:#fff;
					}
				}
				&:hover i{
					color: #fff;
				}
				i{
					color: #405060;
				}
				p{
					font-size: 12px;
					line-height: 20px;
				}
			}
			.el-submenu.is-active .el-submenu__title{
				border-bottom:none;
			}
		}
	}
	.user_belong{
		line-height: 20px;
		font-size: 12px;
		padding: 10px;
		color: #333;
	}

	.el-menu--popup-bottom-start{
		.active{
			color: #333;
		}
		.el-menu-item{
			font-size: 14px;
			color: #333 !important;
			&:hover{
				color: #fff !important;
				background: #49a1ea;
			}
		}
	}
</style>