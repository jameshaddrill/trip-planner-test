<template>
    <div>
        <site-header></site-header>
        <router-view :articleContent="articleContent"></router-view>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default{
        components: {
            'site-header' : Header
        },
        data() {
            return {
                articleContent: this.$root.articles
            }
        }
    }

</script>