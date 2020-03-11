/**
 * Initial State
 */
// 5. je décris mes données, dans leur état initial, je peux également
// tester différents cas
const initialState = {
  // messages
  list: [],
};

/**
 * Types
 */
// je crée mes types d'actions
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return {
        ...state,
        list: [
          ...state.list,
          action.message,
        ],
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
