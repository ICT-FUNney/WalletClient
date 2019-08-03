import * as request from 'superagent';

export function sendApi(data, token) {
  return request
    .post(`https://funfintech.tk/api/v2/transaction`)
    .set('authorization', token)
    .send({balance: parseInt(data.balance), id: data.id, send_id: data.send_id})
    .then(response => {
      const newToken = response.header.authorization;
      const body = response.body;
      return { body, newToken };
    })
    .catch(error => {
      console.log(error.status); // error 番号取れる
      if (error.status === 400) {
        alert('宛先が無効です。もう一度確認してください。');
      } else if (error.status === 401) {
        alert('トークンの有効期限が切れました。再ログインお願いします。');
        window.location.reload();
      } else {
        alert('通信に失敗しました。通信環境を確認してください。');
      }
      return { error };
    });
}
