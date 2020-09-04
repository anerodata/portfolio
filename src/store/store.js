import Vue from 'vue'
import Vuex from 'vuex'
import { json } from 'd3-fetch'
import { ORGS } from './../data/variables.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		// Items
		allItems: [],
		// Filtered items
		items: [],
		// Orgs
		orgs: ORGS,
		// Current orgs
		selectedOrg: 'all'
	},
	mutations: {
		fetchItems: (state, response) => {
			state.allItems = response
			state.items = state.allItems
		},
		filterItems: (state, payload) => {
			state.selectedOrg = payload
			if (payload === 'all') {
				state.items = state.allItems
			} else if(payload === 'Otros') {
				state.items = state.allItems.filter(d => {
					return d['organización'] !== 'El Confidencial' && d['organización'] !== 'Civio'
				})
			} else {
				state.items = state.allItems.filter(d => {
					return d['organización'] === payload
				})
			}
		}
	},
    actions: {
    	fetchItems: context => {
    		json('https://raw.githubusercontent.com/anerodata/portfolio/master/src/data/data.json')
				.then((response) => {
					console.log(response)
					context.commit('fetchItems', response)
				})
    	},
    	filterItems: (context, payload) => {
    		context.commit('filterItems', payload)
    	}
    }
})