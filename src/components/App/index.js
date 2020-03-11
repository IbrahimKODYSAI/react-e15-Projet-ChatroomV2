/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import './app.scss';
/**
 * Code
 */
const App = () => (
  // 1. je découpe mon application en zones
  <div id="app">
    <h1 id="app-title">Chatroom</h1>
    <Messages />
    <Form />
    <Settings />
  </div>
);
/*
  <Settings open /> === <Settings open={true} />
  Pour passer une props avec un booléen en valeur qui vaut true
  on peut ne pas spécifer de valeur
*/

/**
 * Export
 */
export default App;
