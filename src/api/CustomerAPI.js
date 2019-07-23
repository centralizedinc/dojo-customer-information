import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;

export default class CustomerAPI {

    // static fetch(){
    //     return axios.get('/accounts')
    // }

    static add(customer){
        return axios.post('/customer', customer)
    }

    static edit(customer){
        return axios.post('/customer/'+customer._id, customer)
    }
}
