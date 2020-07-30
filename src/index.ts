import server from './server';

export default server()
  .then(app => {
    console.log(`🚀 Server ready at localhost:3000`);

    return app;
  })
  .catch(e => {
    console.log(e);
  });