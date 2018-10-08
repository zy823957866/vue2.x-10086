import Vue from 'vue';
import Vuex from 'vuex';
import Permission from './modules/permission';
import User from './modules/user';
import getters from "@/common/store/getters";

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		Permission,
		User
	},
	getters
});

export default store;