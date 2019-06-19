const initState = {
  path: ''
};

export default function pathReducer(state = initState, action) {
  switch (action.type) {
    case 'SET_PATH':
      return {
        ...state,
        path: action.path
      };
    default:
      return state;
  }
}
