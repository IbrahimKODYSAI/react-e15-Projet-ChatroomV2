/**
 * Initial State
 */
// 5. je décris mes données, dans leur état initial, je peux également
// tester différents cas
const initialState = {
  // messages
  list: [],
  currentUser: 'anonymous',
  settingsUsername: '',
  settingsOpen: false,
  formInput: '',
};

/**
 * Types
 */
// je crée mes types d'actions
const SETTINGS_TOGGLE = 'SETTINGS_TOGGLE';
const CHANGE_SETTINGS_USERNAME = 'CHANGE_SETTINGS_USERNAME';
const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';
const CHANGE_FORM_INPUT = 'CHANGE_FORM_INPUT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // je décris l'évolution de mon state selon les actions
    case SETTINGS_TOGGLE:
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };

    case CHANGE_SETTINGS_USERNAME:
      return {
        ...state,
        settingsUsername: action.username,
      };

    case CHANGE_CURRENT_USER:
      return {
        ...state,
        currentUser: state.settingsUsername,
      };

    case CHANGE_FORM_INPUT:
      return {
        ...state,
        formInput: action.message,
      };

    case RECEIVE_MESSAGE:
      return {
        ...state,
        list: [
          ...state.list,
          action.message,
        ],
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
// fonctions retournant un objet représentant une action
export const settingsToggle = () => ({
  type: SETTINGS_TOGGLE,
});

export const changeSettingsUsername = username => ({
  type: CHANGE_SETTINGS_USERNAME,
  username,
});

export const changeCurrentUser = () => ({
  type: CHANGE_CURRENT_USER,
});

export const changeFormInput = message => ({
  type: CHANGE_FORM_INPUT,
  message,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

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
