import RouterMap from '@/common/mock/menus';

const permission = {
	state : {
		routers : RouterMap,
		addRouters : []
	},
	mutations : {
		authRouter : state => {
			state.addRouters = routers;
		}
	},
	actions : {

	}
}

export default permission;