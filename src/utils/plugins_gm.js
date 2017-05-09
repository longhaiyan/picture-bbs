const MyPlugin = {}
MyPlugin.install = function(Vue, options) {
  // 实例中全局方法集合
  /* Vue.prototype.$GM = {
   fn1(){
   console.log("自定义实例 $GPP.fn() 被执行", this, Vue.prototype );
   },
   routerPush(data){
   console.log("自定义实例 $GPP.fn() 被执行", this, Vue.prototype );
   console.info( router );
   }
   } */

  Vue.prototype.GM_routerPush = function(ops) {
    console.debug('插件-GM_routerPush', ops)
    // console.log("自定义实例 $GPP.fn() 被执行", this.$router, Vue.prototype );
    let config = {}

    if (ops.hasOwnProperty('path')) {
      config.path = ops.path
    }

    if (ops.hasOwnProperty('query')) {
      config.query = {
        ...this.$route.query,
        ...ops.query,
        _: Date.now().toString() // 添加时间戳，帮助 url 变化，以触发钩子
      }
    }

    this.$router.push(config)
  }
}

export default MyPlugin
