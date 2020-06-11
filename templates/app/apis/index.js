import { isDev } from '@/config';
import { Server } from 'miragejs';
import { getBase } from './base';

if (isDev) {
  const ApiRegExp = /^\/api\//;

  const server = new Server({
    models: {},

    seeds(server) {
      // More data
    },

    routes() {
      this.namespace = '/api';

      getBase(this);
      // More apis
    }
  });

  server.passthrough((request) => {
    return !ApiRegExp.test(request.url);
  });
}
