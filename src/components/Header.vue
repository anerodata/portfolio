<template>
	<div>
	 	<h1>
	 		{{title}}
	 	</h1>
	 	<span>
	 		{{subtitle}}
	 	</span>
	</div>
</template>

<script>

export default {
  name: 'Header',
  props: ['title', 'subtitle']
}
</script>

<style scoped>
 
</style>