const initState = {
  id: '',
  snackbar: false
};

export default function signInReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        id: action.data.id
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
    default:
      return state;
  }
}
