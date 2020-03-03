<template>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__list-item"><router-link class="btn" to="/">Home</router-link>
            <li class="nav__list-item"><router-link class="btn" to="/trip-planner">My Trip Planner</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default{
  name: 'navigation',
  methods:{
  }
}
</script>

<style lang="scss" scoped>
    .nav {
        &__list {
            display: flex;
            justify-content: space-around;
        }

        &__list-item {
            margin: 20px;
        }
    }
</style>
