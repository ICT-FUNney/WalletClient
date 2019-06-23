export const signInRequest = (data) => {
  return {
    type: 'SIGN_IN_REQUEST',
    data,
  }
};

export const signInSuccess = (data) => {
  return {
    type: 'SIGN_IN_SUCCESS',
    data,
  }
};

export const signInFailed = () => {
  return {
    type: 'SIGN_IN_FAILED',
  }
};

export const snackbarOpen = () => {
  return {
    type: 'SNACKBAR_OPEN',
  }
};

export const snackbarClose = () => {
  return {
    type: 'SNACKBAR_CLOSE',
  }
};
