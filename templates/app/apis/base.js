export function getBase(server) {
  server.get('/menu', () => {
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
          name: 'Demo',
          url: '/demo'
        }
      ]
    };
  });
}
