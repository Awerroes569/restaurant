import { API_URL } from "../config";

//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables}, tableId) => {
  const filtered = tables.find(table => table.id === tableId);
  return filtered ? filtered : { error: true };
};

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const GET_ALL_TABLES = createActionName('GET_ALL_TABLES');

// action creators
const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const getAllTablesAction = () => ({ type: GET_ALL_TABLES });

export const fetchDataTables = () => {
  return (dispatch, getState) => {
    fetch(`${API_URL}/tables`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('response ok');
        return response.json();
      })
      .then(data => {
        const tables  = data;
        dispatch(updateTables(tables));
      })
      .catch(error => {
        console.error('Fetching error:', error);
      });
  };
};

// reducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case GET_ALL_TABLES:
      return [...statePart];
    default:
      return statePart;
  };
};
export default tablesReducer;