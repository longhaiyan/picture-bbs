import routerQuery from './routerQuery'

export default (options, store) => {
  const {to, from, next} = options

	console.debug("全局路由钩子.beforeEach", to, from);
	// console.debug("router.before.store", store);
	// const t_types = require('../store/service_message/types.js');
	let pname = "";
	if( /^\//.test( to.path) ){
		pname = to.path.slice(1).replace(/\//g,"_");
	}

	let tpath = `${pname}/as/start_main`;
	const t_types = store.hasOwnProperty(tpath);
	console.log( "触发页面初始 ACTIONS", tpath, t_types, store._actions[tpath] );

	// 判断是否有页面初始的 action
	if( store._actions[tpath] && store._actions[tpath].length ){
		let query = routerQuery(to)
		let payload = {
			...query
		}
		store.dispatch(tpath,payload);
	}

  next()
}
