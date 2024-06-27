export const PAGINATION_ACTIONS = {
  CHANGE_PAGE: 'CHANGE_PAGE',
  CHANGE_ROWS_PER_PAGE: 'CHANGE_ROWS_PER_PAGE',
}

export const paginationReducer = (state, action) => {
  switch(action.type) {
    case PAGINATION_ACTIONS.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case PAGINATION_ACTIONS.CHANGE_ROWS_PER_PAGE:
      return {
        ...state,
        page: 0,
        rowsPerPage: action.payload
      }
    default:
      return state;
  }
}