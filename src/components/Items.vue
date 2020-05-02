<template>
 <div class="body">
  <FilterBtn :orgs="orgs" @filter-org="filterOrg"/>
  <Columns :items="items"/>
  <div class="items_container">
    <Item :item="item" :noSelectedOrgs="noSelectedOrgs" :selectedOrg="selectedOrg" v-for="(item, index) in sortedItems" :key="index"/>
  </div>
 </div>
</template>

<script>
import Columns from './Columns.vue'
import FilterBtn from './FilterBtn.vue'
import Item from './Item.vue'
export default {
  name: 'Items',
  components: {
    FilterBtn,
    Columns,
    Item
  },
  props: {
    items: Array
  },
  data() {
    return {
      orgs: [
          {
            name: 'El Confidencial',
            clicked: false
          },
    
          {
            name: 'Civio',
            clicked: false
          },

          {
            name: 'Otros',
            clicked: false
          }
        ],
      noSelectedOrgs: [],
      selectedOrg: 'all'
      }
  },
  computed: {
    sortedItems() {
      const res = this.items
      return res.sort((a, b) => new Date (b.fecha) - new Date(a.fecha) )
    },
    
  },
  methods: {
    listTreemap() {
      const res = this.items.reduce((acc, obj) => {
        // Loop in library array
        obj.biblioteca.forEach((bib) => {

          // Get tec (js, py) and lib (Leaflet, bs4)
          let keyTec = bib.split('.')[1]
          let keyLib = bib.split('.')[0]
          
          // If global children array doesn't have and object with tec name...
          if(!acc.children.some(allChild => allChild.name === keyTec)) {
              //... create it
              acc.children.push({name: keyTec, children: []})
          }

          // Get children tec array
          let keyList = acc.children.filter(allChild => allChild.name === keyTec)[0]

          // If children tec array doesn't have and object with lib name...
          if(!keyList.children.some(tecChild => tecChild.name === keyLib)) {
            //... create it
            keyList.children.push({name: keyLib, value: 1})
          } else {
            // Otherwise, add 1 to value property of the array
            let tecList = keyList.children.filter(tecChild => tecChild.name === keyLib)[0]
            tecList.value += 1
          }
          
        })
        return acc
      }, { name: 'all', children: [] })

      
      console.log(res)
      return false
    },
    filterOrg(orgValue) {
      this.listTreemap()
      this.selectedOrg = orgValue
      this.noSelectedOrgs = []
      this.orgs.forEach(org => {
        if(org.name !== orgValue) {
          this.noSelectedOrgs.push(org.name)
        }
      })
    this.selectedOrg = orgValue
    }
  }
}
</script>

<style scoped>
  .body {
    min-height: 100vh;
  }

  .items_container {
		/* display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1.5rem;*/
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: flex-start;    
    margin: 0 10px;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
	}

 	@media only screen and (max-width: 700px) {
		.items_container{
	    	grid-template-columns: repeat(2, 1fr);
	 	}
	}
	@media only screen and (max-width: 500px) {
		.items_container{
	    	grid-template-columns: repeat(1, 1fr);
	 	}
	}
</style>