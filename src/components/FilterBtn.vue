<template>
	<div class="filter-container">
    <div class="filter-btn-container">
      <button class="filter-btn" v-for="org in orgs" :key="org.value" :class="[org.name.replace(/ /g, '-'), { clicked: clicked(org) }]" v-on:click="filterHandler(org)">
        {{ org.name }}
      </button>
    </div>
    <div>
      <p v-show="this.selectedFilter !== 'all'" class="user-msg responsive">
        Pulsa sobre <span :class="selectedFilter.replace(/ /g, '-')" >{{ this.selectedFilter }}</span> de nuevo para volver a mostrar el resto de trabajos
      </p>
      <p v-show="this.selectedFilter !== 'all'" class="user-msg desktop">
        Pulsa sobre <span :class="selectedFilter.replace(/ /g, '-')" >{{ this.selectedFilter }}</span> de nuevo para volver a mostrar el resto de trabajos
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	name: 'FilterBtn',
  props: {
    orgs: Array,
    selectedFilter: String
  },

  data() {
    return {
      payload: {
        key: 'organización',
        value: ''
      }
    }
  },

	methods: {
    ...mapActions(['filterItems']),

    filterHandler(org) {
      if (org['name'] === this.selectedFilter) {
        this.payload.value = 'all'
        this.filterItems(this.payload)
      } else {
        this.payload.value = org.name
        this.filterItems(this.payload)
      }
    },

    clicked(org) {
      return org.name === this.selectedFilter
    }
	},
}
</script>
<style scoped>
  .filter-container {
    width: 100%;
  }

	.filter-btn-container {
    display: flex;
    max-width: 570px;
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

  .user-msg {
    max-width: 700px;
    margin: 15px 0 5px 22px;
    font-size: 0.9em;
  }

  .user-msg.responsive {
    display: none;
  }

  span.Otros {
    color: rgb(255, 216, 102);
  }

  span.Civio {
    color: rgb(169, 220, 118);
  }

  span.El-Confidencial {
    color: rgb(120, 220, 232);
  }

  @media only screen and (max-width: 1000px) {
    .filter-container {
      justify-content: center;
      max-width: 100%;
    }

    .user-msg.responsive {
      display: block;
    }

    .user-msg.desktop {
      display: none;
    }
  } 
</style>