<template>
	<div class="header_container">
		<div id="header">
			<div id="header_title">
			 	<h1>
			 		{{title}}
			 	</h1>
			 	<span>
			 		{{subtitle}}
			 	</span>
			</div>
			<div id="social_btn">
				<a href="https://github.com/anerodata"  target="_blank">
					<img src="../assets/img/github.png"/>	
				</a>
				<a href="https://es.linkedin.com/in/antonio-hern%C3%A1ndez-637a2a74" target="_blank">
					<img src="../assets/img/linkedin.png"/>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title', 'subtitle']
}
</script>

<style scoped>
	.header_container {
		width: 100%;
    	max-width: 470px;
	}
	div #header{
		display: flex;
	}
	#header_title{
		flex-basis: 80%;
		font-family: 'Fira Code', monospace;
		color: #272822;
		text-align: center;
		margin: 0px;
		background: #ff6188;
		max-width: 450px;
		padding: 7px;
	}

	#header_title, #social_btn{
		margin: 18px 7px 12px 7px;
		border-radius: 9px;
		box-shadow: 0px 3px 15px black;
	}	

	#social_btn {
		flex-basis: 10%;
		background: #fc9867;	
	}

	#social_btn img{
		display: block;
		width: 25px;
		margin: 7px 10px;
	}

	#filter_btn {
		display: flex;
		margin-left: 7px;
		background: #272822;
		padding: 7px;
		border-radius: 9px;
		width: 92%;
		border: 1px solid;
	}

	#header h1 {
		margin-bottom: 5px; 
		margin-top: 0px;
	}
</style>