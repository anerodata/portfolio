<template>
  <div class="treemap_container">
    {{ this.pep }}
  </div>
</template>

<script>
export default {
  name: 'Treemap',
  props: ['data'],
  computed: {
  	pep() {
  		console.log(this.data)
  		return false
  	}
  }
}
</script>
<style scoped>

</style>
