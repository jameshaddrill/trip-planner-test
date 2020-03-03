<template>
  <div class="container">
	  <div class="row">
		  <div class="col-12 col-md-8">
			  <section>
				<div class="article-listing" 
					 v-for="article in $root.articles" 
					 :key="article._id"
				>
					<div class="article-listing__title-bar">
						<h2 class="article-listing__title"><router-link :to="`/article/${article._id}`">{{article.name}}</router-link></h2>
						<label 
							:for="article._id" 
							:class="['article-listing__label', {'article-listing__label--liked' : (checkLiked(article._id))}]">
							Article liked
						</label>
						<input 
							class="article-listing__liked sr-only" 
							type="checkbox" 
							:id="article._id" 
							:value="article._id" 
							v-model="likedArticles" 
						/>
					</div>
					<p>{{article.snippet}}</p>
				</div>
			</section>
		  </div>
	  </div>
  </div>
</template>

<script>
export default{
  name: 'home',
  data(){
    return{
	  articles: {},
	  likedArticles: ['5e56de17aeb4377ce5d9ee6f']
    }
  },
  methods:{
	  checkLiked(id) {
		  if(this.likedArticles.includes(id)) {
			  return true
		  }
	  }
  }
}
</script>

<style lang="scss" scoped>
	.article-listing {
		margin-bottom: 2.5rem;

		&__title-bar {
			display: flex;
			justify-content: space-between;
		}

		&__title {
			 margin-bottom: 1.5rem;
		}

		&__label {
			text-indent: -9999px;
			width: 20px;
			height: 20px;
			background: url('../img/icons/heart-empty.png') 0 0 no-repeat;
			background-size: contain;

			&--liked {
				background: url('../img/icons/heart-full.png') 0 0 no-repeat;
				background-size: contain;
			}
		}

		&__liked {
			background: blue;

			&:checked {
				background: pink;
			}
		}
	}
</style>