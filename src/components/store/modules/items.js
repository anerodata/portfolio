import { json } from 'd3-fetch'
const state = {
	items: [

	]
}

const getters = {
	items: (state) => state.items
}

const actions = {
	// Fetch anchors
	async fetchItems({commit}) {
		const response = await json(
			'https://raw.githubusercontent.com/anerodata/vue-portfolio/master/src/data/data.json'
		)
		commit('setItems', response)
	}
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