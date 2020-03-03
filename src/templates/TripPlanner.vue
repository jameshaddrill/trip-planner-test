<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8" v-if="$root.dataLoaded && likedArticlesSet">
                <h1 class="trip-planner__title">My trip planner</h1>
                <section class="trip-planner" v-if="likedArticles && likedArticles.length > 0">
                    <div class="trip-planner__listing"  v-for="article in filteredArticles" :key="article._id">
                            <h2 class="trip-planner__title h2"><router-link :to="`/article/${article._id}`">{{article.name}}</router-link></h2>
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
                <section v-else>
                    <h2 class="trip-planner__title">You haven't added any trips yet!</h2>
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
                this.likedArticles = likedArticles;
                this.likedArticlesSet = true;
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
        margin-top: 3rem;

        &__listing {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 2px solid #eee;
        }

        &__title {

            a {
                color: inherit;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }

            }
        }

        &__label {
            cursor: pointer;
        }
    }
</style>