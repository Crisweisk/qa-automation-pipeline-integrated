import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
  ext: {
    loadimpact: {
      projectID: __ENV.K6_CLOUD_PROJECT_ID,
      name: 'Test from QA Pipeline'
    }
  }
};

export default function () {
  let res = http.get('https://reqres.in/api/users?page=2');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response is not empty': (r) => r.body.length > 0
  });
}
