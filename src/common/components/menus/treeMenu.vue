<template>
    <div>
        <div  v-for="item in treeData">
            <router-link v-if="item.leaf && !item.hidden && item.children.length > 0" 
                :to="item.path + '/' + item.children[0].path">
                <el-menu-item 
                :index="item.path + '/' + item.children[0].path">
                    <i :class="item.iconCls"></i>
                    <span>{{ item.children[0].name }}</span>
                </el-menu-item>
            </router-link>

            <el-submenu :index="item.path" v-if="!item.leaf && !item.hidden">
                <template slot="title">
                    <i :class="item.iconCls"></i>
                    <span>{{ item.name }}</span>
                </template>

                <template v-for="child in item.children">

                    <tree-menu class='nest-menu' v-if="child.children && child.children.length > 0" :treeData='[child]'></tree-menu>

                    <router-link v-else 
                    :to="item.path + '/'+child.path">
                        <el-menu-item 
                        :index="item.path + '/'+child.path" 
                        :class="$route.path == '/' + item.path + '/' + item.children[0].path ? 'activeMenu':''">
                            <span>{{ child.name }}</span>
                        </el-menu-item>
                    </router-link>
                </template>

            </el-submenu>
        </div>
    </div>
</template>

<script>
    export default{
        name:'treeMenu',
        props: {
            treeData: {
                type: Array
            }
        }
    }
</script>