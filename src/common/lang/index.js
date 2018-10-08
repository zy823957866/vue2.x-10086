import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

if(!Cookies.get('lang')){
	Cookies.set('lang', 'zh');
}

const i18n = new VueI18n({
    locale: Cookies.get('lang'),
    messages: {
    	'zh': require('./package/zh-cn/index'),
    	'en': require('./package/en/index')
    }
})

export default i18n;