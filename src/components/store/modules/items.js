import { csv } from 'd3-fetch'
const state = {
	items: [

	],
	itemsSelected: [

	],
	itemsAgg: [

	],
	tecs: [

	],
	libs: [

	]
}

const getters = {
	items: (state) => state.items,
	itemsSelected: (state) => state.itemsSelected,
	itemsAgg: (state) => state.itemsAgg,
	tecs: (state) => state.tecs,
	libs: (state) => state.libs
}

const actions = {
	// Fetch anchors
	async fetchItems({commit}) {
		const response = await csv(
			'https://raw.githubusercontent.com/anerodata/vue-portfolio/master/src/data/data.csv'
		)
		console.log(commit)
		// bind this
		commit('setItems', response)
		console.log(state)
	}
	// Filter anchors
}

const mutations = {
	setItems: (state, items) => state.items = items
}


export default {
	state,
	getters,
	actions,
	mutations
}