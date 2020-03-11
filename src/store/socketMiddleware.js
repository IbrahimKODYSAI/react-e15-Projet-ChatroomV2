import { WEBSOCKET_CONNECT } from './reducers/settings';
import { receiveMessage } from './reducers/messages';
import { SEND_MESSAGE } from './reducers/form';

let socket;

const socketMiddleware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      socket = window.io('http://localhost:3001');
      socket.on('send_message', (message) => {
        // console.log('le back renvoie un message', message);
        store.dispatch(receiveMessage(message));
      });
      break;
    case SEND_MESSAGE: {
      // je peux récupérer le state
      // const state = store.getState();
      // const { currentUser, formInput } = store.getState();
      const state = store.getState();
      const message = {
        user: state.settings.currentUser,
        message: state.form.formInput,
      };
      // console.log('Je transmet le message', message);
      socket.emit('send_message', message);
      next(action);
      break;
    }
    default:
      // je laisse passer les actions qui ne m'intéressent pas dans ce middleware
      next(action);
  }
};

export default socketMiddleware;
