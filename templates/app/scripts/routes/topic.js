import TopicList from '../views/topic/list';
import TopicDetail from '../views/topic/detail';

let topicRoutes = [{
  path: '/topics',
  component: TopicList,
  routes: [{
    path: '/topics/:id',
    component: TopicDetail
  }]
}];

export default topicRoutes;
