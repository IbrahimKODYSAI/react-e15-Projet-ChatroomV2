import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({ user, message, myself }) => {
  const classCss = classNames('message', {
    'message--own': myself,
  });
  return (
    <div className={classCss}>
      <div className="message-user">{user}</div>
      <div className="message-content">{message}</div>
    </div>
  );
};

Message.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  myself: PropTypes.bool.isRequired,
};

export default Message;
