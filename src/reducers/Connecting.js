const initState = {
  isConnecting: false,
};

export default function connectingReducer(state = initState, action) {
  switch (action.type) {
    case 'WILL_CONNECT':
      return {
        isConnecting: true,
      };
    case 'DONE_CONNECT':
      return {
        isConnecting: false,
      };
    default:
      return state;
  }
}
