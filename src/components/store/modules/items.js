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
	async fetchItems() {
		const response = await csv(
			'https://raw.githubusercontent.com/anerodata/vue-portfolio/master/src/data/data.csv'
		)
		// bind this 
		console.log(response)
	}
	// Filter anchors
}


export default {
	state,
	getters,
	actions
}