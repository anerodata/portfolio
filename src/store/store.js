import Vue from 'vue'
import Vuex from 'vuex'
import { json } from 'd3-fetch'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: [],
    software: 'all'
  },
  getters: {
    items: (state) => {
      return state.items
    }
  },
  mutations: {
    setItems: (state, response) => {
      state.allItems = response
      state.items = state.allItems
    }
  },
  actions: {
    fetchItems: (context) => {
      json('https://raw.githubusercontent.com/anerodata/portfolio/master/src/data/assignments.json')
        .then(response => {
          context.commit('setItems', response)
        })
    }
  }
})
