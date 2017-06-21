import Home from '../views/home';
import About from '../views/about';
import TopicList from '../views/topic/list';
import TopicDetail from '../views/topic/detail'

let routes = [{
  path: '/home',
  component: Home
}, {
  path: '/about',
  component: About
}, {
  path: '/topics',
  component: TopicList,
  routes: [{
    path: '/topics/:id',
    component: TopicDetail
  }]
}];

export default routes;
