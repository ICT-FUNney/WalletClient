import * as request from 'superagent';

export function signInApi(data) {
  return request
    .post(`https://funfintech.tk/api/v2/signin`)
    .send({id: data.id, password: data.password})
    .then(response => {
      const newToken = response.header.authorization;
      return { newToken };
    })
    .catch(error => {
      if(error.status !== 400) {
        alert('通信に失敗しました。通信環境を確認してください。');
      }
      return { error };
    });
}

export function signUpApi(data) {
  return request
    .post(`https://funfintech.tk/api/v2/signup`)
    .send({id: data.id, password: data.password})
    .then(response => {
      const newToken = response.header.authorization;
      return { newToken };
    })
    .catch(error => {
      if(error.status !== 400) {
        alert('通信に失敗しました。通信環境を確認してください。');
      }
      return { error };
    });
}
