import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
  ext: {
    loadimpact: {
      projectID: 123456, // opcional si ya tienes K6 Cloud
    },
    prometheus: {
      pushGateway: {
        url: `${__ENV.K6_PROMETHEUS_REMOTE_URL}`,
        username: `${__ENV.K6_PROMETHEUS_REMOTE_USER}`,
        password: `${__ENV.K6_PROMETHEUS_REMOTE_PASSWORD}`,
      },
    },
  },
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts/1');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'body is not empty': (r) => r.body.length > 0,
  });
}
