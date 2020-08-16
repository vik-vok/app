import Vue from 'vue'
import Vuex from 'vuex'
import voices from './modules/voices'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    voices
  }
})