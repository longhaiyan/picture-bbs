/**
 * Created by longhaiyan on 17/3/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import test from './test'
import myGlobal from './global'
import myIndex from './my_index'
import myZone from './my_zone'
import setting from './setting'
import discover from './discover'
import myWaterfallSlot from './my_waterfall_solt'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        test,
        myGlobal,
        myIndex,
        myZone,
        setting,
        discover,
        myWaterfallSlot
    }
})

export default store

