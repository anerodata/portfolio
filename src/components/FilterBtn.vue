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
    margin: 15px 0px 5px 0px;
    display: flex;
    max-width: 570px;
  }

  .filter_btn {
    flex-basis: 30%;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
    margin-right: -3px;
    border-radius: 5px;
    box-shadow: 0px 3px 15px black; 
  }

 .filter_btn.clicked {
    text-decoration: underline;
  }

  button {
    background: rgba(255, 216, 102, 0.9);
  }

  button.El-Confidencial {
    background: rgba(120, 220, 232, 0.9);
  } 

  button.Civio{
    background: rgba(169, 220, 118, 0.9);
  } 

  
</style>