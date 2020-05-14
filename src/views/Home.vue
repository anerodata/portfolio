<template>
  <div class="container">
    <FilterBtn :orgs="orgs" @filter-org="filterOrg"/>
    <Items 
      :items="items"
      :orgs="orgs"
      :noSelectedOrgs="noSelectedOrgs"
      :selectedOrg="selectedOrg"/>
  </div>
</template>

<script>
import data from './../data/data.json'
import FilterBtn from './../components/FilterBtn.vue'
import Items from './../components/Items.vue'
export default {
  name: 'Home',
  components: {
    FilterBtn,
    Items
  },
  data() {
    return {
      orgs: [
          {
            name: 'El Confidencial',
            clicked: false
          },
    
          {
            name: 'Civio',
            clicked: false
          },

          {
            name: 'Otros',
            clicked: false
          }
        ],
      noSelectedOrgs: [],
      selectedOrg: 'all'
    }
  },
  methods: {
    filterOrg(orgValue) {
      this.selectedOrg = orgValue
      this.noSelectedOrgs = []
      this.orgs.forEach(org => {
        if(org.name !== orgValue) {
          this.noSelectedOrgs.push(org.name)
        }
      })
      this.selectedOrg = orgValue
    } 
  },
  computed: {
    items() {
      return data
    }
  }
}
</script>
