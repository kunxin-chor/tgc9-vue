import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers:[
      {
        "id": 1,
        "name": "Kelvin Ho",
        "email": "kelvin@gemail.com"
      },
      {
        "id": 2,
        "name": "Tan Ah Mew",
        "email": "tanahmew@gemail.com"
      },
      {
        "id": 3,
        "name": "Susan Tan",
        "email": "susan@gemail.com"
      }
    ]
  },
  getters: {
    "customers":function(state){
      return state.customers;
    }
  },
  mutations: {
    "addNewCustomer":function(state, newCustomer) {
      state.customers.push({
        'id': Math.floor(Math.random() * 10000),
        'name': newCustomer.name,
        'email': newCustomer.email 
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
