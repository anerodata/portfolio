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
		<FilterBtn :orgs="orgs" @filter-org="filterOrg"/>
	</div>
</template>

<script>
import FilterBtn from './FilterBtn.vue'
import Treemap from './Treemap.vue'
export default {
  name: 'Header',
  components: {
  	FilterBtn,
  	Treemap
  },
  props: ['title', 'subtitle', 'treemapData', 'orgs'],
  methods: {
  	filterOrg(orgValue) {
  		this.$emit('filter-org', orgValue)
    }
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
		padding: 7px;
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
		font-size: 35px;
		margin-bottom: 5px; 
		margin-top: 0px;
	}

	#header span {
		font-size: 18px;
	}
</style>