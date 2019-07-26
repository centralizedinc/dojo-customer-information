import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time_in:[],
    time_out: [],
    selectedCustomer:{},
    customers: []

  },
  mutations: {
    SET_CUSTOMERS(state, payload){
      state.customers = payload
    },
    ADD_CUSTOMER(state, payload){
      console.log("###STATE_CUSTOMERs:###" + JSON.stringify(state.customers))
      state.customers.push(payload)
      console.log("###ADD_CUSTOMER:###" + JSON.stringify(payload))
    },
    SELECT_CUSTOMER(state, payload){
      state.selectedCustomer = payload
    },
    ADD: function(state, payload){
      state.count++;
    },
    LOGIN: function(state, payload){
      state.time_in.push(payload);
    },
    LOGOUT: function(state, payload){
      state.time_out.push(payload);
    },

  },
  actions: {

  }
})
