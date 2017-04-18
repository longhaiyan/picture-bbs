
export default (to, store) => {
	// console.debug("全局路由钩子.beforeEach", to, from, next);
  const {_type, current, keyword} = to.query

	// to.path
  let result = Object.assign({}, to.query)

	/*
	let td1={};
	switch( _type ){
		case "reload":
			console.log("重载列表数据");

		break;

		case "toPage":
			console.log("跳转到指定页号");
			td1 = {page:current};

		break;

		case "search":
			console.log("搜索");
			td1 = {
				keyword,
				page,
			};

		break;

		default:

	}
	*/

  return result
}
