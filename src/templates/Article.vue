<template>
  <div>
    <h1>Article page</h1>
    <p>ID: {{ articleId }}</p>
  </div>
</template>

<script>
export default{
  name: 'article',
  data(){
    return{
      articleId: this.$route.params.id
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
