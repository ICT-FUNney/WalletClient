const initState = {
    funney: 0,
};

export default function funneyReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_ALL_FUNNEY_SUCCESS':
            return {
                ...state,
                funney: action.data,
            };
        default:
            return state;
    }
}