<template>
 <div class="body">
  <div class="items_container">
    <Item :item="item" :noSelectedOrgs="noSelectedOrgs" :selectedOrg="selectedOrg" v-for="(item, index) in sortedItems" :key="index"/>
  </div>
 </div>
</template>
<script>
import Item from './Item.vue'
export default {
  name: 'Items',
  components: {
    Item
  },
  props: {
    items: Array,
    noSelectedOrgs: Array,
    selectedOrg: String,
    orgs: Array
  },
  
  computed: {
    sortedItems() {
      console.log(this.items)
      const res = this.items
      return res.sort((a, b) => new Date (b.fecha) - new Date(a.fecha) )
    }
  },
  methods: {
    
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