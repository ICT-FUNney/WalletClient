const initState = {
  id: '',
  token: '',
  snackbar: false,
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        id: action.data.id,
        token: action.token,
      };
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        id: action.data.id,
        token: action.token,
      };
    case 'UPDATE_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'SNACKBAR_OPEN':
      return {
        ...state,
        snackbar: true
      };
    case 'SNACKBAR_CLOSE':
      return {
        ...state,
        snackbar: false
      };
    case 'SIGN_OUT':
      return {
        ...state,
        id: '',
      };
    default:
      return state;
  }
}
