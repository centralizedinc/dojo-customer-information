import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 100,
    time_in:[],
    time_out: [],
    Islogin:false,
    selectedCustomer:{},
    customers: [
      {
        key: "1",
        name: "John Brown",
        type: "Dojo",
        remaining_session: 1,
        total_session: 10,
        valid: "July 12, 2019",
        login: "10:00AM"
      },
      {
        key: "2",
        name: "Joe Black",
        type: "Boxing",
        remaining_session: 2,
        total_session: 10,
        valid: "July 1, 2019",
        login: "8:00AM"
      },
      {
        key: "3",
        name: "Jim Green",
        type: "Dojo",
        remaining_session: 5,
        total_session: 10,
        valid: "July 3, 2019",
        login: "9:00AM"
      },
      {
        key: "4",
        name: "Mr. Bean Triallanes Duterte",
        type: "Boxing",
        remaining_session: 9,
        total_session: 10,
        valid: "July 9, 2019",
        login: "11:00AM"
      },
      {
        key: "5",
        name: "Jasmine Smith",
        type: "Dojo",
        remaining_session: 7,
        total_session: 10,
        valid: "July 31, 2019",
        login: "7:00AM"
      }
    ]

  },
  mutations: {
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
      state.Islogin = true
    },
    LOGOUT: function(state, payload){
      state.time_out.push(payload);
      state.Islogin = false
    },

  },
  actions: {

  }
})
