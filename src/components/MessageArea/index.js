import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import './messagearea.scss';

const MessageArea = ({ MessagesList, closeDivByMessageArea }) => (
  <div id="MessageArea" onClick={() => closeDivByMessageArea()}>
    <ul>
      {MessagesList.map(message => (
        <Message
          key={message.id + message.label}
          {...message}
        />
      ))}
    </ul>
  </div>

);

MessageArea.propTypes = {
  MessagesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  closeDivByMessageArea: PropTypes.func.isRequired,
};

export default MessageArea;
