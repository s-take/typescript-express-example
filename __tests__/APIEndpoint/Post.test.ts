import request from 'supertest';
import server from '../../src/server';
import {closeDatabaseConn} from '../../src/databaseConn';

let app;

beforeAll(() => {
  return server().then(_app => {
    app = _app;
  });
});

afterAll(async() => {
  await closeDatabaseConn();
  app.close()
});

describe('Post Controller', () => {
  it('get /posts 200', () => {
    return request(app).get('/posts')
    .expect(200)
  });
  // it('get /asdf not found', done => {
  //   expect(request(app).get('/asdf')).rejects.toThrow(Error);
  //   //return request(app).get('/asdf')
  //   //.expect(404)
  //   done();
  // });
});