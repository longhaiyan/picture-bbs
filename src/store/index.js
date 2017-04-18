/**
 * Created by longhaiyan on 17/3/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import test from './test'
import myGlobal from './global'
// import index from './index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        test,
        myGlobal,
        // index
    }
})

export default store

