<template>
  <div class="container">
	  <div class="row">
		  <div class="col-12">
        <article class="article" v-if="$root.dataLoaded">
            <h1 class="article__title">{{currentArticle.name}}</h1>
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
      margin-bottom: 2rem;
    }

    &__content {
      line-height: 1.5;
    }
  }
</style>
