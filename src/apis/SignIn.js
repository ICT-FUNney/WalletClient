import * as request from 'superagent';

export function signInApi(data) {
  return request
    .post(`https://funfintech.tk/api/v1/signin`)
    .send({id: data.id, password: data.password})
    .then(response => {
      const body = response.body;
      return { body };
    })
    .catch(error => {
      return { error };
    });
}

export function signUpApi(data) {
  return request
    .post(`https://funfintech.tk/api/v1/signup`)
    .send({id: data.id, password: data.password})
    .then(response => {
      const body = response.body;
      return { body };
    })
    .catch(error => {
      return { error };
    });
}
