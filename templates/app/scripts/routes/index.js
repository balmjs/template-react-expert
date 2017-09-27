import baseRoutes from './base';
import topicRoutes from './topic';
import NotFound from '../views/not-found';

let notFound = [{
  path: '*',
  component: NotFound
}];

let routes = baseRoutes.concat(topicRoutes, notFound);

export default routes;
