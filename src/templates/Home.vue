<template>
  <div>
    <h1>Home page</h1>

    <section class="article-list">
      	<div class="article" v-for="article in $root.articles" :key="article._id">
			<h2><router-link :to="`/article/${article._id}`">{{article.name}}</router-link></h2>
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
  methods:{
  }
}
</script>

<style scoped>
</style>