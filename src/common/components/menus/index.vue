<template id="e-menu">
    <div class="menu">
        <el-menu :default-active="activeIndex" @select="selectItems">
            <tree-menu :treeData="permission_router"></tree-menu>
        </el-menu>
    </div>
</template>

<script>
    import TreeMenu from './treeMenu'
    import { mapGetters } from 'vuex'

	export default {
        name:"emenu",
        components:{
            TreeMenu
        },
        data() {
            return {
                activeIndex : '/dashboard/index'
            };
        },
        created:function(){
            this.defaultIdex()
        },
        computed:{
            ...mapGetters([
                'permission_router'
            ])
        },
		methods: {
            selectItems(index){
                // console.log(index);
            },
            defaultIdex(){
                // let path = this.$route.path;
                // console.log(this.$route);
            }
        },
        beforeUpdate:function(){
            // return{
            //     activeIndex:this.$route.matched[1].path
            // }
        }
	}
</script>

<style lang="scss">
	.menu{
		.el-menu{
			border-right: none;
			background-color: rgba(0,0,0,0);
            .el-menu{
                background: #222834;
                li:hover{
                    background: #1e232e;
                }
            }
			.el-submenu__title{
				color:#b8c6d6;
			}

			.el-menu-item{
				color:#b8c6d6;
                &:focus{
                    background: #1e232e;
                }
			}

            .activeMenu{
                background: red;
            }

            .is-active{
                &:focus,&:hover{
                    background: #1e232e;
                }
            }

            .el-submenu__title,.el-menu-item{
                &:hover{
                    background: none;
                    color: #fff;
                    i{
                        color: #fff;
                    }
                }
            }
			i{
				color: #b8c6d6;
			}
		}
	}
</style>