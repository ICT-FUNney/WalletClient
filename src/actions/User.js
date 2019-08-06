export const signInRequest = (data) => {
  return {
    type: 'SIGN_IN_REQUEST',
    data,
  }
};

export const signInSuccess = (data, token) => {
  return {
    type: 'SIGN_IN_SUCCESS',
    data,
    token
  }
};

export const signInFailed = () => {
  return {
    type: 'SIGN_IN_FAILED',
  }
};

export const signUpRequest = (data) => {
  return {
    type: 'SIGN_UP_REQUEST',
    data,
  }
};

export const signUpSuccess = (data, token) => {
  return {
    type: 'SIGN_UP_SUCCESS',
    data,
    token
  }
};

export const signUpFailed = () => {
  return {
    type: 'SIGN_UP_FAILED',
  }
};

export const updateToken = (token) => {
  return {
    type: 'UPDATE_TOKEN',
    token
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

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  }
};
