<template>
	<div class="filter-container">
    <button class="filter-btn" v-for="org in orgs" :key="org.value" :class="[org.name.replace(' ', '-'), {clicked: org.clicked}]" v-on:click="filterItems(org)">
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
	.filter-container {
    display: flex;
    max-width: 570px;
    width: 100%;
  }

  .filter-btn {
    flex-basis: 30%;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 3px 15px black;
    opacity: 0.8;
  }

 .filter-btn.clicked {
    opacity: 1;
    box-shadow: none;
  }

  button {
    background: rgba(255, 216, 102, 0.8);
  }

  button.El-Confidencial {
    background: rgba(120, 220, 232, 0.8);
  } 

  button.Civio{
    background: rgba(169, 220, 118, 0.8);
  }

  @media only screen and (max-width: 1000px) {
    .filter-container {
      justify-content: center;
      max-width: 100%;
    }
  }

  
</style>