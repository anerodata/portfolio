<template>
 <div class="body">
  <FilterBtn :orgs="orgs" :items="items"/>
  <div class="items_container">
    <Item :item="item" v-for="(item, index) in items" :key="index"/>
  </div>
 </div>
</template>

<script>
import Item from './Item.vue'
import FilterBtn from './FilterBtn.vue'
export default {
  name: 'Items',
  components: {
    Item,
    FilterBtn
  },
  props: {
    items: Array
  },
  data() {
    return {
      orgs: [
          {
            name: 'El Confidencial',
            show: false
          },
    
          {
            name: 'Civio',
            show: false
          },
    
          {
            name: 'Antonio',
            show: false
          }
        ]
      }
  },
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