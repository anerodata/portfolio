<template>
 <div class="body">
  <FilterBtn :orgs="orgs" @filter-org="filterOrg"/>
  <div class="items_container">
    <Item :item="item" :noSelectedOrgs="noSelectedOrgs" :selectedOrg="selectedOrg" v-for="(item, index) in sortedItems" :key="index"/>
  </div>
 </div>
</template>
<script>
import FilterBtn from './FilterBtn.vue'
import Item from './Item.vue'
export default {
  name: 'Items',
  components: {
    FilterBtn,
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
      console.log(this.items)
      const res = this.items
      return res.sort((a, b) => new Date (b.fecha) - new Date(a.fecha) )
    }
  },
  methods: {
    filterOrg(orgValue) {
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