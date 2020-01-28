import { Server } from 'miragejs';
import { DEBUG } from '@/config';

if (DEBUG) {
  new Server({
    routes() {
      this.namespace = 'api';

      this.get('/menu', () => {
        return {
          code: 200,
          message: 'OK',
          data: [
            {
              name: 'Home',
              url: '/home'
            },
            {
              name: 'About',
              url: '/about'
            },
            {
              name: 'Topics',
              url: '/topics'
            }
          ]
        };
      });
    }
  });
}
