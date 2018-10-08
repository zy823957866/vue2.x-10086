<template>
   <div id="app">
      <el-container>
         <!-- 头部 -->
         <el-header height="72px">
            <e-header></e-header>
         </el-header>
         
         <el-container>
            <el-aside>
               <e-menu></e-menu>            <!-- 菜单 -->
            </el-aside>

            <el-container>
               <el-main>
                  <app-main></app-main>            <!-- 内容 -->
               </el-main>

               <el-footer>
                  <e-footer></e-footer>     <!-- 底部 -->
               </el-footer>
            </el-container>

         </el-container>
      </el-container>
   </div>
</template>

<script>
   import EHeader from './common/components/header/index';
   import EMenu from './common/components/menus/index';
   import EFooter from './common/components/footer/index';
   import AppMain from './common/components/layout/index';

   export default {
      name: 'App',
      components:{
         EHeader,
         EMenu,
         EFooter,
         AppMain
      }
   }
</script>

<style lang="scss">
   #app {
      height:100%;
      section{
         height: 100%;
      }
      .el-aside{
         width:216px !important;
         background: #2a3241;
      }
      .el-main{
         padding: 0;
         margin: 0;
         height: 100%;
         overflow-y: auto;
         background: #f1f4f9;
      }
      .el-footer{
         padding:0;
         height: 48px !important;
      }
   }

   .el-header{
      padding:  0;
   }
</style>
