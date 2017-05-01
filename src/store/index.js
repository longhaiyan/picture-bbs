/**
 * Created by longhaiyan on 17/3/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import test from './test'
import myGlobal from './global'
import myIndex from './my_index'
import myZoom from './my_zoom'
import setting from './setting'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        test,
        myGlobal,
        myIndex,
        myZoom,
        setting
    }
})

export default store

