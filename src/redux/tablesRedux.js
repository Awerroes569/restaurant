//selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
const updateTables = payload => ({ type: UPDATE_TABLES, payload });


// reducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  };
};
export default tablesReducer;