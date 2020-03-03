<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8">
                <h1 class="trip-planner__title">My trip planner</h1>
                {{$root.dataLoaded}}
                <section class="trip-planner" v-if="$root.dataLoaded && likedArticlesSet">
                    <div class="trip-planner__listing"  v-for="article in filteredArticles" :key="article._id">
                            <h2 class="trip-planner__title"><router-link :to="`/article/${article._id}`">{{article.name}}</router-link></h2>
                            <label 
                                class="trip-planner__label"
                                :for="article._id"                    
                                @click="removeListing(article._id)">
                                Remove article
                            </label>
                            <input 
                                class="article-listing__liked sr-only" 
                                type="checkbox" 
                                :id="article._id" 
                                :value="article._id" 
                            />
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'trip-planner',
        data() {
            return {
                likedArticles: [],
                likedArticlesSet: false
            }
        },
        computed: {
            filteredArticles: function() {
                let articlesContent = [];

                this.$root.articles.forEach(article => {
                    if(this.likedArticles.indexOf(article._id) > -1) {
                        articlesContent.push(article);
                    };
                })

                return articlesContent
                 
            }
        },
        mounted() {
            this.$localStorage.getItem('likedArticles').then((likedArticles) => {
                this.likedArticlesSet = true;
                this.likedArticles = likedArticles;
            });
        },
        methods:{
            removeListing: function(id) {
                const index = this.likedArticles.indexOf(id);
                this.likedArticles.splice(index, 1);

                this.$localStorage.setItem('likedArticles', this.likedArticles);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .trip-planner {
        margin-bottom: 1.5rem;

        &__listing {
            display: flex;
            justify-content: space-between;
        }

        &__title {
            margin-bottom: 2rem;
        }

        &__label {
            cursor: pointer;
        }
    }
</style>