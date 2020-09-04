import Vue from 'vue'
import Vuex from 'vuex'
import { json } from 'd3-fetch'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		allItems: [],
		// Filtered version
		items: []
	},
	mutations: {
		fetchItems: (state, response) => {
			state.allItems = response
			state.items = state.allItems
		}
	},
    actions: {
    	fetchItems: context => {
    		json('https://raw.githubusercontent.com/anerodata/portfolio/master/src/data/data.json')
				.then((response) => {
					console.log(response)
					context.commit('fetchItems', response)
					return context.state.items
				})
    	}
    }
})