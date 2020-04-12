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
		let response = await json(
			'https://raw.githubusercontent.com/anerodata/vue-portfolio/master/src/data/data.json'
		)
		response.forEach(d => {
			d.visible = true
			d.src = './../assets/img/1.png'
		})
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