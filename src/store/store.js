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
		// Treemap JSON
		treemapData: {},
		// Orgs
		orgs: ORGS,
		// Current orgs
		filter: 'all'
	},
	getters: {
		items: (state) => {
			return state.items
		},

		treemapData: (state) => {
			return state.treemapData
		},

		orgs: (state) => {
			return state.orgs
		},

		filter: (state) => {
			return state.filter
		}
	},
	mutations: {
		setItems: (state, response) => {
			state.allItems = response
			state.items = state.allItems
		},

		setFilter: (state, payload) => {
			state.filter = payload.value
		},

		filterItems: (state, payload) => {
			if (state.filter === 'all') {
				state.items = state.allItems
			} else if(state.filter === 'Otros') {
				state.items = state.allItems.filter(item => {
					let b = true
					for(let i in state.orgs) {
						if (item[payload.key] === state.orgs[i].name) {
							b = false
							break
						}
					}
					return b
				})
			} else {
				state.items = state.allItems.filter(item => {
					return item[payload.key].indexOf(payload.value) !== -1
				})
			}
		},

		setTreemapData: (state) => {
			const res = state.items.reduce((acc, obj) => {
			// Loop in library array
				obj.biblioteca.forEach((bib) => {

					// Get tec (js, py) and lib (Leaflet, bs4)
					const keys = bib.split('.')
					let keyTec = keys[1]
					let keyLib = keys[0]
					if(keys[1] === undefined) {
						keyTec = 'Otras'
					}
					// If global children array doesn't have and object with tec name...
					if(!acc.children.some(allChild => allChild.name === keyTec)) {
					  //... create it
						acc.children.push({name: keyTec, sum: 0, children: []})
					}

					// Get children tec array
					const keyList = acc.children.filter(allChild => allChild.name === keyTec)[0]

					// If children tec array doesn't have and object with lib name...
					if(!keyList.children.some(tecChild => tecChild.name === keyLib)) {
						//... create it
						keyList.children.push({name: keyLib, value: 1})
						keyList.sum += 1
					} else {
						// Otherwise, add 1 to value property of the array
						const tecList = keyList.children.filter(tecChild => tecChild.name === keyLib)[0]
						tecList.value += 1
						keyList.sum += 1
					}
       			})
		        return acc
		    }, { name: 'all', children: [] })
			res.children = sortArr(res.children, 'sum')
			res.children.forEach(child => { sortArr(child.children, 'value') })
			function sortArr(arr, prop) {
				return arr.sort((a, b) => {
					if(a[prop] < b[prop]) {
					  return 1
					} else {
					  return -1
					}
				})
    		}
			state.treemapData = res
		}
	},

    actions: {
    	fetchItems: (context) => {
    		json('https://raw.githubusercontent.com/anerodata/portfolio/master/src/data/data.json')
    			.then(response => {
    				context.commit('setItems', response)	
					context.commit('setTreemapData')
    			})
    	},

    	filterItems: (context, payload) => {
    		context.commit('setFilter', payload)
    		context.commit('filterItems', payload)
    	}
    }
})