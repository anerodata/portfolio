<template>
	<div id="filter_container">
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
	      // Clean show attributte in all orgs unless the selected one
	      /*this.orgs.forEach(d => {
	        if (org != d) {
            d.visible = false
          }
	      }) 
	      org.visible = !org.visible
	      this.items.forEach(item => {
          if(org.name  === 'Otros') {
            if(org.visible) {
              // If item organization is not in the orgs array, it belong to 'Others' and will be visible
              if(!this.orgs.some(org => org.name === item['organización'])) {
                item.visible = true
              } else {
                item.visible = false
              }
            } else {
              item.visible = true
            }
          } else {
            // If org.visible is true hid the cards that are not related to org...
            if(item['organización'] !== org.name && org.visible) {
              item.visible = false
            // ... else show everything or cards related to org
            } else {
              item.visible = true  
            }
          }
	      })*/
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