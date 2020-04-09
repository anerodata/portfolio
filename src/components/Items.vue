<template>
 <div></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Items',
  methods: {
  	...mapActions(['fetchItems'])	
  },
  
  created() {
  	console.log(this.fetchItems())
  }
}
</script>

<style scoped>
  
</style>