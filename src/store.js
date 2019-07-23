import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time_in:[],
    time_out: [],
    selectedCustomer:{},
    customers: [
      {
        key: "1",
        name: "John Brown",
        membership:"Member",
        programmes: "Dojo",
        remaining_session: 1,
        total_session: 10,
        valid: "July 12, 2019",
        last_login: " July 2, 2019 - 8:00AM",
        time_in: " July 10, 2019 - 10:00AM"
      },
      {
        key: "2",
        name: "Joe Black",
        membership:"Non-Member",
        programmes: "Boxing",
        remaining_session: 2,
        total_session: 10,
        valid: "July 1, 2019",
        last_login: " July 1, 2019 - 7:00AM",
        time_in: " July 5, 2019 - 8:00AM"
      },
      {
        key: "3",
        name: "Jim Green",
        membership:"Walkin",
        programmes: "Dojo",
        remaining_session: 5,
        total_session: 10,
        valid: "July 3, 2019",
        last_login: " July 2, 2019 - 7:00AM",
        time_in: " July 4, 2019 - 9:00AM"
      },
      {
        key: "4",
        name: "Mr. Bean Triallanes Duterte",
        membership:"Member",
        programmes: "Boxing",
        remaining_session: 9,
        total_session: 10,
        valid: "July 9, 2019",
        last_login: " July 1, 2019 - 9:00AM",
        time_in: " July 2, 2019 - 11:00AM"
      },
      {
        key: "5",
        name: "Jasmine Smith",
        membership:"Walkin",
        programmes: "Dojo",
        remaining_session: 7,
        total_session: 10,
        valid: "July 31, 2019",
        last_login: " June 29, 2019 - 10:00AM",
        time_in: " July 1, 2019 - 7:00AM"
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
    },
    LOGOUT: function(state, payload){
      state.time_out.push(payload);
    },

  },
  actions: {

  }
})
