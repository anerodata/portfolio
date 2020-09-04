<template>
 <div class="body-container">
  <div class="items-container">
    <Item :item="item" v-for="(item, index) in sortedItems" :key="index"/>
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
    items: Array
  },

  computed: {
    sortedItems() {
      const res = this.items
      return res.sort((a, b) => new Date (b.fecha) - new Date(a.fecha) )
    }
  }
}
</script>

<style scoped>
  .body-container {
    min-height: 100vh;
  }

  .items-container {
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
		.items-container{
	    	grid-template-columns: repeat(2, 1fr);
        margin: 0px;
	 	}
	}
	@media only screen and (max-width: 500px) {
		.items-container{
	    	grid-template-columns: repeat(1, 1fr);
	 	}
	}
</style>