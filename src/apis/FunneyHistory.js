import * as request from 'superagent';

export function getFunneyHistoryApi(id, token) {
  return request
    .post(`https://funfintech.tk/api/v2/history`)
    .set('authorization', token)
    .send({id: id})
    .then(response => {
      const newToken = response.header.authorization;
      const body = response.body;
      return { body, newToken };
    })
    .catch(error => {
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
