import TopicList from '@/views/demo/list';
import TopicDetail from '@/views/demo/detail';

let topicRoutes = [
  {
    path: '/demo',
    component: TopicList,
    routes: [
      {
        path: '/demo/:id',
        component: TopicDetail
      }
    ]
  }
];

export default topicRoutes;
