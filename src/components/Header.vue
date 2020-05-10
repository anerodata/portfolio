<template>
	<div class="header_container">
		<div class="header_top">
		<div id="header">
			<div id="header_title">
			 	<h1>
			 		{{title}}
			 	</h1>
			 	<span>
			 		{{subtitle}}
			 	</span>
			 	<!--
				 	<div id="social_btn">
						<a href="https://github.com/anerodata"  target="_blank">
							<img src="../assets/img/github.png"/>	
						</a>
						<a href="https://es.linkedin.com/in/antonio-hern%C3%A1ndez-637a2a74" target="_blank">
							<img src="../assets/img/linkedin.png"/>
						</a>
					</div>
				-->
			</div>
		</div>
		<Treemap :data="treemapData"/>
	</div>
		
	</div>
</template>

<script>

import Treemap from './Treemap.vue'
export default {
  name: 'Header',
  components: {
  	Treemap
  },
  props: ['title', 'subtitle', 'treemapData'],
  methods: {
  	
  }
}
</script>

<style scoped>
	.header_container {
		margin-top: 16px;
	}

	.header_top {
		width: 100%;
    	display: flex;
	}

	#header {
		flex-basis: 40%;
	}

	#header_title{
		font-family: 'Fira Code', monospace;
		color: #ff6188;
		/*color: #272822;*/
		text-align: center;
		margin: 0px;
	}

	#social_btn{
		border-radius: 9px;
	}	

	#social_btn {
		
	}

	#social_btn img{
		width: 30px;
		margin: 10px 10px;
	}

	h1 {
		font-size: 35px;
		margin-bottom: 5px; 
		margin-top: 0px;
	}

	#header span {
		font-size: 18px;
	}

	@media only screen and (max-width: 1200px) {
   	 	h1 {
      		font-size: 30px;
    	}

    	#header span {
			font-size: 16px;
		}
  	}

  	@media only screen and (max-width: 1000px) {
   	 	.header_top {
    		display: block;
    	}

    	#header_title {
    		margin-bottom: 16px;
    	}
  	}
</style>