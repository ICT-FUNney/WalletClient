const initState = {
    history: []
};

export default function funneyHistoryReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_ALL_FUNNEY_HISTORY_SUCCESS':
            return {
                ...state,
                history: [
                    ...action.data.history
                ]
            };
        default:
            return state;
    }
}