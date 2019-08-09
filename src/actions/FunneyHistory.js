export const getAllFunneyHistoryRequest = (data) => {
    return {
      type: 'GET_ALL_FUNNEY_HISTORY_REQUEST',
      data,
    }
};
export const getAllFunneyHistorySuccess = (data) => {
    return {
      type: 'GET_ALL_FUNNEY_HISTORY_SUCCESS',
      data,
    }
};
export const getAllFunneyHistoryFailed = (data) => {
    return {
      type: 'GET_ALL_FUNNEY_HISTORY_FAILED',
      data,
    }
};