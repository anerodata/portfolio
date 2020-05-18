<template>
	<header id="header">
		<div id="header-title">
		 	<h1>
		 		&lt;Antonio Hernández/&gt;
		 	</h1>
		 	<span>
		 		&lt;Periodismo de datos y desarrollo web/&gt;
		 	</span>
		</div>
	</header>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>
	#header {
    	flex-basis: 40%;
  	}

	#header-title{
		font-family: 'Source Code Pro', monospace;
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
		font-size: 36px;
		margin-bottom: 5px; 
		margin-top: 0px;
	}

	#header span {
		font-size: 18px;
		font-weight: 200;
	}

	@media only screen and (max-width: 1200px) {
   	 	h1 {
      		font-size: 32px;
    	}

    	#header span {
			font-size: 17px;
		}
  	}

  	@media only screen and (max-width: 1000px) {
   	 	.header_top {
    		display: block;
    	}

    	#header-title {
    		margin-bottom: 16px;
    	}
  	}
</style>