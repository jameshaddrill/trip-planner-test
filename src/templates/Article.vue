<template>
  <div class="container">
	  <div class="row">
		  <div class="col-12">
        <article class="article" v-if="$root.dataLoaded">
            <h1 class="article__title h1">{{currentArticle.name}}</h1>
			<p class="article__author small">By {{currentArticle.author}}</p>
            <p class="article__content">{{currentArticle.body}}</p>			
        </article>
      </div>
    </div>
  </div>
</template>

<script>
	export default{
		name: 'article-page',
		data(){
			return{
			articleId: this.$route.params.id,
			}
		},
		computed: {
			currentArticle: function() {
				// filter articles by the current id and pass back the content for that article
				return(this.$root.articles.filter(article => article._id === this.articleId)[0]);
			}
		},
		methods:{
		}
	}
</script>

<style lang="scss" scoped>
	.article {
		&__title {
			margin-bottom: 0.5rem;
		}

		&__author {
			margin-bottom: 1.5rem;
		}

		&__content {
		line-height: 1.5;
		}
	}
</style>
