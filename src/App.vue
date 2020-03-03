<template>
    <div>
        <router-view :articleContent="articleContent"></router-view>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                articleContent: this.$root.articles
            }
        }
    }

</script>