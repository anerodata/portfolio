<template>
	<article class="item" :class="itemClass" :id="itemId">
		<a :href="item.url" target="_blank">
  			<div class="item_header">
          <figure class="item_img" :class="imgLoaded ? 'fullOpacity' : ''" :style="{ height: imgHeight + 'px' }">
            <img style="max-width: 100%;" :src="loadImg(item)">
  				</figure>
          <h3>
  					{{ item.titulo }}
  				</h3>
  				<div class="item_info">
  					<span>{{ formatDate }}</span> - 
            <span class="item-organization">{{ item.organización }}</span> - 
            <span v-for="(descripción, index) in item.descripción" :key="index" class="item-description">
                {{ descripción }}<span v-if="index < item.descripción.length -1">,</span>
            </span>
  				</div>
  			</div>
  		</a>
  		<div>
  			<div class="item-package">
  				<span v-for="(biblioteca, index) in item.biblioteca" :key="index" :class="bibliotecaLang(biblioteca)" @click="filterHandler(biblioteca)">
  					{{ biblioteca }}
  				</span>
  			</div>
  		</div>
	</article>
</template>
<script>
import { mapActions } from 'vuex'
import moment from 'moment'
moment.locale('es')
export default {
	name: 'Item',
	props: {
    item: Object,
    filter: String
  },
  
  data() {
    return {
      imgLoaded: false,
      imgHeight: 0,
      payload: {
        key: 'biblioteca',
        value: ''
      }
    }
  },

  computed: {
    itemClass() {
      return this.item.organización.replace(' ', '-')
    },

    itemId() {
      return `item-${this.item.id}`
    },

    formatDate() {
      return moment(this.item.fecha).format('L')
    }
  },

  mounted() {
    // Set image height depending on viewport width
    this.imgHeight = this.changeImgHeight()
    window.addEventListener('resize', () => {
      this.imgHeight = this.changeImgHeight()
    })  
  },

  methods: {
    ...mapActions(['filterItems']),
    // Set library class for every span
    bibliotecaLang(biblioteca) {
      if (biblioteca.split('.')[1] !== undefined) {
        return biblioteca.split('.')[1]
      } else {
        return 'Otras'
      }
    },

    // Opacity transition starts after img is loaded
    loadImg(item) {
      const img = new Image()
      img.onload = function() {
        this.imgLoaded = true
      }.bind(this)

      img.src = require('./../assets/img/'+item.id+'.jpg')
      return img.src
    },

    changeImgHeight() {
      const el = document.getElementsByClassName('items-container')[0]
      if (window.innerWidth <= 500) {
        return el.parentNode.clientWidth * 270 * 2.7 / 1180
      } else if (window.innerWidth <= 700) {
        return el.parentNode.clientWidth * 245 * 1.5 / 1180
      } else {
        return el.parentNode.clientWidth * 245 / 1180
      }
    },

    filterHandler(biblioteca) {
      console.log(biblioteca, this.filter)
      if (biblioteca === this.filter) {
        this.payload.value = 'all'
        this.filterItems(this.payload)
      } else {
        this.payload.value = biblioteca
        this.filterItems(this.payload)
      }
    
    }
  }
}
</script>
<style scoped>
  .not-opacity {
    opacity: 0;
  }

  .opacity {
    opacity: 1;
  }

	.item {
    margin: 0.6rem;
    flex-basis: 29%;
	  background: #272822;
	  padding: 7px;
		border-radius: 9px;
		border: 1px solid #272822;
    box-shadow: 3px 5px 10px #ffd866;
    color: white;
	}

  .item h3{
    line-height: 1.5em;
  }

  .item_info {
    line-height: 1.4em;
  } 

  .item .item-organization {
    color: #ffd866;
    font-weight: bold;
  }

  .item.El-Confidencial .item-organization {
    color: #78dce8;
    font-weight: bold;
  }

  .item.El-Confidencial {
    box-shadow: 3px 5px 10px #78dce8;
  } 

  .item.Civio .item-organization {
    color: #a9dc76;
    font-weight: bold;
  }

  .item.Civio {
    box-shadow: 3px 5px 10px #a9dc76;
  }

  .item_info {
    margin-bottom: 10px;
  }

  .item_info, .item-package span{
    font-size: 0.9em;
  } 

	.item-description {
		margin: 5px 0;
	}

	.item-package span {
		border-radius: 3px;
		padding: 3px;
		margin: 10px 3px;
		display: inline-block;
		background: #272822;
    cursor: pointer;
	}

  .item-package span:hover {
    opacity: 0.5;
  }

  .item.not-visible {
    display: none;
  }

  .item_img {
    overflow: hidden;
    margin: 0;
    opacity: 0;
    transition: opacity 1s;
  }

  .item_img.fullOpacity {
    opacity: 1;
  }

  .item img {
    filter: grayscale(100%);
    filter: saturate(0%);
    transition: all 0.2s ease;
  }

  .item img:hover {
    filter: grayscale(0%);
    filter: saturate(100%);
  }

  a {
    text-decoration: none;
    color: white;
  }

  h3 {
    font-weight: normal;
    margin: 10px 0;
  }

</style>