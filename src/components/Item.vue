<template>
	<div class="item" :class="[classItem(), {'not-visible' : !item.visible}]">
		<a :href="item.url" target="_blank">
  			<div class="item_header">
          <div class="item_img">
            <img style="max-width: 100%;" :src="require('./../assets/img/'+item.id+'.png')">
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
</template>
<script>
	export default {
		name: 'Item',
		props: ['item'],
		methods: {
			classItem() {
				return this.item.organización.replace(' ', '-');
			}
		}
	}
</script>
<style scoped>
	.item {
    margin: 0.5rem;
    flex-basis: 29%;
	  background: #272822;
	  padding: 7px;
		border-radius: 9px;
		border: 1px solid #272822;
    box-shadow: 3px 5px 10px #ffd866;
    color: white;
	}

  .item .item_organization {
    color: #ffd866;
    font-weight: bold;
  }

  .item.El-Confidencial .item_organization {
    color: #78dce8;
    font-weight: bold;
  }

  .item.El-Confidencial {
    box-shadow: 3px 5px 10px #78dce8;
  } 

  .item.Civio .item_organization {
    color: #a9dc76;
    font-weight: bold;
  }

  .item.Civio {
    box-shadow: 3px 5px 10px #a9dc76;
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
    transition: all 0.2s ease-in;
  }

  .item img:hover {
    filter: grayscale(0%);
    filter: saturate(100%);
  }

  a {
    text-decoration: none;
    color: white;
  }

  h3 {
    font-weight: normal;
    margin: 10px 0;
  }
</style>