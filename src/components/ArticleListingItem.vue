<template>
    <section>
        <div class="article-listing__title-bar" v-if="$root.dataLoaded">
            <h2 class="article-listing__title"><router-link :to="`/article/${article._id}`">{{article.name}}</router-link></h2>
            <label 
                :for="article._id" 
                :class="['article-listing__label', {'article-listing__label--liked' : checkLiked(article._id)}]"
                @click="clickedListing(article._id)">
                Article liked
            </label>
            <input 
                class="article-listing__liked sr-only" 
                type="checkbox" 
                :id="article._id" 
                :value="article._id" 
            />
        </div>
        <p>{{article.snippet}}</p>
    </section>
</template>

<script>
    export default {
        name: 'article-listing-item',
        props: ['article', 'likedArticles'],
        data() {
            return {
                checkedItems : []      
            }
        },
        mounted() {
            this.checkedItems = this.likedArticles;
        },
        methods: {
            checkLiked: function(id) {
                if (this.likedArticles && this.likedArticles.includes(id)) {
                    return true;
                }
            },
            clickedListing: function(id) {
                if (this.likedArticles.includes(id)) {
                    this.$emit('clickedListing', {'event' : 'removeListing', 'id' : id})
                } else {
                    this.$emit('clickedListing', {'event' : 'addListing', 'id' : id})
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .article-listing {
		margin-bottom: 2.5rem;

		&__title-bar {
			display: flex;
			justify-content: space-between;
		}

		&__title {
			 margin-bottom: 1.5rem;
		}

		&__label {
			text-indent: -9999px;
			width: 20px;
			height: 20px;
			background: url('../img/icons/heart-empty.png') 0 0 no-repeat;
			background-size: contain;

			&--liked {
				background: url('../img/icons/heart-full.png') 0 0 no-repeat;
				background-size: contain;
			}
		}

		&__liked {
			background: blue;

			&:checked {
				background: pink;
			}
		}
	}
</style>