import * as request from 'superagent';

export function getFunneyApi(id) {
  return request
    .post(`https://funfintech.tk/api/v1/balance`)
    .send({id: id})
    .then(response => {
      const body = response.body;
      return { body };
    })
    .catch(error => {
      return { error };
    });
}
