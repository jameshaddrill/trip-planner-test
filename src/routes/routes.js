import Home from '../templates/Home.vue';
import Article from '../templates/Article.vue';
import TripPlanner from '../templates/TripPlanner.vue';

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
        path: '/trip-planner',
        component: TripPlanner,
        name: 'tripPlanner',
        props: true
    }
    
]