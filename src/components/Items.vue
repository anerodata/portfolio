<template>
 <div class="body">
  <div id="filter_container">
    <button class="filter_btn" v-for="org in orgs" :key="org.value" v-bind:class="[org.name.replace(' ', '-'), {'shown': org.show}]" v-on:click="filterItems(org)">
      {{ org.name }}
    </button>
  </div>
  <div class="items_container">
 	<div v-for="(item, index) in items" :key="index" class="item" v-bind:class="[item.organización.replace(' ', '-'), {'not-visible' : !item.visible}]">
		<a :href="item.url" target="_blank">
			<div class="item_header">
        <div class="item_img">
          <img style="max-width: 100%;" :src="'https://raw.githubusercontent.com/anerodata/vue-portfolio/master/src/assets/img/'+item.id+'.png'">
				</div>
        <h3>
					{{item.titulo}}
				</h3>
				<div class="item_info">
					<span>{{item.fecha}}</span> - 
          <span class="item_organization">{{item.organización}}</span> - 
          <span class="item_description">{{item.descripción}}</span>
				</div>
			</div>
		</a>
		<div>
			<div class="item_package">
				<span v-for="(biblioteca, index) in item.biblioteca" :key="index">
					{{biblioteca}}
				</span>
			</div>
		</div>
	</div>
</div>
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Items',
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
            name: 'anerodata',
            show: false
          }
        ]
      }
  },
  created() {
    this.fetchItems()
  },
  methods: {
    ...mapActions(['fetchItems']),
    filterItems(org) {
      // Clean show attributte in all orgs unless the selected one
      this.orgs.forEach(d => {
        if (org != d)
          d.show = false
      }) 
      org.show = !org.show
      this.items.forEach(d => {
        // If org.show is true hid the cards that are not related to org...
        if(d['organización'] !== org.name && org.show) {
          d.show = false
          d.visible = false
        // ... else show everything or cards related to org
        } else {
          d.visible = true  
        }
      })
    }
  },
  computed: mapGetters(['items'])
}
</script>

<style scoped>
  .body {
    min-height: 100vh;
  }

  #filter_container {
    margin: 0 0 20px 7px;
  }

  .filter_btn {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }

 .filter_btn.shown {
    text-decoration: underline;
  }

  .El-Confidencial {
    color: #66D9EF;
  } 

  .Civio{
    color: #A6E22E;
  } 

  .anerodata {
    color: khaki;
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
	}

	.item {
    flex-basis: 29%;
    margin: 10px 1%;
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

  .item_info {
    font-size: 0.9em;
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

  .item.not-visible {
    display: none;
  }

  .item_img {
    max-height: 225px;
    overflow: hidden;
  }

  .item img {
    filter: grayscale(100%);
    filter: saturate(0%);
    transition: all 0.5s ease-in;
  }

  .item img:hover {
    filter: grayscale(0%);
    filter: saturate(150%);
  }

  a {
    text-decoration: none;
    color: white;
  }

  h3 {
    font-weight: normal;
    margin: 10px 0;
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