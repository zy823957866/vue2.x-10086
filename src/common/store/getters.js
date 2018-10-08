const getters = {
	userName : state => state.User.name,
	userBelong : state => state.User.belong,
	permission_router: state => state.Permission.routers,
	addRouters : state => state.Permission.addRouters
}

export default getters;