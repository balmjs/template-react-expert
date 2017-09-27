import baseRoutes from './base';
import topicRoutes from './topic';
import NotFound from '../views/not-found';

let otherRoutes = [{
  path: '*',
  component: NotFound
}];

let routes = baseRoutes.concat(topicRoutes, otherRoutes);

export default routes;
