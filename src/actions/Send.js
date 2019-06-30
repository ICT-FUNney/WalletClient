export const sendRequest = (data) => {
  return {
    type: 'SEND_REQUEST',
    data,
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
