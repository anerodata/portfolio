<template>
 <div class="items_container">
 	<div v-for="(item, index) in items" :key="index" class="item" v-bind:class="item.organización.replace(' ', '-')">
		<a :href="item.url" target="_blank">
			<div>
				<h3>
					{{item.titulo}}
				</h3>
				<div>
					<span>{{item.fecha}}</span> - <span class="item_organization">{{item.organización}}</span>
				</div>
			</div>
		</a>
		<div>
			<div class="item_description">
				{{item.descripción}}
			</div>

			<div class="item_package">
				<span v-for="(biblioteca, index) in item.biblioteca" :key="index">
					{{biblioteca}}
				</span>
			</div>
		</div>
	</div>
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Items',
  methods: {
    ...mapActions(['fetchItems'])  
  },
  created() {
    this.fetchItems()
  },
  computed: mapGetters(['items'])
}
</script>

<style scoped>
   .items_container {
  		display: grid;
  		grid-template-columns: repeat(3, 1fr);
  		grid-gap: 1rem
  	}
  	.item {
  		background: #272822;
  		padding: 7px;
  		border-radius: 9px;
  		border: 1px solid #272822;
      box-shadow: 3px 5px 10px #888888;
      color: white;
  	}

    .item.El-Confidencial .item_organization {
      color: #66D9EF;
      font-weight: bold;
    }

    .item.El-Confidencial {
      box-shadow: 3px 5px 10px #66D9EF;
    } 

    .item.Civio .item_organization {
      color: #A6E22E;
      font-weight: bold;
    }

    .item.Civio {
      box-shadow: 3px 5px 10px #A6E22E;
    }

    .item.anerodata .item_organization {
      color: khaki;
      font-weight: bold;
    }

    .item.anerodata {
      box-shadow: 3px 5px 10px khaki;
    }

  	a {
  		text-decoration: none;
  		color: white;
  	}
  	h3 {
  		font-weight: normal;
  		margin: 10px 0;
      color: white;
  	}

  	.item_description {
  		margin: 5px 0;
  	}

  	.item_package span {
  		border: 1px solid mediumpurple;
      color: mediumpurple;
  		border-radius: 3px;
  		padding: 3px;
  		margin: 10px 5px;
  		display: inline-block;
  		background: #272822;
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