import { PAGINATION_ACTIONS, paginationReducer } from '../../../src/utils/reducers/paginationReducer';

describe('paginationReducer - utils', () => {
  test('Debe verificar se sumen los numeros', () => {
    const sumar = (a, b) => (a+b);
    const suma = sumar(2, 2);
    expect(suma).toBe(4)
  });
  
  test('Debe retornar el estado por defecto', () => {
    const paginationResult = paginationReducer({page: 0}, {});
    expect(paginationResult).toEqual({page: 0});
  });

  test('Debe retornar el estado cuando la accion sea CHANGE_PAGE', () => {
    const paginationResult = paginationReducer({page: 0}, {type: PAGINATION_ACTIONS.CHANGE_PAGE, payload: 1});
    expect(paginationResult).toEqual({page: 1});
  });

  test('Debe retornar el estado cuando la accion sea CHANGE_ROWS_PER_PAGE', () => {
    const state = {page: 4, rowsPerPage: 10, offset: 3}
    const paginationResult = paginationReducer(state, {type: PAGINATION_ACTIONS.CHANGE_ROWS_PER_PAGE, payload: 25});
  
    expect(paginationResult).toEqual({...state, page: 0, rowsPerPage: 25});
  });
})

