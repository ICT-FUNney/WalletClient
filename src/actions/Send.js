export const sendRequest = (data, token) => {
  return {
    type: 'SEND_REQUEST',
    data,
    token
  }
};

export const sendSuccess = () => {
  return {
    type: 'SEND_SUCCESS',
  }
};

export const sendFailed = () => {
  return {
    type: 'SEND_FAILED',
  }
};
