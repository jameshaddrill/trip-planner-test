<template>
  <div>
    <h1>Home page</h1>

    <section class="article-list">
      	<div class="article" v-for="article in articles.data" :key="article._id">
			<h2>{{article.name}}</h2>
			<p>{{article.snippet}}</p>

			<label for="liked">Article liked</label>
			<input type="checkbox" id="liked" :value="article._id" v-model="likedArticles" />
     	</div>
    </section>
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
  mounted() {
    this.$http
      .get('/data/trip-planner.json')
	  .then(response => (this.articles = response))
  },
  methods:{
  }
}
</script>

<style scoped>
</style>