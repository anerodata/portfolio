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
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@600&display=swap');

	div {
		font-family: 'Fira Code', monospace;
		color: crimson;
		text-align: center;
		margin: 22px 0px;
	}

	div h1 {
		margin-bottom: 5px; 
	} 
</style>