import * as request from 'superagent';

export function sendApi(data) {
  return request
    .post(`https://funfintech.tk/api/v1/transaction`)
    .send({balance: parseInt(data.balance), id: data.id, send_id: data.send_id})
    .then(response => {
      const body = response.body;
      return { body };
    })
    .catch(error => {
      return { error };
    });
}
