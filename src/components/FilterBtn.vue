<template>
	<div class="filter_container">
    <button class="filter_btn" v-for="org in orgs" :key="org.value" :class="[org.name.replace(' ', '-'), {clicked: org.clicked}]" v-on:click="filterItems(org)">
      {{ org.name }}
    </button>
  </div>
</template>
<script>
	export default {
		name: 'FilterBtn',
		props: ['orgs'],
		methods: {
	    filterItems(org) {
        if (org.clicked === true) {
          org.clicked = !org.clicked
          this.$emit('filter-org', 'all')

        } else {
          this.orgs.forEach(d => {
            if (org != d) {
              d.clicked = false
            }
          })
          org.clicked = !org.clicked
          this.$emit('filter-org', org.name)
        }
	    }
  	},
	}
</script>
<style scoped>
	.filter_container {
    margin-bottom: 20px;
    display: flex;
    max-width: 470px;
  }

  .filter_btn {
    flex-basis: 30%;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
    margin: 7px;
    border-radius: 9px;
    box-shadow: 0px 3px 15px black; 
  }

 .filter_btn.clicked {
    text-decoration: underline;
  }

  button {
    background: #ffd866;
  }

  button.El-Confidencial {
    background: #78dce8;
  } 

  button.Civio{
    background: #a9dc76;
  } 

  
</style>