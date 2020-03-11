/**
 * Initial State
 */
const initialState = {
  formInput: '',
};

/**
 * Types
 */
// je crée mes types d'actions
const CHANGE_FORM_INPUT = 'CHANGE_FORM_INPUT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // je décris l'évolution de mon state selon les actions

    case CHANGE_FORM_INPUT:
      return {
        ...state,
        formInput: action.message,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        formInput: '',
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const changeFormInput = message => ({
  type: CHANGE_FORM_INPUT,
  message,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
