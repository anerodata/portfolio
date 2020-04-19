<template>
	<div id="filter_container">
    <button class="filter_btn" v-for="org in orgs" :key="org.value" v-bind:class="[org.name.replace(' ', '-'), {'shown': org.show}]" v-on:click="filterItems(org)">
      {{ org.name }}
    </button>
  </div>
</template>
<script>
	export default {
		name: 'FilterBtn',
		props: ['orgs', 'items'],
		methods: {
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
	}
</script>
<style scoped>
	#filter_container {
    margin: 0 0 20px 0;
    display: flex;
    max-width: 470px;
  }

  .filter_btn {
    flex-basis: 30%;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 7px;
    margin: 7px;
    border-radius: 9px;
    box-shadow: 0px 3px 15px black; 
  }

 .filter_btn.shown {
    text-decoration: underline;
  }

  button.El-Confidencial {
    background: #78dce8;
  } 

  button.Civio{
    background: #a9dc76;
  } 

  button.Antonio {
    background: #ffd866;
  }
</style>