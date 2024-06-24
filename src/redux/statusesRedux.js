import { API_URL } from '../config';

//selectors

export const getAllStatuses = ({ statuses }) => statuses;

// actions
const createActionName = actionName => `app/statuses/${actionName}`;
const GET_ALL_STATUSES = createActionName('GET_ALL_STATUSES');
const UPDATE_STATUSES = createActionName('UPDATE_STATUSES');

// action creators
const updateStatuses = payload => ({ type: UPDATE_STATUSES, payload });
export const getAllStatusesAction = () => ({ type: GET_ALL_STATUSES });

export const fetchDataStatuses = () => {
  return (dispatch, getState) => {
    fetch(`${API_URL}/statuses`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('response ok');
        return response.json();
      })
      .then(data => {
        const statuses = data;
        dispatch(updateStatuses(statuses));
      })
      .catch(error => {
        console.error('Fetching error:', error);
      });
  };
};

// reducer
const statusesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_STATUSES:
      return [...action.payload];
    case GET_ALL_STATUSES:
      return [...statePart];
    default:
      return statePart;
  };
};
export default statusesReducer;