import * as d3 from 'd3'
const state = {
	items: [

	]
}

const getters = {
	allItems: (state) => state.items
}
// Fetch anchors
const actions = {
	async fetchItems() {
		const response = await d3.csv(
			'https://gist.githubusercontent.com/anerodata/1dc73d3e6bb314d7a6fae88023923a82/raw/d9fc13d7e689a8f4cbf8afd3c65354efff3633fb/traffic-airports.csv'
		)
		console.log(response)
	}
}
// Filter anchors

export default {
	state,
	getters,
	actions
}