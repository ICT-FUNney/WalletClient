export const getAllFunneyRequest = (data) => {
    return {
      type: 'GET_ALL_FUNNEY_REQUEST',
      data,
    }
};
export const getAllFunneySuccess = (data) => {
    return {
      type: 'GET_ALL_FUNNEY_SUCCESS',
      data,
    }
};
export const getAllFunneyFailed = (data) => {
    return {
      type: 'GET_ALL_FUNNEY_FAILED',
      data,
    }
};