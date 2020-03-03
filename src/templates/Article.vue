<template>
  <article v-if="$root.dataLoaded">
      <h1>{{currentArticle.name}}</h1>
      <p>{{currentArticle.body}}</p>
  </article>
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

<style scoped>
</style>
