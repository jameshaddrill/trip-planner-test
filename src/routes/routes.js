import Home from '../templates/Home.vue';
import Article from '../templates/Article.vue';
import ArticleList from '../templates/ArticleList.vue';

export default [
	{
		path: '/',
		component: Home,
		name: 'home'
    },
    {
		path: '/article/:id',
		component: Article,
		name: 'articleDetails',
		props: true
	},
	{
		path: '/article',
		component: ArticleList,
		name: 'article'
	}
]