import api from "@/api/CustomerAPI";

const initialState = {
  customers: [],
  selectedCustomer:{}
};

const state = initialState;

const mutations = {
    ADD_CUSTOMER(state, payload){
        console.log("###STATE_CUSTOMERs:###" + JSON.stringify(state.customers))
        state.customers.push(payload)
        console.log("###ADD_CUSTOMER:###" + JSON.stringify(payload))
      },
      SELECT_CUSTOMER(state, payload){
        state.selectedCustomer = payload
      }
}

// const actions = {
//   FETCH_ACCOUNTS(context) {
//     return api.fetch()
//   },
//   ADD_ACCOUNT(context, account) {
//     return api.add(account)
//   },
//   EDIT_ACCOUNT(context, account) {
//     return api.edit(account)
//   },
//   GET_ACCOUNTS(context, refresh) {
//     return new Promise((resolve, reject) => {
//       if (refresh || !context.state.account_list.length) {
//         api.fetch()
//           .then((result) => {
//             if (result.data.success) {
//               context.commit('SET_ACCOUNTS', result.data.model)
//               resolve(result.data.model)
//             } else {
//               reject(result.data.errors)
//             }
//           }).catch((err) => {
//             reject(err)
//           });
//       } else {
//         resolve(context.state.account_list)
//       }
//     })
//   }
// }

export default {
  state,
  mutations,
  actions
};