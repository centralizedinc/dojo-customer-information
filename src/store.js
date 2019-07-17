import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers: [
      {
        key: "1",
        name: "John Brown",
        type: "Dojo",
        remain: "1/10",
        valid: "July 12, 2019",
        login: "10:00AM"
      },
      {
        key: "2",
        name: "Joe Black",
        type: "Boxing",
        remain: "1/10",
        valid: "July 1, 2019",
        login: "8:00AM"
      },
      {
        key: "3",
        name: "Jim Green",
        type: "Dojo",
        remain: "5/10",
        valid: "July 3, 2019",
        login: "9:00AM"
      },
      {
        key: "4",
        name: "Mr. Bean Triallanes Duterte",
        type: "Boxing",
        remain: "3/10",
        valid: "July 9, 2019",
        login: "11:00AM"
      }
    ]

  },
  mutations: {
    ADD_CUSTOMER(state, payload){
      console.log("###STATE_CUSTOMERs:###" + JSON.stringify(state.customers))
      state.customers.push(payload)
      console.log("###ADD_CUSTOMER:###" + JSON.stringify(payload))
    }

  },
  actions: {

  }
})
