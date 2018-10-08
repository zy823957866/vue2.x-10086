import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './common/router/index'
import store from './common/store/index'
import i18n from './common/lang/index'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  el: '#app',

  render: h => h(App),

  //路由
  router,

  //数据仓库
  store,

  i18n,

  components: { App },
  template: '<App/>'
})
