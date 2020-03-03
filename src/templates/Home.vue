<template>
  <div class="container">
	  <div class="row">
		  <div class="col-12 col-md-8">
			  <section>
				<article-listing-item 
					class="article-listing" 
					v-for="article in $root.articles" 
					:key="article._id"
					:article="article"
					:likedArticles="likedArticles"
					@clickedListing="listingClickEvent"
				>
				</article-listing-item>
			</section>
		  </div>
	  </div>
  </div>
</template>

<script>
	import ArticleListingItem from '../components/ArticleListingItem.vue';
	export default{
		name: 'home',
		components: {
			'article-listing-item' : ArticleListingItem
		},
	data(){
		return{
		articles: {},
		likedArticles: []
		}
	},
	mounted() {
		this.$localStorage.getItem('likedArticles').then((value) => {
			this.likedArticles = value || [];
		});
	},
	methods:{
		listingClickEvent(value) {
			if (value.event === 'removeListing') {
				const index = this.likedArticles.indexOf(value.id);
				this.likedArticles.splice(index, 1);
			} else {
				this.likedArticles.push(value.id);
			}

			this.$localStorage.setItem('likedArticles', this.likedArticles);
		}
	}
}
</script>

<style lang="scss" scoped>
	
</style>