<template>
  <div class="filter-container">
    <div class="filter-btn-container">
      <button class="filter-btn" v-for="org in orgs" :key="org" :class="[org.replace(/ /g, '-'), { clicked: clicked(org) }]" v-on:click="filterHandler(org)">
        {{ org }}
      </button>
    </div>
    <div>
      <p v-show="this.filter !== 'all'" class="user-msg">
        Pulsa sobre <span :class="filter.replace(/ /g, '-')" v-on:click="filterHandler(filter)">{{ this.filter }}</span> de nuevo para volver a mostrar el resto de trabajos
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FilterBtn',
  props: {
    orgs: Array,
    filter: String
  },
  data() {
    return {
      filterSelected: ''
    }
  },
  methods: {
    filterHandler(org) {
      this.filterSelected = 'all'
      if (org !== this.filter) {
        this.filterSelected = org
      }
      this.$emit('filterItems', this.filterSelected)
    },
    clicked(org) {
      return org === this.filter
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
  margin: 15px 0 0px 5px;
  font-size: 0.9em;
}

.user-msg span {
  cursor: pointer;
  text-decoration: underline;
}

.user-msg span:hover {
  opacity: 0.7;
  text-decoration: none;
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
  .filter-btn-container {
    max-width: 100%;
    justify-content: center;
  }
  .user-msg {
    text-align: center;
  }
} 
</style>
