import baseRoutes from './base';
import demoRoutes from './demo';
import NotFound from '@/views/not-found';

const otherRoutes = [
  {
    path: '*',
    component: NotFound
  }
];

let routes = baseRoutes.concat(demoRoutes, otherRoutes);

export default routes;
