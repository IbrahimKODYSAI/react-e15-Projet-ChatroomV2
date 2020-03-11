/**
 * Initial State
 */
// 5. je décris mes données, dans leur état initial, je peux également
// tester différents cas
const initialState = {
  currentUser: 'anonymous',
  settingsUsername: '',
  settingsOpen: false,
};

/**
 * Types
 */
// je crée mes types d'actions
const SETTINGS_TOGGLE = 'SETTINGS_TOGGLE';
const CHANGE_SETTINGS_USERNAME = 'CHANGE_SETTINGS_USERNAME';
const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';

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

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
