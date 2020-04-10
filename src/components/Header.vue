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
		color: #272822;
		text-align: center;
		margin: 0px;
		margin: 22px 0;
		border-radius: 9px;
		background: crimson;
		padding: 7px;
		box-shadow: 0px 3px 15px black;
		max-width: 450px;
	}

	div h1 {
		margin-bottom: 5px; 
		margin-top: 0px;
	} 
</style>