<template>
    <header class="container">
        <div class="row">
            <div class="col-12 site-header ">
            <h1 class="site-header__title">VisitScotland Blog</h1>
            <navigation />
            </div>
        </div>
    </header>
</template>

<script>
import Navigation from './navigation.vue';

export default{
    name: 'site-header',
    components: {
        "navigation" : Navigation
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
    .site-header {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>